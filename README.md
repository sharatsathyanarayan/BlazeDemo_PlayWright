Website: https://www.demoblaze.com/index.html 
Architecture: Page Object Model

Flow: 
  Login
  select multiple products and add it to the cart
  Go to cart page
  check if the cart contains the same product which was added
  delete all the cart products

Problem to be solved here: 
  Once you add multiple products into the cart page and then try to delete them, 
  everytime a product is deleted the DOM refreshes and count of products chnages,
  so we need to take account of that and then write a logic.
