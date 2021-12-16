//This JS provides functions for pseudo-functionality for certain kinds of buttons.
// Switch statements: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// setTimeout: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout


function confirmDelete(project_name, project_id, redirect_to){
    if(confirm(`Are you sure you want to delete the project ${project_name} (id ${project_id})? This is PERMANENT and cannot be undone.`)) {
        alert(`Successfully deleted the project ${project_name} (id ${project_id}).`);
        window.location.href = redirect_to || window.location.href;
    }
}

function toggleInterest(interestButton, project_id){
    let interestButtonIcon = interestButton.children[0];
    switch(interestButtonIcon.textContent) {
    case "star_border": 
        console.log("Toggle On!")
        interestButton.classList.replace("scale-in", "scale-out");
        
       
        setTimeout(function(){
            interestButtonIcon.textContent = "star";
            interestButton.classList.replace("blue", "yellow");
            interestButton.classList.replace("scale-out", "scale-in");
        }, 500);
        
    break;
    case "star": 
        console.log("Toggle Off!")
        interestButton.classList.replace("scale-in", "scale-out");

        setTimeout(function(){
            interestButtonIcon.textContent = "star_border";
            interestButton.classList.replace("yellow", "blue");
            interestButton.classList.replace("scale-out", "scale-in");
        }, 500);
    break;
    default: 
    }
    interestButtonIcon.textContent = "star_half";
}
