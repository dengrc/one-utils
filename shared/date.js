/**
 * 基于当前时间，通过 格式化字符 生成 时间
 * @description
 * +- 符合标识相对值，无符合标识觉得值
 * dynamicDate('-1M') 获取上一月。dynamicDate('+1M') 获取上一月
 * dynamicDate('1M')  获取一月
 * dynamicDate('-1w,1D') 上周星期一
 * 有月份操作的视情况 先设置 1d ; 比如：大月最后一天切换到小月
 * dynamicDate('1d,-1q') 上季度第一天
 * dynamicDate('1d,-q,0d') 上季度最后一天
 * y年，M月,d日，h时，m分，s秒，S毫秒
 * q季度，w 周, D 星期
 * @param dateCode 
 */
export function dynamicDate(dateCode) {
    const date = new Date()
    if (dateCode) {
        dateCode.split(",").forEach((a) => {
            let fn = "";
            let n = parseInt(a.replace(/[^\d+-]/g, "")) || 0;
            let isRelatively = /[+-]/.test(a[0]);
            if (/y/.test(a)) {
                fn = "FullYear"
            } else if (/M/.test(a)) {
                fn = "Month"
                //月 绝对值 -1
                if (!isRelatively && n > 0) {
                    n -= 1
                }
            } else if (/d/.test(a)) {
                fn = "Date"
            } else if (/h/.test(a)) {
                fn = "Hours"
            } else if (/m/.test(a)) {
                fn = "Minutes"
            } else if (/s/.test(a)) {
                fn = "Seconds"
            } else if (/S/.test(a)) {
                fn = "Milliseconds"
            } else if (/w/.test(a)) {
                n *= 7
                //周 相对值
                if (isRelatively) {
                    fn = "Date"
                }
            } else if (/D/.test(a)) {
                fn = "Date"
                //星期 绝对值
                if (!isRelatively) {
                    const d = date.getDay() || 7;
                    n -= d
                    isRelatively = true
                }
            } else if (/q/.test(a)) {
                //fn = "Week"
                fn = "Month"
                n = isRelatively ? (Math.floor((date.getMonth() + 3) / 3) - 1) * 3 + n * 3 : (n - 1) * 3
                isRelatively = false
            }
            if (fn) {
                date["set" + fn](isRelatively ? date["get" + fn]() + n : n)
            }
        })
    }
    return date
}