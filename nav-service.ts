
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
//import { Country } from './model/country';
//import { Designation } from './model/designation';
//import { Department } from './model/department';
//import { Client } from './model/clients';
//import { EContactInformation } from './model/eContactInformation';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined!);
  private REST_API_SERVER = "http://localhost:1100/api/v1";

  constructor(private router: Router, private httpClient: HttpClient) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getCountries(){
    return this.httpClient.get(this.REST_API_SERVER+"/countries").pipe(retry(3),catchError(this.handleError));
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
   // HttpClient API post() method => Create employee
   /*public createCountry(country: any): Observable<Country> {
    return this.httpClient.post<Country>(this.REST_API_SERVER + '/countries', JSON.stringify(country), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  public deleteCountry(countryId:any){
    return this.httpClient.delete(this.REST_API_SERVER+`/countries/${countryId}`, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public updateCountry(country: any){
    return this.httpClient.put(this.REST_API_SERVER + '/countries', JSON.stringify(country), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  //Designation
  public getDesignations(){
    return this.httpClient.get(this.REST_API_SERVER+"/designations").pipe(retry(3),catchError(this.handleError));

  }

  public createDesignation(designation: any): Observable<Designation> {
    return this.httpClient.post<Designation>(this.REST_API_SERVER + '/createdesignations', JSON.stringify(designation), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  // Department

  public getDepartments(){
    return this.httpClient.get(this.REST_API_SERVER+"/departments").pipe(retry(3),catchError(this.handleError));
  }

   // HttpClient API post() method => Create employee
   public createDepartment(department: any): Observable<Department> {
    return this.httpClient.post<Department>(this.REST_API_SERVER + '/deparements', JSON.stringify(department), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  
//Client


public getClients(){
  return this.httpClient.get(this.REST_API_SERVER+"/clients").pipe(retry(3),catchError(this.handleError));
}

// HttpClient API post() method => Create employee
 public createClient(client: any): Observable<Client> {
  window.alert('clientName : ' + client.clientName);
    return this.httpClient.post<Client>(this.REST_API_SERVER + '/createClient', JSON.stringify(client), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

// View Client
public viewClientDetails(clientId:any){
  // return this.httpClient.get(this.REST_API_SERVER+"/viewClientDetails").pipe(retry(3),catchError(this.handleError));
 return this.httpClient.get(this.REST_API_SERVER+`/viewClientDetails/${clientId}`, this.httpOptions)

}


//Investor


public getInvestor(){
  return this.httpClient.get(this.REST_API_SERVER+"/investors").pipe(retry(3),catchError(this.handleError));
}

// HttpClient API post() method => Create employee
 public createInvestor(investor: any): Observable<Client> {
  window.alert('Investor Name : ' + investor.investorName);
    return this.httpClient.post<Client>(this.REST_API_SERVER + '/createInvestor', JSON.stringify(investor), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

//Emergency Contact Information

// HttpClient API post() method => Create employee
public createEContact(eContact: any): Observable<EContactInformation> {
  window.alert('Name : ' + eContact.Name);
    return this.httpClient.post<EContactInformation>(this.REST_API_SERVER + '/createEContact', JSON.stringify(eContact), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
} 

public getEContacts(){
  return this.httpClient.get(this.REST_API_SERVER+"/eContacts").pipe(retry(3),catchError(this.handleError));
}


//Registration

public getRegistrations(){
  return this.httpClient.get(this.REST_API_SERVER+"/getAllRegistrations").pipe(retry(3),catchError(this.handleError));
}

public newEmployeeRegistration(country: any): Observable<Country> {
  return this.httpClient.post<Country>(this.REST_API_SERVER + '/newEmployeeRegistration', JSON.stringify(country), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}*/ 
}
 

