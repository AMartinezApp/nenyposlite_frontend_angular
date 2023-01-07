import { NcftypeService } from './../../services/ncftype.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { arrNcf, NcfDataI, NcftypeI } from '../../models/ncftype';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ncftype',
  templateUrl: './ncftype.component.html',
  styleUrls: ['./ncftype.component.scss'],
})
export class NcftypeComponent implements OnInit {
  ncftypeForm!: FormGroup;
  ncftypes: NcftypeI[] = [];

  arrNcfs: NcfDataI[] = arrNcf;
  help: string = 'Seleccione un ncf para leer la descripción del mismo.';

  constructor(
    private ncftypeService: NcftypeService,
    public readonly fb: FormBuilder
  ) {}

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.ncftypeForm = this.iniForm();
    this.getAll();
  }

  iniForm(): FormGroup {
    return this.fb.group({
      id: [0],
      name: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ]],
      typedoc: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]],
      prefix: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
      ]],
      inicial_num: [0, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]],
      final_num: [0, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]],
      current_num: [0, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]],
      expiration: ['', [Validators.required]],
      tax: [0],
      status: ['A'],
      iduser: [0],
    });
  }

  getAll(): void {
    this.ncftypeService.getAll().subscribe((res) => {
      this.ncftypes = res;
    });
  }

  onNewDoc() {
    this.ncftypeForm.reset();
  }

  onSave() {
    this.ncftypeForm.patchValue({ iduser: localStorage.getItem('USER_ID') });
    this.ncftypeForm.patchValue({ status: 'A' });
     
    if (this.ncftypeForm.value.id > 0) {
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
          this.ncftypeService
            .onUpdate(this.ncftypeForm.value)
            .subscribe((res) => {
              this.getAll();
              this.onNewDoc();
              this.alertDone();
            });
        }
      });
    } else {
      this.ncftypeService.onSave(this.ncftypeForm.value).subscribe((res) => {
        this.getAll();
        this.onNewDoc();
        this.alertDone();
      });
    }
  }

  onEdit(ncftype: NcftypeI) {
    this.ncftypeForm.patchValue({ id: ncftype.id });
    this.ncftypeForm.patchValue({ name: ncftype.name });
    this.ncftypeForm.patchValue({ typedoc: ncftype.typedoc });
    this.ncftypeForm.patchValue({ prefix: ncftype.prefix });
    this.ncftypeForm.patchValue({ inicial_num: ncftype.inicial_num });
    this.ncftypeForm.patchValue({ final_num: ncftype.final_num });
    this.ncftypeForm.patchValue({ current_num: ncftype.current_num });
    this.ncftypeForm.patchValue({ expiration: ncftype.expiration });
    this.ncftypeForm.patchValue({ tax: ncftype.tax });
  }

  onUpdateStatus(ncftype: NcftypeI): void {
    Swal.fire({
      title: 'Borrando el documento',
      text: 'No podrá recuperarlo si lo hace!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, borralo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.onEdit(ncftype);
        this.ncftypeForm.patchValue({
          iduser: localStorage.getItem('USER_ID'),
        });
        this.ncftypeForm.patchValue({ status: 'D' });
        this.ncftypeService
          .onUpdate(this.ncftypeForm.value)
          .subscribe((res) => {
            this.getAll();
            this.ncftypeForm.reset();
            this.alertDone();
          });
      }
    });
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

  filterNcf() {
    const data = this.arrNcfs.filter(
      (x) => x.name == this.ncftypeForm.value.name
    );
    this.help = data[0].help;
    this.ncftypeForm.patchValue({ typedoc: data[0].type });
    this.ncftypeForm.patchValue({ prefix: data[0].prefix });
    this.ncftypeForm.patchValue({ inicial_num: data[0].inicial_num });
    this.ncftypeForm.patchValue({ final_num: data[0].inicial_num });
    this.ncftypeForm.patchValue({ current_num: data[0].inicial_num });
  }
  
}
