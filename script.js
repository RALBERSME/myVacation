const stress = document.getElementById("stress");
let count = stress.innerHTML.length; 
console.log("count", count)
stress.innerHTML = stress.textContent.replace(/\S/g,"<span>$&</span>")

const allSpans = document.querySelectorAll("span");


allSpans.forEach(span=>{
      span.addEventListener("mouseover",()=>{
       span.classList.add("active"); 
       count--; 
       console.log("count2", count)
       if (count < 2) {
         document.querySelector(".vacation").classList.remove("hide");
                        
        setTimeout(() => {            
             window.location.href="boarding.html";
        }, 4000)    
        }
    });

});

setTimeout(() => {            
  document.getElementById("toBoarding").classList.remove("hide")
}, 4000) 