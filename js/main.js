var player = document.getElementById('audio');
var captchas = ["resources/captcha1.png","resources/captcha2.png","resources/captcha3.png"];
var finalcaptcha = captchas[Math.floor(Math.random()*captchas.length)];
function setup(){
    document.getElementById("game1").style.display = "none";
    document.getElementById("game2").style.display = "none";
    document.getElementById("game3").style.display = "none";
    document.getElementById("history").style.display = "none";
}
function start(){
    document.getElementById("start").style.display = "none";
    document.getElementById("game1").style.display = "block";
    player.load();
    player.play();
}
function wrong(){
    player.setAttribute('src', 'resources/wrong.mp3');
    player.load();
    //player.play();
}
function next1(){
    player.setAttribute('src', 'resources/correct.mp3');
    player.load();
    player.play();
    document.getElementById("game1").style.display = "none";
    document.getElementById("game2").style.display = "block";
    document.getElementById("captcha").setAttribute('src',finalcaptcha);
}
function next2(){
    var captchavalue = document.getElementById("captcha2").value
    if(finalcaptcha == "resources/captcha1.png" && captchavalue == "Td4eva"){
        player.setAttribute('src', 'resources/correct.mp3');
        player.load();
        player.play();
        beforsure()
    }
    else{
        wrong();
        check1();
    }
}
function check1(){
    var captchavalue = document.getElementById("captcha2").value
    if(finalcaptcha == "resources/captcha2.png" && captchavalue == "qGphJD"){
        player.setAttribute('src', 'resources/correct.mp3');
        player.load();
        player.play();
        beforsure()
    }
    else{
        wrong();
        check2();
    }
}
function check2(){
    var captchavalue = document.getElementById("captcha2").value
    if(finalcaptcha == "resources/captcha3.png" && captchavalue == "W68HP"){
        player.setAttribute('src', 'resources/correct.mp3');
        player.load();
        player.play();
        beforsure()
    }
    else{
        wrong();
    }
}
function beforsure(){
    document.getElementById("game2").style.display = "none";
    document.getElementById("game3").style.display = "block";
}
function yes(){
    document.getElementById("game3").style.display = "none";
    player.setAttribute('src', 'resources/correct.mp3');
    player.load();
    player.play();
    document.getElementById("history").style.display = "block";
    document.getElementById("rickroll").setAttribute("src","https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")
    document.getElementById("endtext").innerHTML = "Congratulations " + document.getElementById("name").value + " you are now a part of 7 bilion people being rickrolled!"
}
setup();
