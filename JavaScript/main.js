let slide = 1;
function selelctslide(input,index){
    slide = index;
    let photo = document.querySelector(`#${input}`)
    let slideshow = [...document.querySelector('.slideshow').children];
    slideshow.forEach((Element)=>{
        Element.classList.remove('selected');
    })
    photo.classList.add('selected');
}


setInterval(() => {
    slide +=1 ;
    if(slide == 4){
        slide = 1;
    }
    selelctslide(`s${slide}` , slide)
}, 8000);