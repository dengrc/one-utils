/**
 * 常用正则
 */
export const regexp = Object.create({
    chinese: /^[\u0391-\uFFE5]+$/,  
	chineseNumber: /^[零一二两三四五六七八九十百千万亿壹贰叁肆伍陆柒捌玖拾佰仟]+$/,
    english: /^[A-Za-z]+$/,
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
})