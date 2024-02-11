const video = document.getElementById("sukuna")
let playlist = ["видео4","видео3", "видео2", "видео"]
let number = 0
function pause() {
    if (video.paused){
video.play()
    }
    else{
        video.pause()
    }

}
function mute(){
    if (video.muted){
        video.muted=false
    }
    else{
        video.muted=true
    }   
}
 function next(){
number = number+1
if (number>length+2){
    number=0
}
console.log(number)
video.src=`video/${playlist[number]}.mp4`
 }
 function prev(){
number = number-1
console.log(number)
video.src=`video/${playlist[number]}.mp4`
 }