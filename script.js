
const apiKey = "YOUR_API_KEY";

async function haeSaa(kaupunki = document.getElementById("city").value) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${kaupunki}&units=metric&mode=xml&appid=${apiKey}`;

    try {
        const vastaus = await fetch(url);
        if (!vastaus.ok) {
            document.getElementById("weatherdata").textContent =
                "Kaupunkia ei löytynyt. Tarkista kaupungin nimi ja yritä uudelleen.";
            return;
}

        
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");

    const lampotila = xml.querySelector("temperature").getAttribute("value");
    const kosteus = xml.querySelector("humidity").getAttribute("value");
    const pilvisyys = xml.querySelector("clouds").getAttribute("value");

document.getElementById("weatherdata").innerHTML = `
    <h3>${kaupunki} - säätiedot</h3>
    <p>Lämpötila: ${lampotila} °C</p>
    <p>Ilmankosteus: ${kosteus} %</p>
    <p>Pilvisyys: ${pilvisyys} %</p>
`;

    } catch (virhe) {
        console.error("Säätietojen hakeminen epäonnistui:", virhe);
    }
}


document.getElementById("fetchWeather").addEventListener("click", () => haeSaa());

document.getElementById("city").addEventListener("change", () => haeSaa());

document.getElementById("search").addEventListener("click", () => {
    const hakusana = document.getElementById("citysearch").value.trim();

    if (hakusana !== "") {
        haeSaa(hakusana);
    } else {
        alert("Kirjoita kaupungin nimi!");
    }
});

