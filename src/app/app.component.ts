import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allItems = [
    { id: 5001, name: 'Item 5001', price: 20 },
    { id: 5002, name: 'Item 5002', price: 25 },
    { id: 5003, name: 'Item 5003', price: 30 },
    { id: 5004, name: 'Item 5004', price: 40 },
    { id: 5005, name: 'Item 5005', price: 50 }
  ];

  selectedItemId: number = 5001; // This keeps track of the selected item id
  quantity: number = 1; // Quantity of the selected item
  cart: any[] = []; // The shopping cart
  totalAmount: number = 0; // Total amount for all items in the cart

  addItemToCart() {
    // Find the selected item from the allItems array based on the selectedItemId
    const selectedItem = this.allItems.find(item => item.id === this.selectedItemId);
    
    // Check if the item is found and if quantity is greater than 0
    if (selectedItem && this.quantity > 0) {
      // Create an object representing the item being added to the cart
      const itemInCart = {
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: this.quantity,
        total: selectedItem.price * this.quantity
      };

      // Check if the item already exists in the cart
      const existingItemIndex = this.cart.findIndex(item => item.id === selectedItem.id);
      
      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity and total
        this.cart[existingItemIndex].quantity += this.quantity;
        this.cart[existingItemIndex].total = this.cart[existingItemIndex].price * this.cart[existingItemIndex].quantity;
      } else {
        // If the item is not already in the cart, add it to the cart
        this.cart.push({ ...itemInCart, id: selectedItem.id });
      }

      // Recalculate the total amount in the cart
      this.calculateTotal();
    }

    // Reset quantity after adding the item
    this.quantity = 1;
  }

  calculateTotal() {
    // Calculate the total amount by summing up the total prices of each item in the cart
    this.totalAmount = this.cart.reduce((sum, item) => sum + item.total, 0);
  }
}
