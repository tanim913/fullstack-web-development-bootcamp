
function keySelected(key) {

    switch (key) {
            
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom1 = new Audio('sounds/tom-2.mp3');
            tom1.play();
            break;

        case "s":
            var tom1 = new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-4.mp3');
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio('sounds/snare.mp3');
            tom1.play();
            break;

        case "k":
            var tom1 = new Audio('sounds/kick-bass.mp3');
            tom1.play();
            break;

        case "l":
            var tom1 = new Audio('sounds/crash.mp3');
            tom1.play();
            break;

        default:
            console.log(buttonInnerHtml);
            break;
    }
    
}

function buttonAnimation(currentKey) {
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);
}


for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
        var buttonInnerHtml = this.innerHTML;

        keySelected(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
    })
}

document.addEventListener("keypress", function(event) {
    keySelected(event.key);
    buttonAnimation(event.key);
    
});
