import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class LocalStorage {

    getItemCases: object;
    cases: object;
    myForm : FormGroup;
    getItem : FormGroup;
    setItem : FormGroup;
    key: string;
    

    constructor(private http: HttpClient){
    
        // From create
        this.myForm = new FormGroup({
            
          name: new FormControl("", Validators.required),
          case: new FormControl("", Validators.required),       
        });

        this.getItem = new FormGroup({   
            key: new FormControl("", Validators.required),     
        });

        this.setItem = new FormGroup({   
            key: new FormControl("", Validators.required),
            value: new FormControl("", Validators.required),     
        });

        this.getItemCases = JSON.parse(localStorage.getItem('Cases'));

        if ((this.getItemCases === undefined) || (this.getItemCases === null)) {
            this.cases = {}
        } else {
            this.cases = this.getItemCases;
        }
        
    }

    //For submit
    collisionCheck() {
        if (`${this.myForm.value.name}` in this.cases !== true) {
      
            this.cases[`${this.myForm.value.name}`] = `${this.myForm.value.case}`
            localStorage.setItem('Cases', JSON.stringify(this.cases));
        } else {
            alert('Такая цель уже записана!');
        }
    }


    /* 
    Сделать 3 метода
    setItemByKey
    getItemByKey
    getAllOfItems
    */

    getItemByKey(key) {
        const map = new Map(Object.entries(this.cases))
        return map.get(key)
        
    }

    setItemByKey(key, value) {
        this.cases[key] = value;
        localStorage.removeItem("Cases");
        localStorage.setItem("Cases", JSON.stringify(this.cases))
    }

    getAllOfItems() {
        this.cases
      }
}