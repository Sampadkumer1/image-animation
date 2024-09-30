var main=document.querySelector('#main');
var image=document.querySelector('#page img');
 
main.addEventListener('mousemove',function(e){
    image.style.top=1-e.y*0.05+'px'
    image.style.left=1-e.x*0.05+'px'
    
})