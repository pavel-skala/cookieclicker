const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cookieClickMultiplier = document.getElementById("cookieClickMultiplier");
const cookieClickMultiplier2 = document.getElementById("cookieClickMultiplier2");
const info = document.getElementById("info");
const autoClickerButton = document.getElementById("autoClickerButton")

let numberOfCookie = 0;
let cookieIncrease = 1;

let autoClickerPrice = 100;
let autoClickerIncrease = 0;

cookie.onclick = () => {
    numberOfCookie += cookieIncrease;//++pricte 1
    counter.innerHTML = numberOfCookie
}

cookieClickMultiplier.onclick = () => {
    if (numberOfCookie >= 50){
        numberOfCookie -=50; //odectou se susenky
        cookieIncrease++; 
        counter.innerHTML = numberOfCookie; //aktualizujou se susenky
        let t = cookieIncrease - 1;
        info.innerHTML = `You bought a new upgrade with turbo ${t}x`;
    }
}

cookieClickMultiplier2.onclick = () => {
    if (numberOfCookie >= 200){
        numberOfCookie -=200; //odectou se susenky
        cookieIncrease += 5; 
        counter.innerHTML = numberOfCookie; //aktualizujou se susenky
        let t = cookieIncrease - 5;
        info.innerHTML = `You bought a new upgrade with turbo ${t}x`;
    }
}

autoClickerButton.onclick = () => {
    if(numberOfCookie >= autoClickerPrice){
        numberOfCookie -=autoClickerPrice;
        counter.innerHTML = numberOfCookie;
        autoClickerPrice *= 2;
        autoClickerButton.innerHTML = `Buy Auto Clicker: ${autoClickerPrice}`
        if(autoClickerIncrease == 0){
            setInterval(() => {//spustí se interval
                numberOfCookie += autoClickerIncrease;
                counter.innerHTML = numberOfCookie;
            }, 1000);
        }
        autoClickerIncrease++;
    }
}