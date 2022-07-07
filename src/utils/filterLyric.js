/**
 * @param lyString
 * @returns {*[]}
 * [00:00.000] 作词 : 周震南
 * [00:01.000] 作曲 : 周震南
 * [00:05.34]单簧管演奏：王弢
 * [00:12.54]单簧管创作：王弢／陈欣若
 * [00:23.73]制作人： sususu
 * [00:24.09]终有一散的人们 在听吗
 * [00:32.22]为何你低着头一言不发
 * [00:42.99]终有一散的人们 演哑巴
 * [00:51.51]等到离开之后也没说爱她
 * [01:40.59]终有一散的人们 是傻瓜
 */
const re = /\[(\d{2}):(\d\.)](.*?)/
export default function filterLyric(lyString) {
  let lyricList = []
  let lyricString = lyString.split('\n')
  lyricString.splice(lyricString.length - 1, 1)
  lyricString.forEach(item => {
    // let strList = re.exec(item)
    // console.log(strList)
    let strList = item.split(']')
    let timeList = strList[0].split('[')[1].split(':')
    let time = Number(timeList[0]) * 60 + Number(timeList[1]) * 1000
    let lyric = strList[1].trim()
    lyricList.push({time,lyric})
  })
  return lyricList
}