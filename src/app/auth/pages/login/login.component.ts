import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IUser } from '../../models/auth.models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  
  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.loginForm= this.iniForm()
  }

  iniForm(): FormGroup {
    return this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.minLength(4)]),
    });
  }

  onLogin(): void {
    this.authService.login(this.loginForm.value).subscribe((res) => {
      let dataResponse: IUser = res.user;
      console.log(dataResponse);
       // saveUser
       localStorage.setItem('USER_ID',  `${dataResponse.id}` );
      this.router.navigateByUrl('/home');
    },error=>{
     if (error.error.result="INVALID_CREDENCIAL"){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title:'Algo salió mal, inténtelo de nuevo',
        showConfirmButton: false,
        timer: 2000,
      });
     }
    })
  }


}
