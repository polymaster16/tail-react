import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import {  LinearProgress, Button } from "@mui/material";
import { BsDoorClosedFill, BsFillShareFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
 //BsDoorClosedFill
function Event111() {
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    async function getEvent(n) {
        setLoading(true)
        try {
          const {data, error} = await supabase
          .from("events")
          .select("*")
          .eq("id", n)
         
    
          if(error) throw(error);
           if(data!=null){
            setEvent(data[0]);
            
           }
           console.log("selected is" + JSON.stringify(event));
           setLoading(false);
    
        } catch (error) {
          console.log(error);
        }
         
      }
    
  

useEffect(() => {
    const id = JSON.stringify(window.location.pathname).match(/\d+/);
    //alert(iid);

    if (id !==null){
        getEvent(id);
    }

 
}, [])



    return ( 
        
    <div className="mainWell"
    >
            { loading &&  <LinearProgress color="primary" />}
            <FadeIn
        delay={850}>
      <div className="text-2xl font-semibold my-2"> {event.name}</div>
      <img src={event.imgPath} className="my-2 " alt=""></img>
        
  <div className="flex flex-row justify-center gap-4">  
    <span class="inline-block bg-gray-200 
      rounded-full px-3 py-2 text-sm font-semibold
       text-gray-700 mr-2 mb-2">Day: {event.date}</span>
 <span class="inline-block bg-gray-200 
      rounded-full px-3 py-2 text-sm font-semibold
       text-gray-700 mr-2 mb-2">Time: {event.time}</span>
       </div>
    
    <div className='text-lg font-normal' dangerouslySetInnerHTML={{ __html: event.content }} />

       <button className="btnPart mt-4">Register Now</button>

   
    <div className="flex flex-row justify-center gap-8 my-4">
      <Button 
      onClick={() =>navigate('/Events')}
      color="warning" variant="contained" startIcon={<BsDoorClosedFill />} >Go back</Button>
      <Button color="secondary" variant="contained" startIcon={<BsFillShareFill  />}>Share</Button>
      
    </div>

    </FadeIn>
    </div>
     

    );
}

export default Event111;