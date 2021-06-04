## CIT 281 p1

## Outcome:
This project focused on familiarizing myself with the command line and get some experience using node.   
I created some directories and pinged throug the command line and then wrote a program that returns a random string to run throught node.

**[p1 Repo](https://github.com/Myles-P-D/cit281-p1)**
## Code:
   
 
   
Here are links to the full code for the project:     
**[Date](https://github.com/Myles-P-D/cit281-p1/blob/main/p1-date.js)**      
**[Random](https://github.com/Myles-P-D/cit281-p1/blob/main/p1-random.js)**     
    
Below is an excerpt of what I wrote for the project.    
```javascript
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
```

## Images:
Here is an image of a folder tree.   
![folder tree](https://github.com/Myles-P-D/cit281-p1/blob/main/p1-tree.png?raw=true "folder tree")   
Here is an image of ping.   
![ping](https://github.com/Myles-P-D/cit281-p1/blob/main/p1-ping.png?raw=true "ping")    
Here is an image of breaking a ping.   
![break](https://github.com/Myles-P-D/cit281-p1/blob/main/p1-break.png?raw=true "break")   
Here is an image of seperate folders created in the command line for the project.    
![folders](https://github.com/Myles-P-D/cit281-p1/blob/main/p1-folders.png?raw=true "folders")   
