/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {

    let p1 = new Promise((resolve) => {
        setTimeout(() => {
            console.log("First promise");
            resolve("Wait1")
        }, t * 1000);


    },)
    return p1
}

function wait2(t) {
    let p2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait2")
            console.log("Second promise");
        }, t * 1000);

    })
    return p2
}

function wait3(t) {
    let p3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait3")
            console.log("Third promise");
        }, t * 1000);

    })
    return p3
}

function calculateTime(t1, t2, t3) {
    let start = Date.now()
   return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((values) => {
        console.log(values);
        let end = Date.now();
        return end - start;
    });
    // console.log("Total time: ", ((t1+t2+t3)/1000), "ms");
}

calculateTime(2, 3, 5).then((x) => {
    console.log(`Time: ${x} ms`);

})

module.exports = calculateTime;
