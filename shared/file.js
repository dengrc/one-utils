/**
 * dataURL 转 File
 * @param dataurl 
 * @param filename 
 */
export function dataURLtoFile(dataurl, filename = Math.random().toString()) {
    var dotIndex = dataurl.indexOf(","),
        mime = dataurl.substr(0, dotIndex).match(/:(.*?);/)[1],
        bstr = atob(dataurl.substring(dotIndex + 1)),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], `${filename}.${mime.split('/').pop()}`, {
        type: mime
    });
}
/**
 * blob 转 File
 * @param blob 
 * @param filename 
 */
export function blobToFile(blob, filename) {
    return new File([blob], filename, {
        type: blob.type
    })
}