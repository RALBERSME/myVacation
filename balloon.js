function drag(){

    let dragging = false;
    let mouseX, mouseY;
    let eleX, eleY;

    const boxes = document.querySelectorAll("[draggable]");

    boxes.forEach(box =>{
         box.addEventListener('mousedown',mouseDown); 
         box.style.top = 0;
         box.style.left = 0;
    });

    function mouseDown(e){
        e.preventDefault();
        
        dragging = this;

        mouseX = e.pageX;
        mouseY = e.pageY;

        eleX = Number.parseInt(dragging.style.left);
        eleY = Number.parseInt(dragging.style.top);

        document.addEventListener("mousemove",mouseMove);
        document.addEventListener("mouseup",mouseUp);
    }

    function mouseMove(e){
        if(dragging){
            const deltaMouseX = e.pageX - mouseX;
            const deltaMouseY = e.pageY - mouseY;

            dragging.style.left = deltaMouseX + eleX + "px";
            dragging.style.top = deltaMouseY + eleY + "px";

        }
    }

    function mouseUp(e){
        dragging = false;
    }

}
drag();


function checkItems() {
    let goals = [];
    let goalsNoUndefined = []; 
    let goalsCapitalized =[]; 
    const spans = document.querySelectorAll("span");
    spans.forEach(span =>{
        const rect = span.getBoundingClientRect();
        const x = rect.left;
        const y = rect.top;
        if (x < 1500) {
            goals.push(span.id)
        }
        goalsNoUndefined = goals.filter(function( element ) {
            return element !== undefined;
         });

        for (let goal of goalsNoUndefined) {
           const capitalized =
           goal.charAt(0).toUpperCase()
            + goal.slice(1)

            goalsCapitalized.push(capitalized)
        }
        if (goalsCapitalized.length === 0 ) {
            let message =  document.getElementById("message")
            message.innerHTML = `Please choose at least one travel destination since you're already in Argentina! <br>Slide a destination onto the balloon and then click confirm again.`; 
            message.style.color = "red"; 
        } else {
        
        let bereinigteReiseziele = [...new Set(goalsCapitalized)];
        let reiseziele = bereinigteReiseziele.join(); 

        // function removeUndefined(data) {
        //     data.filter(function( element ) {
        //         return element !== undefined;
        //      });
        // }
        localStorage.setItem("argentina", JSON.stringify(goalsNoUndefined));
                  
        let grammatKorrekt = reiseziele.replaceAll(",", " und "); 
        let message = document.getElementById("message")
        message.style.color = "green"; 
        message.innerHTML = `Great! Let's fly to ${grammatKorrekt}. Cast off!`; 
        setTimeout(() => {
            window.location.href = `${goals[0]}.html`
        }, 2500)}

   });

}