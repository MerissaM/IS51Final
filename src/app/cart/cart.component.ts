import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface ICart {
  id?: string;
  image: string;
  description: string;
  price: number;
  quantity: number;

}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Array<ICart> = [];
  params: string;
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.carts = await this.loadCarts();
  }

  async loadCarts() {
    let carts = JSON.parse(localStorage.getItem('carts'));
    if (carts && carts.length > 0) {
    } else {
      carts = await this.loadContactsFromJson();
    }
    console.log('this.contacts from ngOninit...', this.carts);
    this.carts = carts;
    return carts;
  }

  async loadContactsFromJson() {
    const contacts = await this.http.get('assets/inventory.json').toPromise();
    return contacts.json();
  }

  addItems(item: string) {
    switch (item) {
      case 'Bike Model 1':
        this.carts.unshift({
          'id': '1',
          'image': '../../assets/bike1.jpeg',
          'description': 'Bike Model 1',
          'price': 5000,
          'quantity': 1
        });
        break;
    }
    switch (item) {
      case 'Bike Model 2':
        this.carts.unshift({
          'id': '2',
          'image': '../../assets/bike2.jpeg',
          'description': 'Bike Model 2',
          'price': 4000,
          'quantity': 2
        });
        break;
    }
    switch (item) {
      case 'Bike Model 1':
        this.carts.unshift({
          'id': '3',
          'image': '../../assets/bike3.jpeg',
          'description': 'Bike Model 3',
          'price': 3000,
          'quantity': 3
        });
      // break;
      // this.carts.unshift(cart);
      // this.saveToLocalStorage();
    }
  }
}


// deleteCart(index: number) {
//   this.carts.splice(index, 1);
//   this.saveToLocalStorage();
// }

// saveToLocalStorage() {
//   localStorage.setItem('carts', JSON.stringify(this.carts));
// }

// checkout() {
//   const data = this.calculate();
//   localStorage.setItem('calculateData', JSON.stringify(data));
//   this.router.navigate(['home', data]);
// }

// calculate() {
//   let owed: any = null;
//   for (let i = 0; i < this.carts.length; i++) {
//     owed += this.carts[i].price;
//   }
//   return {
//     numberOfCarts: this.carts.length,
//     subTotal: owed,
//     taxAmount: owed * .10,
//     total: owed + (owed * .10)
//   };

// }

// search(params: string) {
//   console.log('from search......params', params);

//   this.carts = this.carts.filter((cart: ICart) => {
//     return cart.description.toLowerCase() === params.toLowerCase();
//   });
// }


