// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
const currentTime = new Date();
console.log(currentTime); 
// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
setInterval(() => {
    const now = new Date();
  
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
  
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    console.log("----------------------");
    
    console.log("24-hour:", h + ":" + m + ":" + s);
    
    let hour12 = now.getHours();
    let ampm = "AM";
    
    if (hour12 >= 12) {
        ampm = "PM";
    }
    
    if (hour12 > 12) {
        hour12 = hour12 - 12;
    }
    
    if (hour12 == 0) {
        hour12 = 12;
    }
    
    if (hour12 < 10) hour12 = "0" + hour12;
    
    console.log("12-hour:", hour12 + ":" + m + ":" + s + " " + ampm);
    
    console.log("----------------------");
  
  }, 1000);
  