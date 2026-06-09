// Problem 1: user data loader
function getUserData() {

  return new Promise(resolve => {

    setTimeout(() => {
      resolve("User Data Loaded");
    }, 2000);

  });

}

async function loadUser() {

  const user =
    await getUserData();

  console.log(user);

}

loadUser();
// Problem 2: products data loader
function getProducts() {

  return new Promise(resolve => {

    setTimeout(() => {
      resolve("Products Loaded");
    }, 2000);

  });

}

async function loadProducts() {

  const products =
    await getProducts();

  console.log(products);

}

loadProducts();
// Problem 3: orders data loader
function getOrders() {

  return new Promise(resolve => {

    setTimeout(() => {
      resolve("Orders Loaded");
    }, 2000);

  });

}

async function loadOrders() {

  const orders =
    await getOrders();

  console.log(orders);

}

loadOrders();
// Problem 4: multiple data loader
function getUser() {
  return Promise.resolve("User");
}

function getProducts() {
  return Promise.resolve("Products");
}

async function loadApp() {

  const user =
    await getUser();

  const products =
    await getProducts();

  console.log(user);
  console.log(products);

}

loadApp();