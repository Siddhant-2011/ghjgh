Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="final" src="'+data_uri+'"/>';
    });
}
console.log(ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/train/image/1zbqfxs6dORnBPP_oZTbwMgwS8x7nF_QR",loaded);
function loaded(){
    console.log("model has been loaded")
}