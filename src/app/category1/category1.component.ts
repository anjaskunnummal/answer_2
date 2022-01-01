import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessAPIService } from '../services/access-API.service';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss']
})
export class Category1Component implements OnInit {


 public cart_item :any = []
 public category_name :any;
 public cart_count = 0;
 public cart_already_items :any = []
  constructor(private route:ActivatedRoute,private _snackBar:MatSnackBar,private router:Router,private accessService:AccessAPIService) {
  this.category_name = this.route.snapshot.paramMap.get('category-name')
  console.log(this.category_name)
   }
 
  ngOnInit() {
    this.cart_already_items = localStorage.getItem('cart')
  }

  category_prod : any = [{
    name : 'Samsung galaxy s20',
    image : 'https://images.hindustantimes.com/tech/img/2020/08/02/original/DSCF0956_1596372104016_1596372597451.jpg'
  },
{
  name : 'Iphone 11pro',
  image : 'https://www.davidjones.com/productimages/magnify/2/2041547_20071629_3021049.jpg'
},
{
  name : 'Realme xpro',
  image : 'https://th.bing.com/th/id/OIP.mwbjKlgFZGf8G_-XCcYt1QHaHa?pid=ImgDet&rs=1'
},
{
  name : 'Iphone 5',
  image : 'https://d28i4xct2kl5lp.cloudfront.net/product_images/1550758208.84.jpg'
},
{
  name : 'Poco F2',
  image : 'https://th.bing.com/th/id/OIP.PzOTsP6ePVTohyaJlvvD4wHaHa?pid=ImgDet&rs=1'
}
]


addCart(product:any){
  this.cart_item.push(product)
  localStorage.setItem('cart',JSON.stringify(this.cart_item));
  this.cart_count++
  localStorage.setItem('cart-count',JSON.stringify(this.cart_count))
  this.opensnackBar('Item added to cart');
  this.updateCartCount(this.cart_count)

}

updateCartCount(count:any){
  this.accessService.getAccessDetails(count)
}


opensnackBar(message:string){
  this._snackBar.open(message,'close',{
    duration:2000,
  })
}

}
