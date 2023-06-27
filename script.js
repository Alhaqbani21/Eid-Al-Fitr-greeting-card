var dataURL = '';

function generateImage() {
  var name = document.getElementById('name-input').value;
  var canvas = document.createElement('canvas');

  canvas.width = 1080;
  canvas.height = 1920;
  var context1 = canvas.getContext('2d');

  var contexts = [context1];
  var image = new Image();
  image.onload = function () {
    for (let i = 0; i < contexts.length; i++) {
      contexts[i].drawImage(image, 0, 0, canvas.width, canvas.height);
      var gradient = contexts[i].createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0.9, '#C69320');
      gradient.addColorStop(0.2, '#808080');
      gradient.addColorStop(0.3, '#F9F4E9');

      contexts[i].fillStyle = gradient;
      contexts[i].textAlign = 'center';
      contexts[i].shadowOffsetX = 5;
      contexts[i].shadowOffsetY = 2;
      contexts[i].shadowBlur = 5;
      contexts[i].shadowColor = 'rgba(0, 0, 0, 0.9)';
    }
    contexts[0].font = "60px '117-Barada-Reqa', 'Playfair Display', serif";

    contexts[0].fillText(name, canvas.width / 2, canvas.height - 190, 550);

    dataURL = canvas.toDataURL();
    updateImage(dataURL);
  };
  image.src = 'Eid.png';
}

function updateImage(src) {
  var image = document.getElementsByClassName('output-image')[0];
  image.src = src;
}

var nameInput = document.getElementById('name-input');
nameInput.addEventListener('input', generateImage);

var downloadBtn = document.querySelector('.btn');
downloadBtn.addEventListener('click', () => {
  var link = document.createElement('a');
  link.download = 'Eid.png';
  link.href = dataURL;
  link.click();
});
