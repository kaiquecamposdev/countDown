const currentHoursInWeb = document.querySelector('.timer');
const currentHoursInTitle = document.title;
const buttonSubscribe = document.querySelector('input');
const textCount = document.querySelector('h1');

const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();


const currentDate = new Date(currentYear, currentMonth, currentDay);

const firstDay =  new Date(currentYear, currentMonth, 1);
const lastDay = new Date(currentYear, currentMonth + 1, 0);

let diff;
let miliseconds;

if (date.getDay() === 6) {

     currentDay += 1;

}
else if (date.getDay() === 0) {

     currentDay += 2;

}
if(currentDate.getDay() == 5) {

    setTimeout(() => {

        currentHoursInWeb.innerHTML = 'TGIF BRO!!';
        currentHoursInWeb.setAttribute("id", "animated-text");
        textCount.style.display = 'none';
        buttonSubscribe.style.display = 'none';

    }, 1000)

}else {
    // calcula a diferença até a proxima sexta-feira
    let nextFriday = new Date(currentYear, currentMonth, currentDay);
    nextFriday.setDate(currentDate.getDate() + (5 - currentDate.getDay() + 7) % 7);
    diff = nextFriday.getTime() - date.getTime();

}

function atualizarOTempoAteSextaFeira() {

    const timer = setInterval(() => {

        diff -= 1000;
    
        let days = Math.floor(diff / (1000 * 60 * 60 * 24) % lastDay.getDate());
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
        let remainingDays = days.toString().padStart(2, '0');
        let remainingHours = hours.toString().padStart(2, '0');
        let remainingMinutes = minutes.toString().padStart(2, '0');
        let remainingSeconds = seconds.toString().padStart(2, '0');
    
        currentHoursInWeb.textContent = `${remainingDays} : ${remainingHours} : ${remainingMinutes} : ${remainingSeconds}`;

        document.title = `${remainingDays}:${remainingHours}:${remainingMinutes}:${remainingSeconds}`;

    }, 1000)
    

}
atualizarOTempoAteSextaFeira()
