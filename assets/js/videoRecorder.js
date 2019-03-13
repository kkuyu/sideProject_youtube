const recorderContainer = document.getElementById("jsRecordContainer");
const recorderBtn = document.getElementById("jsRecordButton");
const videoPreview = document.getElementById("jsVideoPreview");

const startRecording = async() => {
	try{
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: true,
			video: { width: 1920, height: 1080 }
		});
		videoPreview.srcObject = stream;
		videoPreview.muted = true;
		videoPreview.play();
	}catch(error){
		recorderBtn.innerHTML = "Can't record";
		recorderBtn.removeEventListener("click", startRecording);
	}

}

function init(){
	recorderBtn.addEventListener("click", startRecording);
}

if(recorderContainer){
	init();
}