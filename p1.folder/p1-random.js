/* 
    CIT 281 project 1
    Name: Myles Davis
 */

/* 
output a string 5-25 chars (range inclusive) containing random lowercase letters of alphabet 

Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 */

/* function randomLength() 
{
    return Math.floor(Math.random() * (5 - 26) + 26);
}
const alphabetLowwerCase = "abcdefghijklmnopqrstuvwxyz"
function randomLetter()
{ 
    return alphabetLowwerCase[Math.floor(Math.random() * alphabetLowwerCase.length)]
}
function randomString()
{
    let String = "";
    for (i=0; i < randomLength(); i++)
    {
        String = String + randomLetter();
        //console.log(String);
    }
    console.log(String);
}
randomString(); 
*/

function randomString()
{
    const alphabetLowwerCase = "abcdefghijklmnopqrstuvwxyz"
    let String = "";
    for (i=0; i < Math.floor(Math.random() * (5 - 26) + 26); i++)
    {
        String = String + alphabetLowwerCase[Math.floor(Math.random() * alphabetLowwerCase.length)];
        //console.log(String);
    }
    console.log(String);
}
randomString();