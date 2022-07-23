let audioElement =new Audio('songs/1.mp3')
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgress=document.getElementById('myProgress')
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:'Ae Watan',filePath:'song/1.mp3',coverPath:'covers/1.jpg'},
    {songName:'Desi Boys',filePath:'song/2.mp3',coverPath:'covers/2.jpg'},
    {songName:'Ilahi',filePath:'song/3.mp3',coverPath:'covers/3.jpg'},
    {songName:'Kaise Hua',filePath:'song/4.mp3',coverPath:'covers/4.jpg'},
    {songName:'Saki Saki',filePath:'song/5.mp3',coverPath:'covers/5.jpg'},
    {songName:'Quaafirana',filePath:'song/6.mp3',coverPath:'covers/6.jpg'},
    {songName:'Sakhiyan',filePath:'song/7.mp3',coverPath:'covers/7.jpg'},
    {songName:'Choogada Tara',filePath:'song/8.mp3',coverPath:'covers/8.jpg'},
]
document.getElementById('sName').innerText=`${songs[songIndex].songName}`
document.getElementById('img').src=`${songs[songIndex].coverPath}`



songitem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        document.getElementById('sName').innerText=`${songs[songIndex].songName}`
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        document.getElementById('playingGif').style.opacity='1'
        if(songIndex==0){
        document.getElementById(songIndex).classList.remove('fa-circle-play')
        document.getElementById(songIndex).classList.add('fa-circle-pause')
        }
        else{
        document.getElementById(songIndex-1).classList.remove('fa-circle-play')
        document.getElementById(songIndex-1).classList.add('fa-circle-pause')
        }

    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        document.getElementById('playingGif').style.opacity='0'
        if(songIndex==0){
            document.getElementById(songIndex).classList.remove('fa-circle-pause')
            document.getElementById(songIndex).classList.add('fa-circle-play')
        }
        else{
            document.getElementById(`${songIndex-1}`).classList.remove('fa-circle-pause')
            document.getElementById(`${songIndex-1}`).classList.add('fa-circle-play')
        }
            
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value=progress
    if(progress==100){
        songIndex+=1
        console.log(songIndex)
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play()
        makeAllPlays()
        document.getElementById('sName').innerText=`${songs[songIndex].songName}`
        document.getElementById('img').src=`covers/${songIndex+1}.jpg`
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-play')
        document.getElementById(`${songIndex}`).classList.add('fa-circle-pause')
    }
})

myProgress.addEventListener('change',()=>{
    audioElement.currentTime =(myProgress.value*(audioElement.duration))/100;
})

function makeAllPlays(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        songIndex=parseInt(e.target.id)
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.currentTime=0
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        audioElement.play()
        document.getElementById('sName').innerText=`${songs[songIndex].songName}`
        document.getElementById('img').src=`covers/${songIndex}.jpg`
        
    })

})
document.getElementById('next').addEventListener('click',()=>{
    console.log('x')
    if(songIndex>=8){
        songIndex=1
    }
    else{
        songIndex+=1
    }
    makeAllPlays()
    audioElement.src=`songs/${songIndex+1}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    document.getElementById('sName').innerText=`${songs[songIndex].songName}`
    document.getElementById('img').src=`covers/${songIndex+1}.jpg`
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    document.getElementById(`${songIndex-1}`).classList.remove('fa-circle-play')
    document.getElementById(`${songIndex-1}`).classList.add('fa-circle-pause')

})
document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0){
        songIndex=7
    }
    else{
        songIndex-=1
    }
    makeAllPlays()
    audioElement.src=`songs/${songIndex+1}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    document.getElementById('sName').innerText=`${songs[songIndex].songName}`
    document.getElementById('img').src=`covers/${songIndex+1}.jpg`
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play')
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause')
})
Array.from(document.getElementsByClassName('songitem')).forEach((element,e)=>{
    element.addEventListener('click',()=>{
        makeAllPlays()
        element.getElementsByTagName('i')[0].classList.remove('fa-circle-play')
        element.getElementsByTagName('i')[0].classList.add('fa-circle-pause')
        songIndex=parseInt(e)
        console.log(songIndex)
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play()
        document.getElementById('sName').innerText=`${songs[songIndex].songName}`
        document.getElementById('img').src=`covers/${songIndex+1}.jpg`
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        document.getElementById('playingGif').style.opacity='1'
        // songIndex+=1
    })
})

