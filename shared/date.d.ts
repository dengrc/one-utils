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
export function dynamicDate(dateCode:string)