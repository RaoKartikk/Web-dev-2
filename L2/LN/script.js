console.log("Starting homework...");

setTimeout(() => {

console.log ("Homework done!");

console.log("Starting dinner...");

setTimeout(() => {

console.log("Dinner done!");

console.log("Getting ready to go out...");

setTimeout(() => {

console.log("Going to the playground!");

}, 1000); // after dinner

}, 1500); // dinner time

}, 2000); // homework time

function finishHomework(callback) {
    console.log("starting homework...");
    setTimeout(() => {
        console.log("homework done!");
        callback();   
    }, 2000);
}
function haveDinner(callback) {
    console.log("starting dinner...");      
    setTimeout(() => {
        console.log("dinner done!");
        callback();   
    }   , 1500);
}   
function goToPlayground() {
    console.log("going to the playground!");
}   
finishHomework(() => {
    haveDinner(() => {
        goToPlayground();
    }); 
    const p= new Promise((resolve, reject) => {
        let done=false
        if (done) {2
            resolve("homework done!");
        } else {
            reject("homework not done!");
        }       
    });
    