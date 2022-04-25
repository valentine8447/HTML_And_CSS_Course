function onOff() {
    console.log("Test onOff()");
   const lightBulb = document.getElementById("lightBulb");
   console.log(lightBulb);

   console.log(lightBulb.src);


if (lightBulb.src === "http://127.0.0.1:5502/images/pic_bulboff.gif") {
    lightBulb.src = "http://127.0.0.1:5502/images/pic_bulbon.gif";

} else {
    lightBulb.src = "http://127.0.0.1:5502/images/pic_bulboff.gif";
}

}