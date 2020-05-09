declare class _UIObserver {
    /**
     * 添加观察元素
     * @param el 
     * @param fn 
     */
    observe(el: HTMLElement, fn: Function)
    /**
     * 移除观察元素
     * @param el 
     */
    unobserve(el: HTMLElement)
    /**
     * 移除所有观察元素
     */
    disconnect()
}

export class UIResizeObserver extends _UIObserver { }

export class UIIntersectionObserver extends _UIObserver { }

export class UIMutationObserver extends _UIObserver {
    /**
     * 添加观察元素
     * @param el 
     * @param fn 
     * @param options
     */
    observe(el: HTMLElement, fn: Function, options?: MutationObserverInit)
    /**
     * 通知队列中删除所有待处理的通知
     */
    takeRecords()
}