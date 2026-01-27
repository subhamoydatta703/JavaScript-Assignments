// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let count = 0;
const updateCount = ()=>{
    count++;
    console.log(count);
    if(count<10){
        
        setTimeout(updateCount, 1000)
    }

    

}

const countID = setTimeout(
    updateCount, 1000);
// (Hint: setTimeout)

