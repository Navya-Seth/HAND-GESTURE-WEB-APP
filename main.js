Webcam.set({
    width : 350 ,
    height : 300 ,
    image_format : 'png' , 
    png_quality : 90  

});

cam = document.getElementById("cam");

Webcam.attach('#cam');

function take_snapshot(){
    Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id = "captured_img" src = "'+data_uri+'"/>'; 
    });
    
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BT20NAnkx/" , modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");

}
