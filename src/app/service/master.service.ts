import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIRESPONSE, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  login(user: User) { 
    return this.http.post<IAPIRESPONSE>("https://projectapi.gerasim.in/api/IncidentTracking/login", user)
  }
}
