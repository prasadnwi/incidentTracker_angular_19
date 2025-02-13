import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, IAPIRESPONSE } from '../../models/user';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObjct: User = new User();
  masterService = inject(MasterService);
  router = inject(Router);

  onLogin() { 
    // IncidentAdmin / Admin
    this.masterService.login(this.loginObjct).subscribe((res: IAPIRESPONSE) => { 
      if (res.result) {
        localStorage.setItem('incidentUser', JSON.stringify(res.data));
        this.router.navigateByUrl("/dashboard");
      } else { 
        alert('Wrong credential');
      }
    })
  }
}
