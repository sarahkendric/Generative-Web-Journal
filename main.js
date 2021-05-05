//step 1: set up arrays of oppurtunities 
var images = ["imgs/1.png", "imgs/2.png", "imgs/3.jpg", "imgs/4.png", "imgs/5.jpg", "imgs/6.jpg", "imgs/7.png", "imgs/8.jpeg"]
var texts = ["some images from this semester"]


//step 2: target existing html
var container = $("#container");
var text = $("#text");

//step 3: create a function for our <button>
function shuffle() {

    //get the random result
    var imageResult = "url(" + images[Math.floor(Math.random() * images.length)] + ")"
    var textResult = texts[Math.floor(Math.random() * texts.length)]

    //style result
    container.css("background-image", imageResult);
    //input text
    text.text(textResult)
}
