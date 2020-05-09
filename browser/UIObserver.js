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


// const Symbol_getTarget = Symbol('getTarget')
// const Symbol_observer = Symbol('observer')
// const Symbol_handlerMap = Symbol('handlerMap')

class UIObserver {
    // __Symbol_observer = null;
    // __Symbol_handlerMap = null;
    constructor(T, rafCallback = false) {
        const callback = (entries) => {
            let handler;
            for (let e of entries) {
                handler = this.__Symbol_handlerMap.get(this.__Symbol_getTarget(e))
                if (handler) {
                    handler(e)
                }
            }
        };
        this.__Symbol_observer = new T(rafCallback ? debounceRequestAnimationFrame(callback) : callback)
        this.__Symbol_handlerMap = new WeakMap()
    }

    __Symbol_getTarget(e) {
        return e.target
    }

    observe(el, fn, options = null) {
        this.__Symbol_observer.observe(el, options)
        this.__Symbol_handlerMap.set(el, fn)
    }

    unobserve(el) {
        if (this.__Symbol_observer.unobserve) {
            this.__Symbol_observer.unobserve(el)
        }
        this.__Symbol_handlerMap.delete(el)
    }

    disconnect() {
        this.__Symbol_observer.disconnect()
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

    __Symbol_getTarget(e) {
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
        if (this__Symbol_observer.takeRecords) {
            this__Symbol_observer.takeRecords()
        }
    }
}