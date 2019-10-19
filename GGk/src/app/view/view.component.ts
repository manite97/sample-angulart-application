import { Component, OnInit } from '@angular/core';
import {EnrollmentService} from '../enrollment.service';
import {User} from '../user';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],

})
export class ViewComponent implements OnInit {
  imageToShow: any;
  isImageLoading: boolean;

  constructor(private _data:EnrollmentService) {
    
   }
  public catchurl;
  public employess;
   createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
  }
  ngOnInit() {
    this._data.getdata()
       .subscribe(data => this.employess =  data);
    //  this._data.getimage()
    //    .subscribe(data =>{
    //     this.createImageFromBlob(data);
    //     this.isImageLoading = false;
    //   }, error => {
    //     this.isImageLoading = false;
    //     console.log(error);
    //   }); 
  }
}

