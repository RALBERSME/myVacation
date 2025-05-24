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
  const weitererText = ["Perón ist in Deutschland heute vor allem wegen seiner Sympathie für die Ideologie des Nationalsozialismus umstritten.[13] Er bewunderte Mussolini und äußerte sich extrem antisemitisch","Im September 1955 (sogenannte Revolución Libertadora) gelang es Militärs unter Führung von Eduardo Lonardi, erfolgreich zu putschen und Peróns Regierung abzusetzen. Doch auch nach seiner Entmachtung blieb Perón bei den Massen beliebt und aus dem Exil heraus einflussreich. ","Lonardi wurde noch im Jahr 1955 von Pedro Eugenio Aramburu abgelöst, der im Kern die Verfassung von 1853 wieder einsetzte und die peronistische Partei verbot. Wahlen im Februar 1958 brachten Arturo Frondizi von der UCRI (Unión Cívica Radical Intransigente, Unbeugsame Radikale Bürgerunion),",
    "erneuten Putsch am 28. Juni 1966 durch General Juan Carlos Onganía; Der konservative Onganía wurde am 28. Juni als neuer Präsident vereidigt und richtete eine Diktatur ein,",
    " Die Wahl vom März 1973 gewannen die Peronisten mit Héctor José Cámpora als Präsidentschaftskandidaten. Cámpora betonte im Wahlkampf, dass er im Fall einer Rückkehr Peróns ihm den Platz freimachen würde. ", "Perón kehrte am 20. Juni 1973 in sein Heimatland zurück.", "Nach Peróns Tod im Juli 1974 folgte ihm Isabel Perón, seine dritte Ehefrau, im Amt. Ihre Regierungszeit war von wirtschaftlichem Niedergang, Inflation des Peso und erneutem Terrorismus geprägt. Die schon unter Perón gegründete halbstaatliche Terrorbrigade Alianza Anticomunista Argentina (AAA) ermordete zahlreiche Oppositionelle und Aktivisten der Linken und ließ Menschen verschwinden", " Argentinische Militärdiktatur (1976–1983)Einige Madres beim damaligen Präsidenten Nestor Kirchner Im März 1976 übernahm das Militär unter Jorge Rafael Videla ","30. Oktober 1983 Raúl Alfonsín von der Unión Cívica Radical zum Präsidenten. Alfonsín führte Militärreformen ein, bekam die Wirtschaftsprobleme aber nicht unter Kontrolle",]
  const ulEl = document.querySelector("ul");

  let countNumber = 0; 
  let activeIndex = 0;
  const rotate = -360 / historyEvents.length;
  init();
  function init() {
    document.getElementById("btnContinue").classList.add("hide");
    historyEvents.forEach((event, idx) => {
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
    activeIndex = (activeIndex + nr + historyEvents.length) % historyEvents.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
   
    newActiveEl.classList.add("active");
    console.log("index", activeIndex, "length", historyEvents.length)
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
 }, 10000);
