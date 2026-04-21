async function sendData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'My Post',
            body: 'This is the content of my post.',
            userId: 1
        })
    });
    const data = await response.json();
    console.log(data);
}
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('age', '25');

console.log(localStorage.getItem('username')); // Output: JohnDoe
console.log(localStorage.getItem('age')); // Output: 25
localStorage.removeItem('age');
