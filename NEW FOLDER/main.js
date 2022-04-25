function buttonClick() {
  var para = document.createElement("p");
  //para.innerText = "Hello World";
  var note = document.createTextNode("Hello World");

  console.log(para);
  console.log(note);

  para.appendChild(note);
  console.log(para);

  var main = document.getElementById("main");
  console.log(main);

  

}