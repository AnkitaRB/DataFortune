import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    state:'',
    email: '',
    confirmEmail: '',
    subscribe: true
  };

  registerStages=[{id: 1, stage: 'REGISTER'},{id:2, stage: 'SUBMIT INFO'},{id:3, stage: 'COMPLETE'}]

  states=['Andhra Pradesh','Karnataka','Telangana','Maharashtra'];
  submitClicked=false;
  isFormSubmitSuccess=false;
  statusText = "CONTACT INFORMATION";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData: any){
    this.submitClicked = true;
    if(formData.valid){
      this.isFormSubmitSuccess = true;
      this.statusText = "COMPLETE";
      console.log(formData.value);
    }
  }
}
