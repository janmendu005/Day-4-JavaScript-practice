// Practice with users API:
fetch(
  "https://jsonplaceholder.typicode.com/users"
)
.then(response => response.json())
.then(data => console.log(data));
//Practice data for user name:
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(user => {
    console.log(user.name);
  });

});
//Practice data for user email:
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(user => {
        console.log(user.email);
    });
});

// Practice with posts API:
fetch(
    "https://jsonplaceholder.typicode.com/posts"
)
.then(response => response.json())
.then(data =>  {

  data.forEach(post => {
    console.log(post.title);
  });

});
