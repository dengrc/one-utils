/**
 * url 参数转为 json
 * @param {string} params 
 */
export function toJSON(params: string): object

/**
 * json 转为 url 参数
 * @param {Object} json 
 */
export function toParams(json: object): string