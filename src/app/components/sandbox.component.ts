import { Component } from '@angular/core';

@Component({ //component decorator
    selector:'sandbox',
    template:`
    <h1>{{ name }} is {{ age }} years old</h1>
    <h2>My name is {{ person.firstName }} {{ person.lastName }}</h2>
    <ul>
        <li>{{ 'Hello World' }}</li>
        <li>{{ 2+2 }}</li>
        <li>{{ showAge() }}</li>
    </ul>
    ` //{{  }} = string interpolation
})

export class SandboxComponent{
// property
    name = 'Amit Mandal'; //string
    age = 25; //number
    person = {firstName:'Sundar', lastName:'Pichai'}; //object

    constructor(){
        console.log('Constr.. ran');
        // this.age = 36;
        this.hasBirthday();
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}