const historyEvents = [
    "Ca. 10. Jahrtausend v. Christus Entdeckung der Gegend",
    "Malereien aus 7300 v. Chr. entdeckt",
    "Um 200 v. Chr. bereits auf Lamazucht",
    "Tafi-Kultur (ca. 200 v. Chr. bis 800 n. Chr.) pflanzte Mais an",
    "Bauernkultur von etwa 1800 v. Chr. bis 500 n. Chr. dominant",
    "Kultur Santa María (ca. 1200 bis 1470) mmit Terrassenbau",
    " Im 13. und 14. Jahrhundert expandierte das Inka-Reich stark nach Süden",
    "Inka-Reicht umfasste um 1450 weite Teile des Nordwestens Argentiniens",
    "Juan Díaz de Solís erreichte 1516 die Mündung des Río de la Plata",
    "1526 und 1530 erforschte Sebastiano Caboto den Río Paraná bis zu seinem Oberlauf",
    "Argentinien wurde von den Spaniern aus drei Richtungen kolonisiert:",
    "Die erste Siedlung war Sancti Spiritu (1527 -1529)",
    "Im Jahr 1536 gründete Pedro de Mendoza die Stadt Buenos Aires.",
    "Von Peru aus nahmen die Spanier den Nordwesten in Besitz,",
    "und von Westen aus Chile wurde die Region de Cuyo kolonisiert.",
    "1776 auch das Vizekönigreich Río de la Plata wird vom südlichen Südamerika abgespalten.",
    "1776 Hauptstadt des neuen Vizekönigreiches wurde Buenos Aires",
    "1825 Bolivien wird von Argentinien losgelöst",
    "Juan Manuel de Rosas ab 1829 Gouverneur von Buenos Aires",
    "Ab 1835 führte ein totalitaristisches, diktatorisches System ein.",
    "1833 Argentinien verliert die Falklandinseln (Islas Malvinas) an Großbritannien.",
    " Buenos Aires wurde ab 1880 wieder Hauptstadt der Republik.",
    "1869 hatte Argentinien 1.836.490 Einwohner, 8 % davon Europäer",
    "1880 - 1929 wirtschaftlicher Aufschwung und verstärkte Einwanderung aus Europa.",
    "1930 wurde Yrigoyen bei einem Militärputsch gestürzt.",
    "Ramón Castillo wurde 1943 durch einen Putsch entmachtet",
    "Übergangsphase bis 1946, in der das Militär die Macht innehatte",
    "Juan Perón trickst sich 1945 an die Macht",
    "Perón wird am 10. Oktober 1945 entlassen und verhaftet",
    "Juan Perón gewann die Wahlen 1946", "Perón dominierte mit seiner Frau Eva Perón (genannt Evita, † 1952) das politische Leben bis 1955",
    "Seine Regierungszeit war eine Mischung aus Demokratie und Diktatur",
    "Bis in die 1950er Jahre war Argentinien wohlhabender als die europäischen Länder.",
    "Ende dieser Rolle - mit dem continue button geht`s weiter"    
  ];
  const historyEventsEnglish = ["Circa 10th millennium BC: Discovery of the area",
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

  function setEnglish(){
    window.location.href= 'history1English.html'
   }

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

 