// 播放量过滤
import instance from "../services/request";

function formatCount(cou) {
    if (cou == null) return ''
    let count = parseInt(cou)
    if (count >= 100000000) {
        return (count / 100000000).toFixed(1) +' 亿'
    } else if(count >= 10000) {
        return (count / 10000).toFixed(1) +' 万'
    } else {
        return count
    }
}

//时间过滤
function leftZero(num) {
    if (0 <= num && num < 10) {
        return '0'+num
    } else {
        return num
    }
}
function formatTime(time) {
    let second = Math.ceil(parseInt(time) / 1000)
    if (isNaN(second)) return '00:00'
    if (second >= 3600) {
        return leftZero(Math.floor(second / 3600)) +':'+
        leftZero(Math.floor((second % 3600) / 60))+':'+
        leftZero((second % 3600) % 60)
    } else if (second >= 60){
        return leftZero(Math.floor(second / 60)) + ':' + leftZero(second % 60)
    } else {
        return '00' + ':' + leftZero(second % 60)
    }
}

export {
	formatCount,
  formatTime
}