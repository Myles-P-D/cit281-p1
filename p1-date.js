/* 
    CIT 281 Project 1
    Name: Myles Davis
 */


/* Output to the console current day of the week, w/ full name e.g. 'Sunday' 
solution must use an ARRAY containing dyas of week
try for 1 line of code
Execute w/ CLI and debug etc. in VSCode
 */

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function currentDay() { console.log(days[new Date().getDay()]);} currentDay()

/* 
let Day = new Date();
let CurrentDays = Day.getDay();

function CurrentDay ()
{
    return Days[new Date().getDay()];
}

//const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] function CurrentDay() {return Days[new Date().getDay()];} CurrentDay(); 
*/