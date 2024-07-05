
window.addEventListener("keydown", (e)=> {
    
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys=document.querySelector(`div[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play()
    keys.classList.add("play")
});

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend',rem));
function rem(e){
    if(e.propertyName!=="transform")
        return;
    this.classList.remove('play');
}


