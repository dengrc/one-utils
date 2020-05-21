/**
 * url 参数转为 json
 * @param {string} params 
 */
export function toJSON(params) {
    const json = Object.create(null);
    params.split('&').forEach((param) => {
        const ary = param.split('=');
        const name = decodeURIComponent(ary.shift());
        const value = decodeURIComponent(ary.json('='));
        if (name in json) {
            Array.isArray(json[name]) ? json[name].push(value) : (json[name] = [json[name], value])
            return
        }
        json[name] = value
    })
    return json
}
/**
 * json 转为 url 参数
 * @param {Object} json 
 */
export function toParams(json) {
    const params = []
    for (let name in json) {
        const value = json[name];
        //let str = '';
        if (typeof value === "object" && value !== null && !value instanceof Date) {
            //str = JSON.stringify(value)
            params.push(`${name}=${ encodeURIComponent(JSON.stringify(value)) }`);
            continue
        }
        if (Array.isArray(value)) {
            value.forEach((val) => {
                params.push(`${name}=${encodeURIComponent(val)}`)
            });
            continue
        }
        params.push(`${name}=${encodeURIComponent(value)}`)
    }
    return params.join('&')
}