import { Component, HostListener, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { AccessAPIService } from './services/access-API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public cart_length :any=0;
  constructor(private router: Router,private accessService:AccessAPIService,public dialog: MatDialog) {
  }

  display = false;
  close_icon = false;
  opened = true;
  nav_icon = true;
  search_icon = true;
  cartcount: any; //number
  @ViewChild('sidenav', { static: true })
  sidenav!: MatSidenav;
  control = new FormControl();



  ngOnInit() {

    this.accessService.cartCount$.subscribe((result:any)=>{
      this.cart_length = result
    })

    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }

  
  }

  goCart(){
    const dialogRef = this.dialog.open(CartComponent, {
      disableClose: true,
  }
);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  

  }
gotoCategory(val:any){
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate(['home/'+val]);
});
}

 

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

}
