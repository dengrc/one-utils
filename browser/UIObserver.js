import {
    debounceRequestAnimationFrame
} from "../shared/debounce"

// interface IResizeObserverEntrie {
//     target: Element,
//     contentRect: DOMRectReadOnly
// }

// interface IMutationRecord {
//     type: "childList" | "attributeFilter" | "attributeOldValue" | "attributes" | "characterData" | "characterDataOldValue"
//     target: Element,
//     contentRect: DOMRectReadOnly
// }


const Symbol_getTarget = Symbol('getTarget')
const Symbol_observer = Symbol('observer')
const Symbol_handlerMap = Symbol('handlerMap')

class UIObserver {
    [Symbol_observer] = null;
    [Symbol_handlerMap] = null;
    constructor(T, rafCallback = false) {
        const callback = (entries) => {
            let handler;
            for (let e of entries) {
                handler = this[Symbol_handlerMap].get(this[Symbol_getTarget](e))
                if (handler) {
                    handler(e)
                }
            }
        };
        this[Symbol_observer] = new T(rafCallback ? debounceRequestAnimationFrame(callback) : callback)
        this[Symbol_handlerMap] = new WeakMap()
    }

    [Symbol_getTarget](e) {
        return e.target
    }

    observe(el, fn, options = null) {
        this[Symbol_observer].observe(el, options)
        this[Symbol_handlerMap].set(el, fn)
    }

    unobserve(el) {
        if (this[Symbol_observer].unobserve) {
            this[Symbol_observer].unobserve(el)
        }
        this[Symbol_handlerMap].delete(el)
    }

    disconnect() {
        this[Symbol_observer].disconnect()
    }
}

export class UIResizeObserver extends UIObserver {
    constructor() {
        super(ResizeObserver, true);
    }
}


export class UIIntersectionObserver extends UIObserver {
    constructor() {
        super(IntersectionObserver)
    }
}

const mutationTargetAttribute = 'mutation-observer-target';

export class UIMutationObserver extends UIObserver {

    constructor() {
        super(MutationObserver)
    }

    [Symbol_getTarget](e) {
        return e.target.closest(`[${mutationTargetAttribute}]`)
    }

    observe(el, fn, options = null) {
        el.setAttribute(mutationTargetAttribute, '')
        super.observe(el, fn, options)
    }

    unobserve(el) {
        el.removeAttribute(mutationTargetAttribute)
        super.unobserve(el)
    }

    takeRecords() {
        if (this[Symbol_observer].takeRecords) {
            this[Symbol_observer].takeRecords()
        }
    }
}