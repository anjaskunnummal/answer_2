import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AccessAPIService } from '../services/access-API.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart_items :any = []
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  displayedColumns: string[] = ['delete_icon','img', 'name', 'quantity'];

  public cart_length:any;

  constructor(private accessService:AccessAPIService,private _snackBar:MatSnackBar) { }

  ngOnInit() {
    var item:any= []
    item = localStorage.getItem(('cart'));
    this.cart_items = JSON.parse(item)
    this.dataSource = new MatTableDataSource<any>(this.cart_items );
    console.log(this.cart_items)

    this.cart_length = localStorage.getItem('cart-count')
  }
  delete(element:any,index:any){
    const data = this.dataSource.data;
    data.splice( index, 1);
    this.dataSource.data = data;
    this.openSnackBar('Product removed')

  }

  addQuantity(element:any){
    element.quantity++
    this.cart_length++
    this.accessService.getAccessDetails(this.cart_length )


  }

  removeQuantity(element:any){
    if(element.quantity==1){
      return;
    }
    this.cart_length--
    element.quantity--
    this.accessService.getAccessDetails(this.cart_length )
  }

  openSnackBar(message:string){
    this._snackBar.open(message,'close',{
      duration:2000
    })
  }

}
