import { Customer } from './Customer';
import { Component } from '@angular/core';

@Component({ //component decorator
    selector:'sandbox',
    template:`<h1>Hello World</h1>`
})

export class SandboxComponent{
// property
    customer:Customer;
    customers:Customer[];

    constructor(){
        this.customer = {
            id:1,
            name:'Amit Mandal',
            email:'amit@gmail.com'
        }

        this.customers = [
            {
                id:1,
                name:'Amit Mandal',
                email:'amit@gmail.com'
            },
            {
                id:2,
                name:'Priyank Verma',
                email:'priyank@gmail.com'
            },
            {
                id:3,
                name:'Ravi Seth',
                email:'ravi@gmail.com'
            }
        ]
    }
   
}

