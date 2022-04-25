/*
Student Name: Valentina
File Name: script.js
Data: 14.04.2022
*/
 // Global variables
 var video = document.getElementById("example");
 var videoSource = document.getElementById("vid-src");
 var descriptionSource = document.getElementById("despsrc");
 
 // Function to display the burpees example video
    function burpees() {
        videoSource.src = "./media/burpees.mp4";
        video.style.width = "500px";
        video.style.height = "300px";
        video.style.display = "block";
        video.load();
    }

    function plank() {
        videoSource.src = "media/burpees.mp4";
        video.style.width = "500px";
        video.style.height = "300px";
        video.style.display = "block";
        video.load();
    }

    function climbers() {
        videoSource.src = "media/burpees.mp4";
        video.style.width = "500px";
        video.style.height = "300px";
        video.style.display = "block";
        video.load();
    }