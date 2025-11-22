const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

// Country codes for flags
const countryList = {
    "USD": "US",
    "INR": "IN",
    "NPR": "NP",
    "AUD": "AU"
};

// Print available countries (your old code)
for (code in countryList) {
    console.log(code, countryList[code]);
}

// Update flags when currency changes
document.getElementById("fromCurrency").addEventListener("change", updateFlags);
document.getElementById("toCurrency").addEventListener("change", updateFlags);

function updateFlags() {
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    document.getElementById("fromFlag").src =
        `https://flagsapi.com/${countryList[from]}/flat/64.png`;

    document.getElementById("toFlag").src =
        `https://flagsapi.com/${countryList[to]}/flat/64.png`;
}

// Convert function
async function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    if (!amount || amount <= 0) {
        alert("Enter a valid amount!");
        return;
    }

    // Fetch the API
    let url = `${baseURL}${from}.json`;
    let response = await fetch(url);
    let data = await response.json();

    let rate = data[from][to];
    let result = amount * rate;

    document.getElementById("resultText").innerText =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
