
for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
        var buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            
        
            default:
                break;
        }
        
    })
}


