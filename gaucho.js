function nextGoal() {
    if (localStorage.getItem("argentina")) {
        const reisezieleArray = JSON.parse(localStorage.getItem("argentina"));
        const filteredArray = reisezieleArray.filter(function( element ) {
               return element !== undefined;
            });
        
        if(filteredArray.length > 1) {
            filteredArray.shift()
            localStorage.setItem("argentina", JSON.stringify(filteredArray));
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

const kiss = document.getElementById("kiss");
const cow = document.querySelector(".cow");
const grass1 = document.querySelector(".grass1");  
const grass2 = document.querySelector(".grass2"); 

setTimeout(() => {
  kiss.classList.add("hide");
  cow.classList.remove("hide"); 
  grass1.classList.remove("hide"); 
  grass2.classList.remove("hide"); 
}, 3000)