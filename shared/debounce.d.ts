/**
 * 去抖 requestAnimationFrame
 * @param callback 
 */
export function debounceRequestAnimationFrame(callback: Function): (this: any) => void
/**
 * 去抖
 * @param callback 
 * @param delay 延迟时间
 */
export function debounce(callback: Function, delay?: number): (this: any) => void