import React, { Component } from 'react';



export default class About extends Component {
    state = {
        name:"About Us",

      } 


    render() { 
        return (
<div>
<h1>Name: {this.state.name}</h1>
<div className='bg-emerald-200 text-gray-800 font-bold font-2xl py-5 justify-center flex'>
 About Us
</div>


</div>


        );
    }
}
 
