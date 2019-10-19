import { Component, OnInit } from '@angular/core';
import {User} from  '../user';
import {EnrollmentService} from '../enrollment.service'
import {Observable} from 'rxjs';
import { ActivatedRoute,Router,ParamMap } from '@angular/router'
import {OnChanges} from '@angular/core';
 @Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // providers: [EnrollmentService]
})
export class SignupComponent implements OnInit {

 imageUrl:string ="/assets/img/image1.jpg";
 filetoupload : File = null;
  userModel = new User('Teja','teja@test.com','9666242650','default','morning',this.filetoupload);
  ngOnInit() {
  }
   title = 'AngularForms';
  topicHasError = true;
  validateTopic(value){
    if(value === 'default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }
  constructor(private _enrollmentservice:EnrollmentService,private route:ActivatedRoute,private router:Router ){}
  onSubmit(Image){
    this._enrollmentservice.enroll(this.userModel , this.filetoupload)
    .subscribe(
      data=>{
        console.log('success!',data);
        this.router.navigate(['/view']);
        },
      error=>
      {
        console.error('Error!',error);
      }
    );
    
  //  this._enrollmentservice.enrollPic(this.filetoupload)
  //   .subscribe(
  //     data=>
  //     {
  //       console.log('success!',data);
  //       this.router.navigate(['/']);
  //     },
  //     error =>
  //     {
  //       console.error ('error!',error);
  //     }
  //   );
     
   }
  topics=['Angular','Ruby','Node'];
  
  handleFileInput(file: FileList){
    this.filetoupload = file.item(0);
    var reader = new FileReader();
    reader.onload =(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.filetoupload);
  }
}


