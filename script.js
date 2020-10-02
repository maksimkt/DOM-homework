let countryList = [
    {
     country: "Україна",
     capital:"Київ",
     count: 40000000
    },
    {
     country: "Грузія",
     capital:"Тбілісі",
     count: 10000000
    },
    {
     country: "Великобританія",
     capital:"Лондон",
     count: 100000000
    },
    {
     country: "США",
     capital:"Вашингтон",
     count: 300000000
    }];


    
    let ul = document.createElement("ul");
    let list = document.getElementById("country-list");
    for (let i = 0; i < countryList.length; i++) {
        let li = document.createElement("li");
        let countryName = document.createElement("h1");
        let countryCapital = document.createElement("h1");
        let pepleCount = document.createElement("h1");
        countryName.innerHTML = `${countryList[i].country}`;
        countryCapital.innerHTML = `${countryList[i].capital}`;
        pepleCount.innerHTML = `${countryList[i].count/1000000} млн`;
            if (countryList[i].country === "Україна") {
                countryName.style.color = "blue";
        }
            if (countryList[i].capital === "Київ") {
                countryCapital.style.color = "yellow";
        }
        li.appendChild(countryName);
        li.appendChild(countryCapital);
        li.appendChild(pepleCount);
        ul.appendChild(li);
    }
list.appendChild(ul);