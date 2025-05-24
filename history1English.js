
  const historyEvents = ["Circa 10th millennium BC: Discovery of the area",
"Paintings from 7300 BC discovered",
"Llama breeding was already taking place around 200 BC",
"Tafi culture (c. 200 BC to 800 AD) cultivated maize",
"Farming culture dominant from c. 1800 BC to 500 AD",
"Santa María culture (c. 1200 to 1470) with terrace construction",
"In the 13th and 14th centuries, the Inca Empire expanded significantly southwards",
"The Inca Empire encompassed large parts of northwestern Argentina around 1450",
"Juan Díaz de Solís reached the mouth of the Río de la Plata in 1516",
"Sebastiano Caboto explored the Río Paraná up to its upper reaches",
"Argentina was colonized by the Spanish from three directions:",
"The first settlement was Sancti Spiritu (1527-1529)",
"In 1536, Pedro de Mendoza founded the city of Buenos Aires.",
"From Peru, the Spanish took possession of the northwest",
"and from the west, from Chile, the Cuyo region was colonized.",
"In 1776, the Viceroyalty of the Río de la Plata was also separated from southern South America.",
"In 1776, Buenos Aires became the capital of the new viceroyalty.",
"In 1825, Bolivia was separated from Argentina.",
"Juan Manuel de Rosas, governor of Buenos Aires from 1829 on",
"From 1835, a totalitarian, dictatorial system was introduced.",
"In 1833, Argentina lost the Falkland Islands (Islas Malvinas) to Great Britain.",
"Buenos Aires became the capital of the republic again in 1880.",
"In 1869, Argentina had 1,836,490 inhabitants, 8% of whom were European.",
"1880-1929: economic boom and increased immigration from Europe.",
"In 1930, Yrigoyen was overthrown in a military coup.",
"Ramón Castillo was deposed in a coup in 1943.",
"Transitional phase until 1946, in which the military held power.",
"Juan Perón tricked his way to power in 1945.",
"Perón was dismissed and arrested on October 10th, 1945.",
"Juan Perón won the 1946 elections.", "Perón dominated political life with his wife Eva Perón (known as Evita, † 1952) until 1955.",
"His reign was a mixture of democracy and dictatorship.",
"Until the 1950s, Argentina was wealthier than European countries.",
"End of this role - continue with the continue button."]
  const ulEl = document.querySelector("ul");
  let events = historyEvents; 
  let countNumber = 0; 
  let activeIndex = 0;
  const rotate = -360 / events.length;

  init();  
  
  function init() {
    document.getElementById("btnContinue").classList.add("hide");
    events.forEach((event, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--idx", idx);
      liEl.innerHTML = `<span ${idx + 1}">${
        idx + 1
      }</span><span>${event}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustNumber(0);
  }
  function adjustNumber(nr) {
    countNumber += nr;
    ulEl.style.setProperty("--currentNumber", countNumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + events.length) % events.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
   
    newActiveEl.classList.add("active");
    console.log("index", activeIndex, "length", events.length)
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustNumber(-1);
        break;
      case "ArrowDown":
        adjustNumber(1);
        break;
      default:
        return;
    }
  });
  
 setTimeout(() => {
  document.getElementById("btnContinue").style.display = "flex";
 }, 8000);

 