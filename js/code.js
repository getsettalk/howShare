const  dropZone = document.querySelector(".select-box");
const fileInput =  document.querySelector("#fileInput");
const host = "https://inshare.herokuapp.com/";

const uploadURl = host+"api/files";
dropZone.addEventListener("dragover",(e)=>{
   e.preventDefault();
    if (!dropZone.classList.contains('dragIn')) {
        
        dropZone.classList.add("dragIn")
    }
});

dropZone.addEventListener("dragleave",(e)=>{
    dropZone.classList.remove("dragIn")
});

dropZone.addEventListener("drop",(e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragIn")
    let files =  e.dataTransfer.files;
   console.log(files)
  
   if (files.length) {
    fileInput.files= files;
    uploadFile();
   }
});


const uploadFile = ()=>{
    const file = fileInput.files[0];
    const formData  = new FormData();
    formData.append(file)
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange= ()=>{
        console.log(xhr.readyState)
    };
    xhr.open("POST",uploadURl)
}
