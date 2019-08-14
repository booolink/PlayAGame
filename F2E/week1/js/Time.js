//時鐘
function getTime(){
    var now_time = new Date(),
    sec = now_time.getSeconds(),
    min = now_time.getMinutes(),
    hour = now_time.getHours();
    
    hour = (hour < 10) ?'0'+hour:hour
$('.time').text('+00:'+ hour + ':' + min + ':' + sec)
}

setInterval(getTime)