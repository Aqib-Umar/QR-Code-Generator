const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generate-btn');
const downloadbtn = document.getElementById('download-btn');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generatebtn.addEventListener('click' , (e) => {
   e.preventDefault(); 
   isEmptyInput();
});


downloadbtn.addEventListener('click', () =>{

    let img = document.querySelector('.qr-body img');

    if(img !== null ){
        let imgAtt = img.getAttribute('src');
        downloadbtn.setAttribute("href", imgAtt);
    }
    else{
        downloadbtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`)
    }
});

sizes.addEventListener('change', (e) =>{
    size = e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
  /*  if(qrText.value.length > 0){
        generateQRCode();
       }
       else{
        alert("enter the text or url to generate your qr code");
       } */
       qrText.value.length > 0 ? generateQRCode() :  alert("enter the text or url to generate your qr code");

}

function generateQRCode(){
    qrContainer.innerHTML= "";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        
    });
}
