const tab=[
    {
    id:1,
    name:"Paryż",
    contynent:"Europa Zachodnia",
    img:"./images/paryz.png",
    text:"Paryż stolica i najludniejsze miasto Francji. Położone jest w północnej części kraju, w centrum Basenu Paryskiego, nad Sekwaną. Stanowi centrum polityczne, ekonomiczne i kulturalne kraju. W Paryżu znajduje się wiele zabytków z różnych epok, dzieł sztuki, budowli architektonicznych, muzeów, uczelni oraz instytucji o znaczeniu międzynarodowym. Paryż to również światowe centrum mody i sztuki."
    },
    {
    id:2,
    name:"Warszawa",
    contynent:"Europa Środkowa",
    img:"./images/wawa.png",
    text:"Warszawa stolica Polski i województwa mazowieckiego, najludniejsze miasto w kraju i drugie (po Gdańsku) pod względem powierzchni, położone w jego centralnej części, na Nizinie Środkowomazowieckiej, na Mazowszu, nad Wisłą. Historyczna zabudowa Warszawy wielokrotnie była niszczona podczas wojen. Szczególnie ucierpiała podczas II wojny światowej. Miasto odbudowano dużym wysiłkiem społeczeństwa całego kraju. Za wzorcową uznaje się rekonstrukcję Starego Miasta, które 2 września 1980 zostało umieszczone na liście światowego dziedzictwa UNESCO jako wyjątkowy przykład całkowitej rekonstrukcji zespołu historycznego."
    },
    {
    id:3,
    name:"Rzym",
    contynent:"Europa Południowa",
    img:"./images/rzym.png",
    text:"Rzym stolica i największe miasto Włoch, położone w środkowej części kraju nad rzeką Tyber i Morzem Śródziemnym. Rzym od starożytności znany jest jako Wieczne Miasto, a także stolica świata. Rzym jest metropolią o znaczeniu globalnym, a także dużym węzłem komunikacyjnym z jednym z największych międzynarodowych portów lotniczych w Europie, z rozbudowaną siecią autostrad i linii kolei dużych prędkości. Światowy ośrodek turystyczny z bardzo bogatymi zabytkami starożytności i średniowiecza (kościoły, bazyliki, Koloseum, pałace, akwedukty, fontanny i wiele innych budowli), niezwykle bogate muzea, nowoczesne osiedla mieszkaniowe na przedmieściach."
    },
    {
    id:4,
    name:"Wiedeń",
    contynent:"Europa",
    img:"./images/wieden.png",
    text:"Wiedeń stolica i największe miasto w Austrii położone w północno-wschodniej części kraju, nad Dunajem oraz miasto statutarne tworzące jednocześnie odrębny kraj związkowy. Wiedeń jest ośrodkiem administracyjnym, przemysłowym, handlowo-usługowym, akademickim, turystycznym i kulturalnym o znaczeniu międzynarodowym. Jest siedzibą austriackich urzędów centralnych (w tym parlamentu, prezydenta i rządu). Historyczne centrum miasta, pełne zabytków ze wszystkich epok historycznych z przewagą XIX-wiecznego historyzmu i secesji przełomu XIX i XX wieku, zostało w 2001 roku wpisane na listę światowego dziedzictwa UNESCO." 
        }
    ];

    const img =document.getElementById("city-img");
    const city =document.getElementById("city");
    const continent =document.getElementById("continent");
    const info =document.getElementById("info");
    //info.style.color="green"; -sprawdza zmiane koloru
    //info.textContent="aaa"; -sprawdza zmiane tekstu
    //img.src="./images/wawa.png"-sprawdza zmiane obrazu

    const prevBtn=document.querySelector(".prev-btn");
    const randomBtn=document.querySelector(".random-btn");
    const nextBtn=document.querySelector(".nextBtn");

    let num=0;

    window.addEventListener("DOMContentLoaded",function(){
        
        showCity(num);
    });

    //funcja showCity
    function showCity(numm){
        const item=tab[numm];
        img.src=item.img;
        info.textContent=tab[num].text;//inny zapis
        city.textContent=item.name;
        continent.textContent=item.contynent;
    }
    //funcje dot. btn
    nextBtn.addEventListener('click',function(){
        num++;
        if(num>tab.length-1){num=0;}
        showCity(num);
        
    });
    prevBtn.addEventListener('click',function(){
        num--;
        if(num<0){num=tab.length-1;}
        showCity(num);  
    });
    