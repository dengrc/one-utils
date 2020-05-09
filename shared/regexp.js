/**
 * 字符正则编码
 * @param string 
 */
export function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$&");
}