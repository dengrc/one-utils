/**
 * 下载文本
 * @param fileName 
 * @param content 
 */
export function downloadContent(fileName: string, content: string): void

/**
 * 下载文件
 * @param file 
 * @param [fileName = file.name] 
 */
export function downloadFile(file: File | Blob, fileName?: string): void

/**
 * 下载 url 对应文件
 * @param url 
 * @param [fileName = url.split("/").pop()] 
 */
export function downloadUrl(url: string, fileName?: string): void