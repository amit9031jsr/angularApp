import { Component } from '@angular/core';

@Component({ //component decorator
    selector:'sandbox',
    template:`
        <h1>Hello World</h1>
        <!--
        3 ways to bind properties
        <div><img src="{{ imgUrl }}"></div>
        <div><img [src]="imgUrl"></div>
        <div><img bind-src="imgUrl"></div>

        <h4>Image Location: <span [textContent]="imgUrl"></span></h4>
        -->

        <hr>
        <h2>Create Post</h2>
        <p [hidden]="isUnchanged">Post has been changed, please save</p>
        <button [disabled]="isUnchanged">Save</button>
    `
})

export class SandboxComponent{
// property
    imgUrl:string = 'http://lorempixel.com/400/200';
    isUnchanged:boolean = true;
}

