const navSlide =() =>{
    const burger= document.querySelector('.burger');
    const navlinks =document.querySelector('.nav-links');

    burger.onclick=function(){
        navlinks.classList.toggle('nav-active');
        
        //Burger animation
        burger.classList.toggle('toggle');
    }

}
navSlide();