import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyectoForms';
  form!: FormGroup;
  fb: FormBuilder = new FormBuilder();
  constructor(){
    alert("El usuario es Edgar pass 12345678")
  }
  ngOnInit(){
    this.form = this.fb.group({
      "name": ['', Validators.required],
      "pass": ['', [Validators.required,Validators.minLength(8)]]
  });
  }
  verFrom(){
    if(this.form.value.name=="Edgar" && this.form.value.pass==12345678){
      alert("Bienvenidos Equipo Coder")
      this.form.reset()
    }
  }
}
