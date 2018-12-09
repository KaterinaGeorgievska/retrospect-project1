var slider = document.getElementById("slider-main");
var outputText = document.getElementById("print-text");

slider.oninput = function() {
    keeper(this.value);
}
function keeper(value) {
    if(value<=19) {
        outputText.innerHTML= "This week was terrible";
        outputText.style.color = "red";
        slider.setAttribute("id", "slider2");
        slider.style.background  = "red";
        $(slider).removeClass();
        $(slider).addClass("slider-main slider3");
        localStorage.setItem('enjoyment', "6.png");
        localStorage.setItem('enjoymentNo', "1")

    } else if (value<= 40){
        outputText.innerHTML= "It could have been better";
        outputText.style.color = "rgb(249, 180, 98)";
        slider.style.background  = "rgb(249, 180, 98)";
         $(slider).removeClass();
        $(slider).addClass("slider-main slider2");
        localStorage.setItem('team', "7.png");
        localStorage.setItem('teamNo', "2")
    
    } else if (value<= 60){
        outputText.innerHTML= "Јust another ordinary working week";
        outputText.style.color = "rgb(187, 205, 131)";
        slider.style.background  = "rgb(187, 205, 131)";
         $(slider).removeClass();
        $(slider).addClass("slider-main slider");
        localStorage.setItem('productivity', "8.png");
         localStorage.setItem('productivityNo', "3")
    
    }  else if (value<= 90){
        outputText.innerHTML= "It was fun";
        outputText.style.color = "rgb(92, 184, 92)";
        slider.style.background  = "rgb(92, 184, 92)";
         $(slider).removeClass();
        $(slider).addClass("slider-main slider4");
    
    }
    else if (value<= 100){
        outputText.innerHTML= "WOW, great week";
        outputText.style.color = "rgb(239, 112, 152)";
        slider.style.background  = "rgb(239, 112, 152)";
         $(slider).removeClass();
        $(slider).addClass("slider-main slider5");
    
    }

}