import React, { Component } from 'react';
import { supabase } from '../supabase';
import { Link } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import Button from '@mui/joy/Button';


export default class Events extends Component {
    state = {
        events: [],
        name:"",
        content:"",
        imgPath:"",
        date:"",
        time:"",
        loading:false,

      } 

      getEvents = async()=>{
        this.setState({loading:true});
        try {
          const { data, error } = await supabase
          .from('events')
          .select('*');
          this.setState({events: data});
          console.log(JSON.stringify(this.state.events));
          this.setState({loading:false});
  
          throw error; 
        } catch (error) {
          console.log(error);
        }
      
        
      }
  
     componentDidMount(){
      console.log("componet mounted")
        this.getEvents();
     }
     componentDidUpdate(pp,ps,ss){
      if(ps.events !== this.state.events){
        console.log("articles updated");
       console.log(JSON.stringify(this.state.articles));
  
      }
      }


    render() { 
        const sortedEvents = this.state.events.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.date) - new Date(b.date);
          });
        return (
<div>
<div className='bg-indigo-100 lg:bg-indigo-100
 text-indigo-800 
 font-bold text-2xl 
 mb-4
 py-5 justify-center flex
 shadow-lg '>
 Upcoming Events:
</div>

<div className='ml-8 mr-8 '>
{this.state.loading&&  <LinearProgress color="primary" />}
<ol class="border-l-2 border-emerald-600">
{
 sortedEvents.map((event) => 

  <li>
    <div class="md:flex flex-start">
      <div class="bg-emerald-600 w-9 h-9 flex items-center justify-center rounded-full -ml-3">
        <svg aria-hidden="true" focusable="false"
        data-prefix="fas" class="text-white w-5 h-5 " role="img" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 448 512">
          <path fill="currentColor" 
          d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
      </div>
      <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
        <div class="flex justify-between mb-4">
          <a href="#!" className="font-semibold
           text-large text-indigo-600
            hover:text-indigo-700
             focus:text-orange-800
              duration-300 transition ease-in-out
               text-xl">{event.name}</a>
       
        <span class="text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-emerald-600 text-white rounded">{event.date}</span>
       
        </div>
<img src={event.imgPath}></img>

<Link to={`/events/${event.id}`}>
        <button type="button" 
        className='mt-4 btnPart'
         data-mdb-ripple="true">Take Part</button></Link>
      </div>
    </div>
  </li>
)

}
</ol>
</div>


</div>


        );
    }
}
 
