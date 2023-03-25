var dataURL = ""

function generateImage() {
    var name = document.getElementById("name-input").value;
    var canvas = document.createElement("canvas");
    var text = document.getElementById("message-input").value;
    var text2 = document.getElementById("message-input2").value;
    var text3 = document.getElementById("message-input3").value;

    canvas.width = 895;
    canvas.height = 951;
    var context1 = canvas.getContext("2d");
    /*var context2 = canvas.getContext("2d");
    var context3 = canvas.getContext("2d");
    var context4 = canvas.getContext("2d");*/
    var contexts = [
        context1,
    ]
    var image = new Image();
    image.onload = function() {


        for (let i = 0; i < contexts.length; i++) {

            contexts[i].drawImage(image, 0, 0, canvas.width, canvas.height);
            var gradient = contexts[i].createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#e2d9c9');
            gradient.addColorStop(0.24, '#e2d9c9');
            gradient.addColorStop(0.26, '#7c6d46');
            gradient.addColorStop(0.27, '#e2d9c9');
            gradient.addColorStop(0.4, '#ffefc6');
            gradient.addColorStop(0.78, '#5b4a20');
            contexts[i].fillStyle = gradient;
            contexts[i].textAlign = "center";
            contexts[i].shadowOffsetX = 2;
            contexts[i].shadowOffsetY = 2;
            contexts[i].shadowBlur = 5;
            contexts[i].shadowColor = 'rgba(0, 0, 0, 0.4)';
        }
        contexts[0].font = " 75px 'Playfair Display', serif";
        contexts[0].fillText(name, canvas.width / 4 + 50, canvas.height - 100, 450);
        /*contexts[1].font = " 45px 'Playfair Display', serif";
        contexts[1].fillText(text, canvas.width / 4 + 30, canvas.height - 580, 450);
        contexts[2].font = " 45px 'Playfair Display', serif";
        contexts[2].fillText(text2, canvas.width / 4 + 30, canvas.height - 530, 450);
        contexts[3].font = " 45px 'Playfair Display', serif";
        contexts[3].fillText(text3, canvas.width / 4 + 30, canvas.height - 320, 450);*/
        dataURL = canvas.toDataURL();
        updateImage(dataURL);



    };
    image.src = "Eid.png";
}


function updateImage(src) {
    var image = document.getElementsByClassName("output-image")[0];
    image.src = src;
}

var nameInput = document.getElementById("name-input");
nameInput.addEventListener("input", generateImage);

/*var messageInput = document.getElementById("message-input");
messageInput.addEventListener("input", generateImage)

var messageInput2 = document.getElementById("message-input2");
messageInput2.addEventListener("input", generateImage)

var messageInput3 = document.getElementById("message-input3");
messageInput3.addEventListener("input", generateImage)*/


var downloadBtn = document.querySelector('.btn');
downloadBtn.addEventListener('click', () => {
    var link = document.createElement('a');
    link.download = 'Eid.png';
    link.href = dataURL;
    link.click();
})