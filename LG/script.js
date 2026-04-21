function orderFood(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food ordered")
            resolve()
        }, 2000)
        }
}

function prepareFood(){ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food prepared")
            resolve()
        }, 2000)
    })
}
function delieverFood(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food delivered")
            resolve()
        }, 2000)
    })
}

async function order(){
    await orderFood()
    await prepareFood()
    await delieverFood()
}

order()       

console.log("First line")
try{
    let sample=234
    console.log(sample) 
    console.log("Line after sample") 
}catch(error){
    console.error("An error occurred:", error)
}
console.log("Last line of code")

let age=16
if(age<18){
    throw new Error("You must be at least 18 years old to proceed.")
    } 
catch (error) {
    console.error("An error occurred:", error.message);
}   
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    async function getData() {
        try{
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.error("An error occurred while parsing JSON:", error);          
            
        ,