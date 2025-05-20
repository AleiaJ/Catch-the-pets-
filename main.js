$(document).ready(function() {
    let score = 0;
    let basketPos = 300; 

    // basket movement
    $(document).keydown(function(e) {
        if (e.key === "ArrowLeft" && basketPos > 20) {
            basketPos -= 20;
        } else if (e.key === "ArrowRight" && basketPos < 485) {
            basketPos += 20;
        }
        $("#basket").css("left", basketPos + "px");
    });


    function moveLeft() {
    if (basketPos > 20) {
            basketPos -= 20;
         $("#basket").css("left", basketPos + "px");
    }
}

// Function to move right
function moveRight() {
    if (basketPos < 485) {
            basketPos += 20
         $("#basket").css("left", basketPos + "px");
    }
}

// Link buttons to movement functions
document.getElementById("leftBtn").addEventListener("click", moveLeft);
document.getElementById("rightBtn").addEventListener("click", moveRight);

    
    // Function to drop pets
   function dropPet(petId) {
    let petPos = Math.random() * 400; //  horizontal position
    $("#" + petId).css({ "left": petPos + "px", "top": "0px", "opacity": "1", "display": "block" }); 

    $("#" + petId).animate({ top: "370px" }, 1800, function() {
        let basketLeft = $("#basket").position().left;
        let petLeft = $("#" + petId).position().left;

        if (petLeft > basketLeft && petLeft < basketLeft +30) {
            score += 1;
            $("#score").text(score);

            // Fade 
            $("#" + petId).fadeOut(500, function() {
                $(this).css("top", "0px");
                $(this).css("opacity", "1"); 
                $(this).css("display", "block"); 
            });
        } else {
            $("#" + petId).css("top", "0px");
        }
    });
}


    // Pets drop at different intervals
    setInterval(function() { dropPet("falling-cat"); }, 4000);
    setInterval(function() { dropPet("falling-dog"); }, 5000);
});
