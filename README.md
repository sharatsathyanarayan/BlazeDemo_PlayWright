Website: https://www.demoblaze.com/index.html   

Architecture: Page Object Model   


Flow:   

  a. Login   
  
  b. select multiple products and add it to the cart   
  
  c. Go to cart page   
  
  d. check if the cart contains the same products which was added   
  
  e. delete all the cart products   
  

Problem to be solved here:    

  Once you add multiple products into the cart page and then try to delete them, 
  everytime a product is deleted the DOM refreshes and count of products chnages,
  so we need to take account of that and then write a logic.   
  

        async deleteFromCart() {
            const rows = this.page.locator("tbody tr");
            let count = await rows.count();
            console.log("Initial cart count:", count);

        while (count > 0) {
            const firstRow = rows.first();

            // Click delete inside this row
            await firstRow.locator("text=Delete").click();

            // HARD WAIT (temporary for debugging)
            await this.page.waitForTimeout(1000);

            const newCount = await rows.count();
            console.log("Remaining:", newCount);

            // Safety check to avoid infinite loop
            if (newCount === count) {
                throw new Error("Row was not deleted — click not working");
            }

            count = newCount;
        }
    }
