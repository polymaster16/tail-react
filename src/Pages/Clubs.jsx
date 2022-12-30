import React, { Component } from 'react';
import { supabase } from '../supabase';
import { Link } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import Button from '@mui/joy/Button';


export default class Clubs extends Component {
    state = {
        clubs: [],
        name:"",
        description:"",
        content:"",
        joinLink:"",
        imgPath:"",
        loading:false,

      } 

      getClubs = async()=>{
        this.setState({loading:true});
        try {
          const { data, error } = await supabase
          .from('clubs')
          .select('*');
          this.setState({clubs: data});
          console.log(JSON.stringify(this.state.clubs));
          this.setState({loading:false});
  
          throw error; 
        } catch (error) {
          console.log(error);
        }
      
        
      }
  
     componentDidMount(){
      console.log("componet mounted")
        this.getClubs();
     }
     componentDidUpdate(pp,ps,ss){
      if(ps.articles !== this.state.articles){
        console.log("articles updated");
       console.log(JSON.stringify(this.state.articles));
  
      }
      }


    render() { 
        return (
<div>
<div className='bg-green-100 lg:bg-red-100
 text-gray-800 
 font-bold text-3xl 
 py-5 justify-center flex
 shadow-lg rounded-3xl'>
 Clubs:
</div>


<div   className="mainArts mt-4">
  {this.state.loading&&  <LinearProgress color="primary" />}

  {this.state.clubs.map((club) => {return (
    
  <div class="max-w-sm rounded overflow-hidden 
  bg-blue-50
  shadow-lg hover:bg-blue-100 focus:bg-green-100"
>
<Link to={`/clubs/${club.id}`}>
  <img class="w-full" src= {club.imgPath} alt=""/>
  </Link>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{club.name}</div>
    <p class="text-gray-700 text-base">
        {club.description} 
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button className='btnJoin'
    onClick={()=>window.open(club.joinLink)}> Join Now</button>
  </div>
</div>

  )})}
</div>


</div>


        );
    }
}
 
