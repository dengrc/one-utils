/**
 * 视频截图
 * @param fileOrUrl 
 * @param time 
 * @param isDataURL 
 * @param [encoderOptions = 0.92] 
 * @param [type = "image/png"]
 */
export function videoScreenshot<T>(fileOrUrl: string | File, time?: number, isDataURL?: boolean, encoderOptions?: number, type?: string): Promise<T>