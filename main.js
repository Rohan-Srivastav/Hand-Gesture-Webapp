Webcam.set({

    width:350,
    height:300, 
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snap()
{

    Webcam.snap(function(image){

        document.getElementById("result").innerHTML = '<img id = "captured_image"  src="'+image+'">';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LP1ZdxT52/model.json',modelLoaded);


function modelLoaded() {
    console.log('Model Loaded! ðŸ˜ðŸ˜');
}


function speak(){

    var synth = window.speechSynthesis;
    speak_data_1 = "The Prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}


function predict(){

    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}

function gotResult(error, results) {

    if (error) {

        console.error(error);
    }

    else {

        console.log(results);

        document.getElementById("emotion_1").innerHTML = results[0].label;
        prediction_1 = results[0].label;
       
        speak();

        if(results[0].label == "Victory")
        {

            document.getElementById("update_gesture_1").innerHTML = "&#9996";
        }

        if(results[0].label == "Best")
        {

            document.getElementById("update_gesture_1").innerHTML = "&#128077;";
        }

        if(results[0].label == "Amazing")
        {

            document.getElementById("update_gesture_1").innerHTML = "&#128076;";
        }



        //First Gesture Ends Here

    }
}
