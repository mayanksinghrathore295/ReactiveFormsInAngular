import { NgIf } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent implements OnInit {
  regForm!: FormGroup;
  constructor(private _fb:FormBuilder){}
  ngOnInit(){
    // this.regForm=new FormGroup({
    //   id:new FormControl(),
    //   fname:new FormControl(),
    //   lname:new FormControl(),
    //   email:new FormControl(),
    //   mobileNo:new FormControl()
    // })
    // this.regForm=this._fb.group({
    //   id:new FormControl(),
    //   fname:new FormControl(),
    //   lname:new FormControl(),
    //   email:new FormControl(),
    //   mobileNo:new FormControl()
    // })
    this.regForm=this._fb.group({
      id:[],
      fname:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
      lname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mobileNo:['',Validators.required]
    })
  }
  register(){
    console.log(this.regForm.value);
    console.log(this.regForm.valid)

    console.log(this.regForm.get('fname')?.value)

    
  }
  reset(){
    this.regForm.reset({
      fname: this.regForm.get('fname')?.value
    })
    this.regForm?.valueChanges.subscribe(formdata=>{
      console.log("fnamevalue : "+formdata.fname);
    })
    
  }
  // filldata(){
  //   this.regForm.setValue({ //or we can do patch value
  //     id:101,
  //     fname:this.regForm.get('fname')?.value,
  //     lname:this.regForm.get('lname')?.value,
  //     email:this.regForm.get('email')?.value,
  //     mobileNo:this.regForm.get('mobileNo')?.value,
  //   })
  }
  
 


