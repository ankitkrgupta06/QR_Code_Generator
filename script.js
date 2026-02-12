let imgBox=document.getElementById('imgBox');
let qrIMG=document.getElementById('qrIMG');
let qrText=document.getElementById('qrText');
let qr=document.getElementById('QR');

function generateQR(){
    qrIMG.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
}

qr.addEventListener('click',generateQR);