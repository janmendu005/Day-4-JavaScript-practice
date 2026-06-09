async function getUsers() {
  const response =
    await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
  const data =
    await response.json();
  console.log(data);
}
getUsers();

// Practice name:
async function getUsers() {
  const response =
    await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
  const data =
    await response.json();
  console.log(data[0].name);
}
getUsers();
// Practice email:
async function getUsers() {
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
    const data =
        await response.json();
    console.log(data[0].email);
}
getUsers();
// Print specific data:
// For name:
async function getUsers() {
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
    const data =
        await response.json();
    data.forEach(user => {
        console.log(user.name);
    });
}
getUsers();
// for email:
async function getUsers() {
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
    const data =
        await response.json();
    data.forEach(user => {
        console.log(user.email);
    });
}
getUsers();
// Practice with posts API:
async function getPosts() {
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
    const data =
        await response.json();
    data.forEach(post => {
        console.log(post.title);
    });
}
getPosts();
// Fetch todos API:
async function getTodos() {
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
    const data =
        await response.json();
    data.forEach(todo => {
        console.log(todo.title);
    });
}
getTodos();
// Add error handling:
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Something went worng:", error);
    }
}
getUsers();