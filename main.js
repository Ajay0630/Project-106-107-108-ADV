function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4i3nu1Phg/model.json', modelReady);
}
function modelReady(){
    console.log("Model Loaded!");
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("animal-name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence * 100).toFixed(1) + "%";
        document.getElementById("animal-name").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("accuracy").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        
        img = document.getElementById("animal-img");
        
        if (results[0].label == "DOG"){
            img.src = "dog-walking-unscreen.gif";
        } else if (results[0].label == "CAT"){
            img.src = "cat-with-sunglasses-unscreen.gif";
        } else {
            img.src = "listening-ear-removebg-preview.png";
        }
    }
}