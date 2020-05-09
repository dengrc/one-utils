/**
 * 去抖 requestAnimationFrame
 * @param callback 
 */
export function debounceRequestAnimationFrame(callback) {
    let raf = 0;
    return function (this) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            callback.apply(this, arguments)
        })
    }
}
/**
 * 去抖
 * @param callback 
 * @param delay 延迟时间
 */
export function debounce(callback, delay = 0) {
    let raf = 0;
    return function (this) {
        clearTimeout(raf);
        raf = setTimeout(() => {
            callback.apply(this, arguments)
        }, delay)
    }
}