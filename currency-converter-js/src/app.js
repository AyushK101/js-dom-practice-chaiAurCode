let URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

let dropdowns = document.querySelectorAll('.dropdown select');

const btn = document.querySelector(".btn");

let fromCurrency = document.querySelector(".from select");
let toCurrency = document.querySelector(".to select");
let input = document.querySelector("#amount");
let msg = document.querySelector(".msg");

for(let select of dropdowns) {
    for(let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption) ;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";

        } else {
            if ( select.name == "to" && currCode == "INR") {
                newOption.selected = "selected";
            }
        }
    }
    select.addEventListener("change", (e)=>{
        updateFlag(e.target)
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSource = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSource ;
}

btn.addEventListener('click', async (e)=> {
    e.preventDefault();
    let amount = document.querySelector("form input").value;
    if( amount == ""  || amount<1 ) {
        amount = 1;        
    }
    let f = fromCurrency.value.toLowerCase();
    let t = toCurrency.value.toLowerCase();
     try {
        let result = await getExchangeRate(f,t);
        showResult(f, t, result, input.value);
        
     } catch {
        console.log('error');
        
     }
    
       
        
})

function showResult(f, t, result, input) {
    msg.innerHTML = ` <span> ${input} ${f} = ${result*input} ${t} </span>`;
}


async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

async function getExchangeRate(fromCurrency, toCurrency, ) {
    const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;
    
    try {
        const json = await fetchJSON(apiUrl);
        const rate = json[fromCurrency][toCurrency];
        return rate;
    } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
        // Optional fallback mechanism
        return await fallbackExchangeRate(fromCurrency, toCurrency);
    }
}

async function fallbackExchangeRate(fromCurrency, toCurrency) {
    // Implement your fallback logic here
    console.log('Using fallback mechanism...');
    // For example, return a default rate or fetch from a different source
    return 1; // Fallback to a default rate
}

