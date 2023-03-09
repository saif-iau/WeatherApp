import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
 
  isLoggedIn(): Boolean{
  let  token = localStorage.getItem('mytoken');
   return !!token;
  }

  isAdmin(): Boolean{
    let  token = localStorage.getItem('myrole');

    if(token == 'admin'){
      console.log('admin!');
        return true;
    }
    else {
      console.log(' not admin!');
      return false;
    }
  }
}
