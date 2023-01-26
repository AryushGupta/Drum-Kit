let numOfButtons = document.querySelectorAll(".drum").length;

// Detecting Button Press

for(let i=0;i<numOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;
        createSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
})}

// Detecting KeyBoard Press

document.addEventListener("keydown",function(event){
    createSound(event.key);
    buttonAnimation(event.key);
})

let createSound = (key) =>{
    switch(key){
        case "w":
            soundFile = "tom-1";
            break;

        case "a":
            soundFile = "tom-2";
            break;

        case "s":
            soundFile = "tom-3";
            break;

        case "d":
            soundFile = "tom-4";
            break;
        
        case "j":
            soundFile = "snare";
            break;

        case "k":
            soundFile = "crash";
            break;
        
        case "l":
            soundFile = "kick-bass";
            break;
    }
    let audio = new Audio("sounds/" + soundFile + ".mp3");
    audio.play();
}

// Adding Button animation when the button is clicked
let buttonAnimation = (currentKey) =>{
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}