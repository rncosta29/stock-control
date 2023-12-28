import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';

import { SignUpUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL;

  constructor(private  http: HttpClient, private cookieService: CookieService) { }

  signupUser(requestDatas: SignUpUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.API_URL}/auth`,
      requestDatas
    )
  }

  isLoggedIn(): boolean {
    // Verifica se usuário tem o token ou um cookie
    const JWT_TOKEN = this.cookieService.get('USER_INFO');
    return JWT_TOKEN ? true : false;
  }
}
