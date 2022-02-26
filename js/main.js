/*
window.onload = sliderFunction();

function sliderFunction(){
    var sliderList = document.getElementsByClassName('content-div');

    if(!sliderList[0].classList.contains('show-content')){
        sliderList[0].classList.add('show-content');
    }

    for(var slide of sliderList){
        if(!slide.classList.contains('show-content')){
            slide.classList.add('hidden-content');
        }
    }

    var index = 0;
    var slider = document.getElementsByClassName('slideshow-div')[0];

    slider.addEventListener('click', function(){
        index++;
        for(var slide of sliderList){
            if(slide.classList.contains('show-content') && index < 2){
                slide.classList.remove('show-content');
                slide.classList.add('hidden-content');
                slide.nextElementSibling.classList.remove('hidden-content');
                slide.nextElementSibling.classList.add('show-content');
                break;
            } else if(slide.classList.contains('show-content') && index == 2){
                slide.classList.remove('show-content');
                slide.classList.add('hidden-content');
                slide.previousElementSibling.classList.remove('hidden-content');
                slide.previousElementSibling.classList.add('show-content');
                index = 0;
                break;
            }
        }
    })
}*/








var images = ["Images/slideshowimage1.png","Images/slideshowimage3.png"];
var text = ["Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate,"+
            " Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)",
            "SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version"+
            " Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Black"];

var i = 0;
var isUsed = false;
var z = false;
var d = 0;
function nextButton(){

    if(i < images.length){
        var x = document.getElementById('slideshow').src = images[i];
        var y = document.getElementById('text').innerHTML = text[i];
        i++;           // 2 s1
        z = true;
        d++;           // 2 s1
    }
    else if(i == images.length){
        var x = document.getElementById('slideshow').src = "Images/slideshowimage2.png";
        var y = document.getElementById('text').innerHTML = "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless"+
                                                            "Charging Case IPX8 Waterproof Stereo Earphones in-Ear Built-in Mic Headset"+
                                                                                                    "Premium Deep Bass for Sport Black"; 
        i = 0;
        d = 0;
        //isUsed = false;
    }
}
function prevButton(){
    if(i == images.length){
        --i; // 3  i1  d2
    }
    if(i == 0){
        if(z == false){
            ++i;
            var x = document.getElementById('slideshow').src = images[i];
            var y = document.getElementById('text').innerHTML = text[i];
            z = true; 
        }
        else{
            var x = document.getElementById('slideshow').src = "Images/slideshowimage2.png";
            var y = document.getElementById('text').innerHTML = "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless"+
                                                                "Charging Case IPX8 Waterproof Stereo Earphones in-Ear Built-in Mic Headset"+
                                                                                                        "Premium Deep Bass for Sport Black"; 
            i = 0;  //i0  d2
            z = false;
        }
    }
    else if(i < images.length && i >= 0){
        if(d == 1){
            var x = document.getElementById('slideshow').src = "Images/slideshowimage2.png";
            var y = document.getElementById('text').innerHTML = "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless"+
                                                                "Charging Case IPX8 Waterproof Stereo Earphones in-Ear Built-in Mic Headset"+
                                                                                                        "Premium Deep Bass for Sport Black"; 
            i = 0;
        }
        else{  // 4 i0 d2 
            --i;
            var x = document.getElementById('slideshow').src = images[i];
            var y = document.getElementById('text').innerHTML = text[i]; 
            z = true;
        }
    }
}