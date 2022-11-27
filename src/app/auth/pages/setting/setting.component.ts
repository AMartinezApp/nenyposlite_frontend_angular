import { SettingI } from './../../models/setting.models';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  settingForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    public settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.settingForm = this.iniForm();
    this.getAll();
  }

  iniForm(): FormGroup {
    return this.fb.group({
      id: new FormControl(0),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl('@', [Validators.required, Validators.email]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      identity: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      logo: new FormControl('logoamartinez.jpg', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      note_sales: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      note_receipts: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      footer: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
    });
  }

  getAll() {
    this.settingService.getAll().subscribe((res) => {
      if (res.length > 0) {
        this.onEdit(res[0]);
      }
    });
  }

  onSave(): void {
    if (this.settingForm.value.id > 0) {
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
          this.settingService
            .onUpdate(this.settingForm.value)
            .subscribe((res) => {
              this.getAll();
              this.settingForm.reset();
            });
          this.alertDone();
        }
      });
    } else {
      this.settingService.onSave(this.settingForm.value).subscribe((res) => {
        this.getAll();
        this.settingForm.reset();
        this.alertDone();
      });
    }
  }

  onEdit(setting: SettingI) {
    // capture data for later editing
    this.settingForm.patchValue({ id: setting.id });
    this.settingForm.patchValue({ name: setting.name });
    this.settingForm.patchValue({ phone: setting.phone });
    this.settingForm.patchValue({ email: setting.email });
    this.settingForm.patchValue({ address: setting.address });
    this.settingForm.patchValue({ city: setting.city });
    this.settingForm.patchValue({ identity: setting.identity });
    this.settingForm.patchValue({ logo: 'logoamartinez.jpg' });
    this.settingForm.patchValue({ note_sales: setting.note_sales });
    this.settingForm.patchValue({ note_receipts: setting.note_receipts });
    this.settingForm.patchValue({ footer: setting.footer });
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
