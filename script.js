let imgBox=document.getElementById('imgBox');
let qrIMG=document.getElementById('qrIMG');
let qrText=document.getElementById('qrText');
let qr=document.getElementById('QR');

function generateQR(){
    if(qrText.value.length>0){
        qrIMG.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        alert("PLEASE ENTER TEXT");
    }
    
}
