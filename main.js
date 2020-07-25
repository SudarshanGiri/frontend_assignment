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

const toggleModal=()=>{
    document.querySelector('.upload_modal').classList.toggle('modal--hidden');

};
const toggle_dog_detail_modal=()=>{
    document.querySelector('.dog_detail_modal').classList.toggle('modal--hidden');
};
document.querySelector('.uploadbtn').addEventListener('click',toggleModal);
document.querySelector('.modal_close_bar').addEventListener('click',toggleModal);

document.querySelector('.dog_image').addEventListener('click',toggle_dog_detail_modal);
document.querySelector('.dog_modal_close_bar').addEventListener('click',toggle_dog_detail_modal);

const addImage=()=>{
    let newElement =document.createElement('div');
    newElement.innerHTML='<div class="dog_image" style="background-image: url(/images/download.jpg); width: 200px; height: 200px; background-size: cover; background-position: center;"></div>';
    //newElement.appendChild(newText);
    document.querySelector('.imgcontainer').appendChild(newElement);

    let title = document.querySelector('#title').value;
}

const inpFile=document.getElementById("inpFile");
const previewImage =document.getElementById("previewImage")
inpFile.addEventListener("change", function(event){
    if(event.target.files.length>0){
        var src = URL.createObjectURL(event.target.files[0]);
        previewImage.src=src;

    }

});
document.querySelector('#submit').addEventListener('click',addImage);