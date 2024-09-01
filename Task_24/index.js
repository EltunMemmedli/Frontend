

document.getElementById("searchButton").addEventListener("click", function() {
    const countryName = document.getElementById("countryInput").value;



    
    if (countryName) {
        const countryRequest = new XMLHttpRequest();
        
        countryRequest.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
        countryRequest.send();

        countryRequest.addEventListener("load", () => {
            if (countryRequest.status === 200) {
                const response = JSON.parse(countryRequest.responseText);
                document.getElementById("output").innerHTML = `
                    <p>Ölkə: ${response[0].name.common}</p>
                    <p>Paytaxt: ${response[0].capital[0]}</p>
                    <p>Region: ${response[0].region}</p>
                    <p>Əhali: ${response[0].population}</p>
                    <img src="${response[0].flags.png}" alt="Bayraq">
                `;
            } else {
                document.getElementById("output").innerHTML = "Ölkə tapılmadı!";
            }
        });

        countryRequest.addEventListener("error", () => {
            document.getElementById("output").innerHTML = "Xəta baş verdi!";
        });
    } else {
        document.getElementById("output").innerHTML = "Zəhmət olmasa ölkə adı daxil edin!";
    }
});
