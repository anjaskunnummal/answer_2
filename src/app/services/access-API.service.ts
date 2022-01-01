import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessAPIService {

  private accessDetails$ =  new BehaviorSubject<any>(localStorage.getItem('cart-count'));
  cartCount$ = this.accessDetails$.asObservable()

constructor() { }

getAccessDetails(details:any) {
  
   this.accessDetails$.next(details);
}

}
