import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DbFaker } from '../interfaces/db-faker';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeMainService implements OnInit{

  dbFakerUrl: string = 'assets/db/data.json';

  homeMainData!:DbFaker | any;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {   
  }

  getData(): Observable<DbFaker>{
    this.homeMainData = this.http.get<DbFaker>(this.dbFakerUrl)  
    return this.homeMainData;
  }
}
