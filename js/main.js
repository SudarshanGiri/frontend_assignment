//Dog class : Represents a Dog
class Dog{
    constructor(title, description, dog_id,img_address){
        this.title=title;
        this.description=description;
        this.dog_id="a"+dog_id; //adding string "a" to the input id because queryselector id cannot start with a number
        this.img_address=img_address;

    }
}
//UI Class: Handle UI Tasks
class UI{
    
    static addDogToList(dog){
        const img_container=document.querySelector('#img_container');
        const new_element=document.createElement('div');
        new_element.classList.add("dog_image");
        new_element.id=`${dog.dog_id}`;
        new_element.style.backgroundImage=`url(${dog.img_address}`; //dynamic image
        //new_element.style.backgroundImage="url(images/download.jpg)"; //static image
        new_element.style.width="200px";
        new_element.style.height="200px";
        new_element.style.backgroundSize="cover";
        new_element.style.backgroundPosition="center";
        new_element.innerHTML=`
        <button class="delete">X</Buttton>
    `;

            
    img_container.appendChild(new_element);

    }
    static addDogToModal(dog){
        const modal_container=document.querySelector('#modal_container');
        const new_modal=document.createElement('div');
        new_modal.classList.add("modal");
        new_modal.classList.add("modal--hidden");
        new_modal.id=`${dog.dog_id}`+1;  //create corresponding modal with assignedid+1
        new_modal.innerHTML=`
        <div class="modal_contents">
            <div class="dog_detail_modal_close_bar modal_close_bar"><span class="dog_detail_modal_close_bar">X</span></div>
            <div><img src="${dog.img_address}" alt="" width="300px" height="300px"></div>
            <h2>${dog.title}</h2>
            <div>${dog.description}</div>

        </div>
    `;
        modal_container.appendChild(new_modal);

        //UI.closeDogDetail();


    }

 
    
    
    static deleteDog(el){
        if(el.classList.contains('delete')){
            let deleteConfirmMessage=confirm("Are you sure you want to delete?");
            if (deleteConfirmMessage){
                console.log("deleting"+ el);
            el.parentElement.remove();

            }
            
        }
    }
    
    static displayDogDetail(el){ 
        if(el.classList.contains('dog_image')){
            console.log('opening');
            document.querySelector(`#${el.id+1}`).classList.toggle('modal--hidden');
        }
    }
    static closeDogDetail(el){ 
        console.log(el);
        if(el.classList.contains('dog_detail_modal_close_bar')){
            console.log(el.parentElement.parentElement.parentElement.id);
            document.querySelector(`#${el.parentElement.parentElement.parentElement.id}`).classList.toggle('modal--hidden');
        }
    }
    
 
    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#description').value='';
        document.querySelector('#dog_id').value='';
    }

}

//Event: Add a dog
document.querySelector('#dog-form').addEventListener('submit', (e)=>{
    //Prevent actual event
    e.preventDefault();
    //Get form values
    const title =document.querySelector('#title').value;
    const descripton =document.querySelector('#description').value;
    const dog_id =document.querySelector('#dog_id').value;
    var img_address=src;
    
    //validate
    
    //validate iF SUM OF digits of the input of secret user id is equal to 7
    let n=dog_id;
    let result=(n - 1) % 9 + 1;
    
    if(dog_id===''|| title ===''|| dog_id==='' ){
        alert('Please fill in all fields');
    }
    else if (result!=7){
        alert('!!! FAILED Invalid secret user ID');

    }
    
    else{
         // Instantiate dog
        const dog =new Dog(title, descripton, dog_id,img_address);
        console.log(dog);
        //Add Dog to UI...create dog
        UI.addDogToList(dog);
        //add dog to modal...create dog modal
        UI.addDogToModal(dog);
    
        //Clear fields
        UI.clearFields();
        alert('success');

    }

   
});


//Event: Remove a Dog
document.querySelector('#img_container').addEventListener('click',(e)=>{
    UI.deleteDog(e.target);

});

//Event: Display  a Dog detail
document.querySelector('#img_container').addEventListener('click',(e)=>{
    UI.displayDogDetail(e.target);

});
//Event: Close a dog detail
document.querySelector('#modal_container').addEventListener('click',(e)=>{
    console.log("clossiiinnnggg");
    UI.closeDogDetail(e.target);

});

//togle upload modal form
const toggleModal=()=>{
    console.log('closing');
    document.querySelector('.upload_modal').classList.toggle('modal--hidden');

};

document.querySelector('.uploadbtn').addEventListener('click',toggleModal);
document.querySelector('#upload_modal_close_bar').addEventListener('click',toggleModal);

//preview the upload file in modal
const inpFile=document.getElementById("inpFile");
const previewImage =document.getElementById("previewImage")
var src;
inpFile.addEventListener("change", function(event){
    if(event.target.files.length>0){
        src = URL.createObjectURL(event.target.files[0]);

        previewImage.src=src;
        console.log(src);


    }

});

