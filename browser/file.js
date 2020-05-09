/**
 * 下载文本
 * @param fileName 
 * @param content 
 */
export function downloadContent(fileName, content) {
    downloadFile(new Blob([content]), fileName)
}
/**
 * 下载文件
 * @param file 
 * @param [fileName = file.name] 
 */
export function downloadFile(file, fileName = file.name) {
    const url = URL.createObjectURL(file);
    downloadUrl(file, fileName);
    URL.revokeObjectURL(url)
}
/**
 * 下载 url 对应文件
 * @param url 
 * @param [fileName = url.split("/").pop()] 
 */
export function downloadUrl(url, fileName = url.split("/").pop()) {
    const aLink = document.createElement("a");
    aLink.download = fileName
    aLink.href = url;
    aLink.click();
}