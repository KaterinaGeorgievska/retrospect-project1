var slider = document.getElementById("slider-main");
var outputText = document.getElementById("print-text");

slider.oninput = function() {
    keeper(this.value);
}
function keeper(value) {
    if(value<=19) {
        outputText.innerHTML= "Неделава беше ужасна";
        outputText.style.color = "red";
        slider.setAttribute("id", "slider2");
        slider.style.background  = "red";
        $(slider).removeClass();
        $(slider).addClass("slider-main slider3");

    } else if (value<= 40){
        outputText.innerHTML= "Можеше и подобро";
        outputText.style.color = "rgb(249, 180, 98)";
        slider.style.background  = "rgb(249, 180, 98)";
        // $('.slider').attr("class", "slider2");
        // $('.slider3').attr("class", "slider2");
         $(slider).removeClass();
        $(slider).addClass("slider-main slider2");
    
    } else if (value<= 60){
        outputText.innerHTML= "Уште една обична работна недела";
        outputText.style.color = "rgb(187, 205, 131)";
        slider.style.background  = "rgb(187, 205, 131)";
        // $(.slider2).attr("class", "slider");
        // $(.slider4).attr("class", "slider");

         $(slider).removeClass();
        $(slider).addClass("slider-main slider");
    
    }  else if (value<= 90){
        outputText.innerHTML= "Забавно беше";
        outputText.style.color = "rgb(92, 184, 92)";
        slider.style.background  = "rgb(92, 184, 92)";
        // $(.slider).attr("class", "slider4");
        // $(.slider5).attr("class", "slider4");

         $(slider).removeClass();
        $(slider).addClass("slider-main slider4");
    
    }
    else if (value<= 100){
        outputText.innerHTML= "WOW, одлична недела";
        outputText.style.color = "rgb(239, 112, 152)";
        slider.style.background  = "rgb(239, 112, 152)";
        // $(.slider4).attr("class", "slider5");
         $(slider).removeClass();
        $(slider).addClass("slider-main slider5");
    
    }

}