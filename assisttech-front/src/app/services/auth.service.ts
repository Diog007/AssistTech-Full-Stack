import { Injectable, OnInit } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { HttpClient} from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds);
  }

  successfulLogin(authToken: string, email: string) {
    localStorage.setItem('token', authToken)
    localStorage.setItem('email', email)
  }

}
