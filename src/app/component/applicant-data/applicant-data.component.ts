import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-applicant-data',
  templateUrl: './applicant-data.component.html',
  styleUrls: ['./applicant-data.component.css']
})
export class ApplicantDataComponent implements OnInit {

  public Applicants:any =[];
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.addApplicant().subscribe(res=>{
      this.Applicants=res;
    })
  }
  deleteApplicant(Applicant_id:any){
    console.log(Applicant_id);
    this.user.deleteApplicant(Applicant_id).subscribe((result)=>{
      console.log(result);
    })
  

  }
 

}
