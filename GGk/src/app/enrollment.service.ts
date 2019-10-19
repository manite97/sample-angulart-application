import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './user'
import { Observable } from 'rxjs';
const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}
@Injectable(
)
export class EnrollmentService {

  _url_post = 'http://localhost:5000/users'
  _url_get = 'http://localhost:5000/users'
  _url2 = 'http://localhost:58074/api/postimg'
  _url3 = 'http://localhost:58074/api/getimg'
  constructor(private _http:HttpClient) { }
  totalCount = 5;
  enroll( user:User , fileToUpload:File){
    const formData:FormData = new FormData();
    formData.append("name",user.name);
    formData.append("email",user.email);
    formData.append("phone",user.phone);
    formData.append("topic",user.topic);
    formData.append("timePreference",user.timePreference)
    formData.append("Image",fileToUpload,fileToUpload.name);
   return  this._http.post(this._url_post,formData);
  }
  // enrollPic(fileToUpload :File)
  // {
  //   const formData:FormData = new FormData();
  //   formData.append("Image",fileToUpload,fileToUpload.name);
  //   return this._http.post<File>(this._url2,formData);
  // }
  getdata():Observable<User[]>
  {
    return this._http.get<User[]>(this._url_get);
  }
//   getimage(): Observable<Blob> {
//   return this._http.get(this._url3, { responseType: 'blob' });
//  }  
}
