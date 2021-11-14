import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:3000/Applicants';

  constructor(private http:HttpClient) { }

  addApplicant(){
    return this.http.get(this.url);
  }
  
  saveApplicant(data:any){
    console.log(data);
    return this.http.post(this.url,data).subscribe((result)=>{
      console.log(result);
    });
  }
  deleteApplicant(id:any){
    return this.http.delete(`${this.url}/${id}`);

  }
  
}
  

