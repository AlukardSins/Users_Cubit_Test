import { Injectable } from '@angular/core'
import { Observable, throwError, OperatorFunction } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

interface respuesta {
  page: Number
  per_page: Number
  total: Number
  total_pages: Number
  data: []
}

interface usuario {
  data: {
    id: Number
    email: String
    first_name: String
    last_name: String
    avatar: String
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string = 'http://localhost:3000'
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor (private http: HttpClient) {}

  // Get all users
  GetUsersPage1 () {
    return this.http.get<respuesta>(`${this.endpoint}/users/1`)
  }

  GetUsersPage2 () {
    return this.http.get<respuesta>(`${this.endpoint}/users/2`)
  }

  // Get user
  GetUser (id) {
    return this.http.get<usuario>(`${this.endpoint}/user/${id}`)
  }
}
