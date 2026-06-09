console.log("User Directory App Loaded");
const btn = 
document.getElementById("loadUsers");
const usersContainer =
 document.getElementById("users");


 async function loadUsers() {

  try {

    usersContainer.innerHTML = "";
    
// Fetch users from API

    const response =
      await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

// Convert response to JSON
    const users =
      await response.json();

      users.forEach(user => {

    const p =
    document.createElement("p");

  p.textContent =
   `${user.name} - ${user.email}`;

  usersContainer.appendChild(p);

});

   

  } catch(error) {

    console.log(
      "Error:",
      error
    );

  }

}

btn.addEventListener(
  "click",
  loadUsers
);