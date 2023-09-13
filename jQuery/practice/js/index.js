$(document).ready(function(){

    let isTextChanged = false;

    $("#changeTextBtn").click(function(){
        if (isTextChanged) {
            $("#myHeading").text("Change the Text");
        } else {
            $("#myHeading").text("Text Changed!");
        }
        isTextChanged = !isTextChanged;
    });
});