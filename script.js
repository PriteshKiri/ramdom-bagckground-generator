var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");




const setBg = () => {
    var Rc1 = Math.floor(Math.random() * 16777215).toString(16);
    var Rc2 = Math.floor(Math.random() * 16777215).toString(16);

    body.style.background = "linear-gradient(to right," + '#' + Rc1 + "," + '#' + Rc2 + ")";

}

genNew.addEventListener("click", setBg);



