import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent  implements OnInit {

  @Input() message!: string;
  @Input() field!: AbstractControl<any,any> | null;
  @Input() error!: string;
  
  constructor() { 
    this.message = '';
    this.error = '';
  }

  ngOnInit() {}

  shouldShowComponent(){
    // *ngIf="form.get('email')?.touched && form.get('email')?.errors?.['required']
    
    if(this.field?.touched && this.field.errors?.[this.error]){
      return true;
    }
    return false;
  }

}
