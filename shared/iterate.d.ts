/**
 * 生成递归函数
 * @param fn
 */
export function toTailRecursion<T>(fn: (...args: any) => T): () => T
/**
 * 数组去重
 * @param array 
 * @param getKey 
 */
export function deduplication<T>(array: Array<T>, getKey: () => any): Array<T>
/**
 * 类似 csv 数组 转为 json 数组
 * @param array 
 * @param keys 
 */
export function likeCSVToArrayJson(array: Array<any>, keys?: Array<string>): Array<any>
/**
 * json 数组 数组 转为 类似 csv
 * @param array 
 * @param keys 
 */
export function arrayJsonToLikeCSV(array: Array<any>, keys?: Array<string>): Array<any>