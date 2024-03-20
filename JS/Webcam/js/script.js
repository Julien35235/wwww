 // Accéder à la webcam
 navigator.mediaDevices.getUserMedia({ video: true })
 .then(function (stream) {
     let video = document.getElementById('video');
     video.srcObject = stream;
     video.play();
 })
 .catch(function (error) {
     console.log("Erreur: " + error);
 });

// Capturer une photo lorsque le bouton est cliqué
document.getElementById('captureButton').addEventListener('click', function () {
 let video = document.getElementById('video');
 let canvas = document.getElementById('canvas');
 let context = canvas.getContext('2d');

 // Dessiner la vidéo sur le canvas
 context.drawImage(video, 0, 0, canvas.width, canvas.height);

 // Afficher la photo capturée
 let capturedPhoto = document.getElementById('capturedPhoto');
 capturedPhoto.src = canvas.toDataURL('image/png');
 capturedPhoto.style.display = 'block';
});

