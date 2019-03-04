//Add listeners on creation
function scrollDown(){
    if(window.scrollY<window.innerHeight){
    window.scrollBy(0,10);
    setTimeout(scrollDown,1);
    }
}

window.addEventListener("scroll",(event)=>{
    if(document.getElementById("content").style.opacity<0.99){
    window.scroll(0,Math.min(window.scrollY,window.innerHeight));
    }
    document.getElementById("logoDiv").style.opacity=(1-window.scrollY/window.innerHeight);
    document.getElementById("content").style.opacity=window.scrollY/window.innerHeight;
});
setTimeout(scrollDown,2000);