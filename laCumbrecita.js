function nextGoal() {
    if (localStorage.getItem("argentina")) {
        const reisezieleArray = JSON.parse(localStorage.getItem("argentina"));
        if(reisezieleArray.length > 1) {
            reisezieleArray.shift()
            localStorage.setItem("argentina", JSON.stringify(reisezieleArray));
            const newReisezieleArray = JSON.parse(localStorage.getItem("argentina"));
            if (newReisezieleArray[0] != undefined) {
            window.location.href = `${newReisezieleArray[0]}.html`}
        } else {
             window.location.href = "bye.html"; 
        }
    } else {
        window.location.href = "bye.html"; 
    }  

}

function playSound() {
    let audio = new Audio("cuckuck.mp3");
    audio.play();
  }
  