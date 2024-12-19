import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // List of items in the cart
  items: { id: number, name: string, price: number, quantity: number }[] = [];
  
  // Item data (hardcoded for simplicity)
  allItems = [
    { id: 5001, name: 'Item 5001', price: 20 },
    { id: 5002, name: 'Item 5002', price: 25 },
    { id: 5003, name: 'Item 5003', price: 30 },
    { id: 5004, name: 'Item 5004', price: 40 },
    { id: 5005, name: 'Item 5005', price: 50 }
  ];

  // To store the total bill
  totalBill = 0;

  // Add item to the cart
  addItem(itemId: number, quantity: number) {
    const selectedItem = this.allItems.find(item => item.id === itemId);
    if (selectedItem && quantity > 0) {
      this.items.push({ ...selectedItem, quantity });
      this.calculateTotal();
    }
  }

  // Calculate the total bill
  calculateTotal() {
    this.totalBill = 0;
    this.items.forEach(item => {
      this.totalBill += item.price * item.quantity;
    });
  }

  // Remove item from the cart
  removeItem(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.calculateTotal();
  }

  // Reset the cart
  resetCart() {
    this.items = [];
    this.totalBill = 0;
  }
}
