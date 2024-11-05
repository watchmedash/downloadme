const urls = [
"https://search.brave.com/search?q=dashflix",
"https://www.google.com/search?q=dashflix",
"https://www.bing.com/search?q=dashflix",
"https://duckduckgo.com/?t=h_&q=dashflix",
"https://www.yahoo.com/search?p=dashflix",
"https://www.ask.com/web?q=dashflix",
"https://search.aol.com/aol/search?q=dashflix",
"https://yandex.com/search/?text=dashflix",
"https://www.ecosia.org/search?q=dashflix",
"https://swisscows.com/en/web?query=dashflix",
"https://www.qwant.com/?q=dashflix",
"https://www.startpage.com/sp/search?query=dashflix",
"https://www.mojeek.com/search?q=dashflix",
"https://metager.org/meta/meta.english?eingabe=dashflix",
"https://search.privacywall.org/search?q=dashflix",
"https://search.disconnect.me/searchTerms/search?q=dashflix",
"https://gibiru.com/results.html?q=dashflix",
"https://www.wolframalpha.com/input/?i=dashflix",
"https://www.boardreader.com/s/dashflix",
"https://www.exalead.com/search/web/results/?q=dashflix",
"https://www.peekier.com/#!dashflix",
"https://www.searx.me/?q=dashflix",
"https://www.gigablast.com/search?q=dashflix",
"https://dogpile.com/serp?q=dashflix",
"https://neeva.com/search?q=dashflix",
"https://www.yippy.com/search?q=dashflix",
"https://eTools.ch/results.php?query=dashflix",
"https://search.givero.com/?q=dashflix",
"https://www.izito.com/?q=dashflix",
"https://www.infotiger.com/search?q=dashflix",
"https://zapmeta.com/?q=dashflix"
];

const switchInterval = 10000; // 30 seconds
let currentIndex = 0;
let intervalId;

function openPage(url) {
    const loadingIndicator = document.getElementById("loading");
    loadingIndicator.style.display = "block";
    window.open(url, "_blank");
    loadingIndicator.style.display = "none";
}

function rotatePages() {
    openPage(urls[currentIndex]);
    currentIndex = (currentIndex + 1) % urls.length;
}

document.getElementById("startButton").addEventListener("click", function() {
    rotatePages();
    intervalId = setInterval(rotatePages, switchInterval);
    this.disabled = true;
    this.style.display = "none";
});
