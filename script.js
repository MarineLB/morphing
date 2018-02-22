document.addEventListener('DOMContentLoaded', function(){

    TweenLite.from("svg", 2, {width: 0, height:0});
    TweenLite.to(".start", 1, {delay:2, morphSVG: ".end", fill:"#777777", repeat:-1, onComplete:fadeInIllustration});

}, false);


function fadeInIllustration(){
    TweenLite.to(".final", 1, {opacity:1, onComplete:fadeInPNG});
}
function fadeInPNG(){
    TweenLite.to(".final", 1, {opacity:1});
}

