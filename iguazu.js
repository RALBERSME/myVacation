
/* nur für die Zwischenzeit * / 
/* localStorage.removeItem("argentina") */

// window.location.href = `${goals[0]}.html`

function nextGoal() {
    if (localStorage.getItem("argentina")) {
        const reisezieleArray = JSON.parse(localStorage.getItem("argentina"));
        if(reisezieleArray.length > 1) {
            reisezieleArray.shift()
            localStorage.setItem("argentina", JSON.stringify(reisezieleArray));
            const newReisezieleArray = JSON.parse(localStorage.getItem("argentina"));
            console.log("reisezielArray", newReisezieleArray)
            window.location.href = `${newReisezieleArray[0]}.html`
        } else {
             window.location.href = "bye.html"; 
        }
    } else {
        window.location.href = "bye.html"; 
    }
    
    
   

}