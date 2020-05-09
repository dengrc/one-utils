import { downloadContent, downloadUrl, downloadFile } from "../browser/file"
import { videoScreenshot } from "../browser/image"
import { UIIntersectionObserver, UIMutationObserver, UIResizeObserver } from "../browser/UIObserver"

import { deduplication } from "../shared/iterate"
import { regexp } from "../shared/const"

downloadFile
downloadContent
downloadUrl
videoScreenshot<Blob>("a").then((a) => {

})

deduplication([1],()=>{})
regexp.email