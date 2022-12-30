import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import {  LinearProgress, Button } from "@mui/material";
import { BsDoorClosedFill, BsFillShareFill, BsWhatsapp } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
 //BsDoorClosedFill
function Club111() {
    const [club, setClub] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    async function getClub(n) {
        setLoading(true)
        try {
          const {data, error} = await supabase
          .from("clubs")
          .select("*")
          .eq("id", n)
         
    
          if(error) throw(error);
           if(data!=null){
            setClub(data[0]);
            
           }
           console.log("selected is" + JSON.stringify(club));
           setLoading(false);
    
        } catch (error) {
          console.log(error);
        }
         
      }
    
  

useEffect(() => {
    const id = JSON.stringify(window.location.pathname).match(/\d+/);
    //alert(iid);

    if (id !==null){
        getClub(id);
    }

 
}, [])



    return ( 
        
    <div className="mainWell"
    >
            { loading &&  <LinearProgress color="primary" />}
            <FadeIn
        delay={850}>
      <div className="text-2xl font-semibold my-2"> {club.name}</div>
      <img src={club.imgPath} className="my-2 "></img>
    <div className='text-lg font-normal' dangerouslySetInnerHTML={{ __html: club.content }} />
  
    <div className="flex flex-row justify-center gap-8 my-4">
      <Button 
      onClick={() =>navigate('/Clubs')}
      color="warning" variant="contained" startIcon={<BsDoorClosedFill />} >Go back</Button>
      <Button color="secondary" variant="contained" startIcon={<BsFillShareFill  />}>Share</Button>
      <Button 
      onClick={()=>window.open(club.joinLink)}
      color="success" variant="contained" startIcon={<BsWhatsapp  />}>Join</Button>

    </div>
    </FadeIn>
    </div>
     

    );
}

export default Club111;