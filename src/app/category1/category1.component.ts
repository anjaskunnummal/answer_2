import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessAPIService } from '../services/access-API.service';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss'],
})
export class Category1Component implements OnInit {
  public cart_item: any = [];
  public category_name: any;
  public cart_count = 0;
  public cart_already_items: any = [];
  public category_prod: any = [];

  public cart_length:any;

  constructor(
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router,
    private accessService: AccessAPIService
  ) {
    this.category_name = this.route.snapshot.paramMap.get('category-name');
    console.log(this.category_name);
  }

  ngOnInit() {
    var cart_item :any=[]
    cart_item = localStorage.getItem('cart');
    this.cart_already_items = JSON.parse(cart_item);

    this.cart_length = localStorage.getItem('cart-count')
    console.log(this.cart_already_items)



    this.displayProd();
  }
  displayProd() {
    if (this.category_name == 'category1') {
      this.category_prod = [
        {
          name: 'Samsung galaxy s20',
          image:
            'https://images.hindustantimes.com/tech/img/2020/08/02/original/DSCF0956_1596372104016_1596372597451.jpg',
          quantity: 1,
        },
        {
          name: 'Iphone 11pro',
          image:
            'https://www.davidjones.com/productimages/magnify/2/2041547_20071629_3021049.jpg',
          quantity: 1,
        },
        {
          name: 'Realme xpro',
          image:
            'https://th.bing.com/th/id/OIP.mwbjKlgFZGf8G_-XCcYt1QHaHa?pid=ImgDet&rs=1',
          quantity: 1,
        },
        {
          name: 'Iphone 5',
          image:
            'https://d28i4xct2kl5lp.cloudfront.net/product_images/1550758208.84.jpg',
          quantity: 1,
        },
        {
          name: 'Poco F2',
          image:
            'https://th.bing.com/th/id/OIP.PzOTsP6ePVTohyaJlvvD4wHaHa?pid=ImgDet&rs=1',
          quantity: 1,
        },
      ];
    } else if (this.category_name == 'category2') {
      this.category_prod = [
        {
          name: 'Jean shirt',
          image:
            'https://th.bing.com/th/id/OIP.92DcXdXp_IwBaqV-FXtysAHaJ3?pid=ImgDet&rs=1',
          quantity: 1,
        },
        {
          name: 'Face cleaner',
          image:
            'https://th.bing.com/th/id/OIP.9ITtAvBfpawffUSJ9rQsYQHaHa?pid=ImgDet&rs=1',
          quantity: 1,
        },
        {
          name: 'T-shirt combo',
          image:
            'https://th.bing.com/th/id/OIP.WCjQERmwObosZ4gM4d1lOAHaD4?pid=ImgDet&rs=1',
          quantity: 1,
        },
      ];
    } else {
      this.category_prod = [
        {
          name: 'Makeup box',
          image:
            'https://th.bing.com/th/id/OIP.WxXtmbskt6TgIHN1TegFewHaHa?pid=ImgDet&rs=1',
          quantity: 1,
        },
      ];
    }
  }

  addCart(product: any) {
    if(this.cart_already_items!=null){
      this.cart_item = this.cart_already_items
      this.cart_item.push(product)
      localStorage.setItem('cart', JSON.stringify(this.cart_item));
      this.cart_length++;
      localStorage.setItem('cart-count', JSON.stringify(this.cart_length));
      this.opensnackBar('Item added to cart');
      this.updateCartCount(this.cart_length);
    }
    else{
      this.cart_item.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cart_item));
      this.cart_count++;
      localStorage.setItem('cart-count', JSON.stringify(this.cart_count));
      this.opensnackBar('Item added to cart');
      this.updateCartCount(this.cart_count);
    }
 
  }

  updateCartCount(count: any) {
    this.accessService.getAccessDetails(count);
  }

  opensnackBar(message: string) {
    this._snackBar.open(message, 'close', {
      duration: 2000,
    });
  }
}
