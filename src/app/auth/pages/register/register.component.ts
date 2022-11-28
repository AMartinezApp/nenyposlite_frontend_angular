import { RoleI, UserI } from './../../models/auth.models';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
 
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userRegisterForm!: FormGroup;
  users: UserI[] = [];
  roles: RoleI[] = [];


  constructor(
    private authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userRegisterForm = this.iniForm();
    this.getAll();
  }

  iniForm() {
    return this.fb.group({
      id: new FormControl(0),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100), Validators.minLength(10)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]),
      confirm: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
      idrole: new FormControl(0, [Validators.required]),
    },{ validator: this.matchPassword });
  }
  
  matchPassword(control: AbstractControl): ValidationErrors | null {
  
    const password = control.get("password")?.value;
    const confirm = control.get("confirm")?.value;
 
    if (password != confirm) { 
      return { 'noMatch': true } 
    }else{
      return null
    } 
  }

  getAll(){
    this.authService.getAll().subscribe((res) => {
     this.users = res;
    });
    this.getAllRole();
  }

  getAllRole(){
    this.authService.getAllRole().subscribe((res) => {
     this.roles = res;
    });
  }

  onNewDoc(){
    this.userRegisterForm.reset();
  }
  onSave(){
    if (this.userRegisterForm.value.id > 0) {
      // modifying data
      Swal.fire({
        title: 'Modificar?',
        text: 'Está modificando el documento!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, modificar!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.authService
            .onUpdate(this.userRegisterForm.value)
            .subscribe((res) => {
              this.getAll();
              this.userRegisterForm.reset(); 
              this.alertDone();
            });
        }
      });
    } else {
      // saving data
      this.authService.onSave(this.userRegisterForm.value).subscribe((res) => {
        this.getAll();
        this.userRegisterForm.reset();
        this.alertDone();
      });
    }
  }
  onEdit(user: UserI){
    this.userRegisterForm.patchValue({id: user.id})
    this.userRegisterForm.patchValue({email: user.email})
    this.userRegisterForm.patchValue({name: user.name})
    this.userRegisterForm.patchValue({phone: user.phone})
    this.userRegisterForm.patchValue({idrole: user.idrole})
    this.userRegisterForm.patchValue({password: user.password})
    this.userRegisterForm.patchValue({confirm: user.password})

  }
   

  alertDone() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Operación exitosa',
      showConfirmButton: false,
      timer: 1200,
    });
  }

}
