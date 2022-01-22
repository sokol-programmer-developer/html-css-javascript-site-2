
let date = new Date(),
    targetDay = 1, //  начиная с вс = 0. понедельник = 1.
    targetDate = new Date(),
    delta = targetDay - date.getDay();
if (delta >= 0) {targetDate.setDate(date.getDate() + delta)}
else {targetDate.setDate(date.getDate() + 7 + delta)}

let targetNumber = targetDate.getDate();
let  targetMonth = targetDate.getMonth();
switch(targetMonth) {
    case 0: targetMonth = 'января'; break;
    case 1: targetMonth = 'февраля'; break;
    case 2: targetMonth = 'марта'; break;
    case 3: targetMonth = 'апреля'; break;
    case 4: targetMonth = 'мая'; break;
    case 5: targetMonth = 'июня'; break;
    case 6: targetMonth = 'июля'; break;
    case 7: targetMonth = 'августа'; break;
    case 8: targetMonth = 'сентября'; break;
    case 9: targetMonth = 'октября'; break;
    case 10: targetMonth = 'ноября'; break;
    case 11: targetMonth = 'декабря'; break;
}
let  targetYear = targetDate.getFullYear();

document.getElementById("current_date").innerHTML = (targetNumber + ' ' + targetMonth + ' ' + targetYear + ' год');