(function () {
    const
        background          =   document.getElementById("bg"),
        leftArrow           =   document.getElementById("leftArrow"),
        rightArrow          =   document.getElementById("rightArrow"),
        path                =   'assets/imgs/',
        backgroundImages    =   ["caravanbanner3.jpg", "caravanbanner2.jpg", "caravanbanner.jpg"]
    ;

    let index = 0;

    function bindBtns(){
        leftArrow.addEventListener("click", function() {moveGallery("left") });
        rightArrow.addEventListener("click", function() {moveGallery("right") });
    } //end bindBtns


    function moveGallery(direction) {
        if (direction === "right") {
            if (index < backgroundImages.length - 1) {
                index++;
            } else {
                index = 0;
            }
        } else {
            if (index >0) {
                index--;
            } else {
                index = backgroundImages.length -1;
            }
        }
        background.style.backgroundImage = "url(" + path + backgroundImages[index] + ")";
    } //end moveGallery


//onload initialiser
    window.onload = init;

//init function
    function init(){
        bindBtns();
    }//end init

}) ();