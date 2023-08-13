var n= document.querySelectorAll(".drum").length;

for(var i=0; i < n; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleCLick);

function handleCLick(){
    
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
} 



document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {
        case "a":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "b":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "c":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "e":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
        break;eee

        case "f":
            var crash= new Audio("sounds/snare.mp3");
            crash.play();
        break;

        case "g":
            var kickbass = new Audio("sounds/crash.mp3");
            kickbass.play();
        break;
    
        default:
        
    }

}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){ 
        activeButton.classList.remove("pressed");
}, 100);

}