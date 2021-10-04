import { Injectable, Injector } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { GeneralModel } from "./general.model";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export abstract class GeneralService<T extends GeneralModel> {
  protected http: HttpClient;
  protected headers: HttpHeaders;

  constructor(
    protected apiPath: string,
    protected injector: Injector,
  ) {
    this.http = injector.get(HttpClient);
  }

  getAll(query = ""): Observable<T[]> {
    const url = `${this.apiPath}${query}`;
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<T> {
    let url: string;
    if (id) url = `${this.apiPath}/${id}`;
    else url = `${this.apiPath}`;
    return this.http
      .get(url)
      .pipe(
        catchError(this.handleError)
      );
  }

    getPhotosbyAlbum(id: number): Observable<T> {
    let url: string;
    url = `${this.apiPath}/${id}/photos`;
    return this.http
      .get(url)
      .pipe(
        catchError(this.handleError)
      );
  }



  create(resource: T): Observable<T> {
    let url = "";
    url = this.apiPath;
    return this.http
      .post(url, resource, httpOptions)
      .pipe(catchError(this.handleError)
      );
  }

  update(resource: any, key): Observable<T> {
    let url = "";
    url = `${this.apiPath}/${resource[key]}`;
    return this.http
      .put(url, resource, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(key: number): Observable<any> {
    const url = `${this.apiPath}/${key}`;
    return this.http
      .delete(url)
      .pipe(catchError(this.handleError)
      );
  }

  protected handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}
