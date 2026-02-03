    
// examples of getElementById
let heading=document.getElementById("intro");
heading.style.color="blue";
heading.style.fontSize="24px";
heading.textContent="Welcome to the DOM Manipulation Tutorial!";
console.log(heading);

// examples of getElementsByClassName
let items=document.getElementsByClassName("item");
// This is for loop to change background color of each item
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor = "lightgray";
}
console.log(items);
