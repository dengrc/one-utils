/**
 * 生成递归函数
 * @param fn
 */
export function toTailRecursion(fn) {
    let value,
        active = false;
    const accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = fn.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    }
}
/**
 * 数组去重
 * @param array 
 * @param getKey 
 */
export function deduplication(array, getKey) {
    // const map = {};
    // array.forEach((item) => {
    //     map[getIdFn(item)] = item
    // })
    // return Object.values(map)
    const set = new Set()
    array.filter((item) => {
        const key = getKey(item)
        if (set.has(key)) {
            return false
        }
        set.add(key)
        return true
    })
}
/**
 * 类似 csv 数组 转为 json 数组
 * @param array 
 * @param keys 
 */
export function likeCSVToArrayJson(array, keys) {
    !keys && (keys = array.shift());
    return array.length ? array.map(new Function("ary", "return {" + keys.map(function (key, i) {
        return "'" + key + "':ary[" + i + "]"
    }).join(',') + "}")) : []
}
/**
 * json 数组 数组 转为 类似 csv
 * @param array 
 * @param keys 
 */
export function arrayJsonToLikeCSV(array, keys) {
    if (array.length) {
        !keys && (keys = Object.keys(array[0]));
        return array.map(new Function("json", "return [ json." + keys.join(",json.") + " ]"))
    }
    return []
}