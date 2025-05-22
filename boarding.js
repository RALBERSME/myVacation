let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");

let btnUS= document.querySelector("#btnUS");
let btnSE = document.getElementById("btnSE");
let tocontinue = document.getElementById("tocontinue"); 

function enter1() {
    message1.innerHTML = `Sorry, no kerosene available today.<br> Please travel with Deutsche Bahn. <br>This switch is now closed.<br>Goodbye.`
    message1.style.color ="#FBF3C1"; 
}
function enter2() {
     message2.innerHTML = `US Moore-McCormack Lines welcomes you aboard of his ship of the line! We're about to set sail. In just a few minutes, our journey from New York will depart...for your well-deserved vacation.<br><br><br><a
              href="https://www.youtube.com/watch?v=_6Zj8WZR1CY"
              target="_blank"
              >Click here to watch a video clip about our nice ship!
            </a>`
    message2.style.color ="#f4e794";
    tocontinue.classList.remove("hide");
    btnUS.classList.add("hide")
}
function enter3() {
    message3.innerHTML = `The Swedish shipping company AB Nordstjernan warmly welcomes you aboard its ship (launched 1935 in Gothenburg). In just a few minutes, our journey from Stockholm will depart....<br><br><br><a
              href="https://www.youtube.com/watch?v=jfkBcfy78ck"
              target="_blank"
              >Click here to watch our ship in miniature!
            </a>`
    message3.style.color ="#f4e794"; 
    tocontinue.classList.remove("hide");
    btnSE.classList.add("hide")
}

