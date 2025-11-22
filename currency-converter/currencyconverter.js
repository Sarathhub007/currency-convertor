const baseURL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

import { countryList } from "./codes.js";

// Populate currency dropdowns
function populateCurrencies() {
  const fromSelect = document.getElementById("fromCurrency");
  const toSelect = document.getElementById("toCurrency");

  Object.keys(countryList).forEach((currency) => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    fromSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    toSelect.appendChild(option2);
  });

  // Set default values
  fromSelect.value = "USD";
  toSelect.value = "INR";
  updateFlags();
}

// Update flags when currency changes
document.getElementById("fromCurrency").addEventListener("change", updateFlags);
document.getElementById("toCurrency").addEventListener("change", updateFlags);

function updateFlags() {
  let from = document.getElementById("fromCurrency").value;
  let to = document.getElementById("toCurrency").value;

  document.getElementById(
    "fromFlag"
  ).src = `https://flagsapi.com/${countryList[from]}/flat/64.png`;

  document.getElementById(
    "toFlag"
  ).src = `https://flagsapi.com/${countryList[to]}/flat/64.png`;
}

// Initialize on page load
populateCurrencies();

// Convert function
async function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("fromCurrency").value;
  let to = document.getElementById("toCurrency").value;

  if (!amount || amount <= 0) {
    document.getElementById("resultText").innerText =
      "Converted amount appears here";
    return;
  }

  try {
    let url = `${baseURL}${from.toLowerCase()}.json`; // API requires lowercase
    let response = await fetch(url);
    let data = await response.json();

    let rate = data[from.toLowerCase()][to.toLowerCase()];
    let result = amount * rate;

    document.getElementById(
      "resultText"
    ).innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
  } catch (error) {
    console.error("Error fetching conversion rate:", error);
    document.getElementById("resultText").innerText = "Error fetching rate";
  }
}

// Make convert function globally accessible
window.convert = convert;
