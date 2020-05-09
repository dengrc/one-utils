

interface Iregexp {
    /**
     * 中文
     */
    chinese: RegExp
    /**
     * 中文数字
     */
    chineseNumber:RegExp
    /**
     * 英文
     */
    english: RegExp
    /**
     * email
     */
    email: RegExp
}

/**
 * 常用正则
 */
export const regexp: Iregexp