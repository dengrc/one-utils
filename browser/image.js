/**
 * 视频截图
 * @param fileOrUrl 
 * @param time 
 * @param isDataURL 
 * @param [encoderOptions = 0.92] 
 * @param [type = "image/png"]
 */
export function videoScreenshot(fileOrUrl, time, isDataURL, encoderOptions = 0.92, type = "image/png") {
    var url = typeof fileOrUrl === "string" ? fileOrUrl : URL.createObjectURL(fileOrUrl);
    var video = document.createElement("video");

    video.src = url;
    video.crossOrigin = "anonymous";
    video.currentTime = time;
    return new Promise((resolve, reject) => {
        video.addEventListener("canplay", () => {
            video.pause();

            var canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

            isDataURL ? resolve(canvas.toDataURL(type, encoderOptions)) : canvas.toBlob(resolve, type, encoderOptions);

            URL.revokeObjectURL(url);
        }, false);
        video.addEventListener("error", reject, false);
        video.play();
    })
}