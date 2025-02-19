const videoElement = document.getElementById('webcam');
const startButton = document.getElementById('startButton');
startButton.addEventListener('click',()=>{
    navigator.mediaDevices.getUserMedia({video:true,audio:true})
    .then(stream =>{
        videoElement.srcObject = stream;
    })
    .catch(error =>{
        console.error('Error Accessing webcam :',error);
    })
});

