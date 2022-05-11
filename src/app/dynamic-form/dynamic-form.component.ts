import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() drugsFormData!: any[]; 
  @Output() myOutput:EventEmitter<any>= new EventEmitter(); 
  dForm!:FormGroup;
  constructor(public fb: FormBuilder) { }
   
  ngOnInit(): void { 
    this.createForm();
  }
  
  ngOnChanges(){
    this.createForm()
  }

  createForm(){
    this.dForm = this.fb.group({});
    Array.from(this.drugsFormData).forEach(element => {
      this.dForm.addControl(element.key, new FormControl('',this.getValidator(element.isRequired)));
    });
  }

  private getValidator(formField: any): ValidatorFn | null {
    switch(formField) {
      case true:
        return Validators.required;
      default:
        return null;
    }
  }
  
  onSubmit(){
     if(this.dForm.invalid) return
     this.myOutput.emit(this.dForm.value);
  }
}
