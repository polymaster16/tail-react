import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import {  LinearProgress, Button } from "@mui/material";
import { BsDoorClosedFill, BsFillShareFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
 //BsDoorClosedFill
function Article() {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    async function getArticle(n) {
        setLoading(true)
        try {
          const {data, error} = await supabase
          .from("articles")
          .select("*")
          .eq("id", n)
         
    
          if(error) throw(error);
           if(data!=null){
            setArticle(data[0]);
            
           }
           console.log("selected is" + JSON.stringify(article));
           setLoading(false);
    
        } catch (error) {
          console.log(error);
        }
         
      }
    
  

useEffect(() => {
    const id = JSON.stringify(window.location.pathname).match(/\d+/);
    //alert(iid);

    if (id !==null){
        getArticle(id);
    }

 
}, [])



    return ( 
        
    <div className="mainWell"
    >
            { loading &&  <LinearProgress color="primary" />}
            <FadeIn
        delay={850}>
      <div className="text-2xl font-semibold my-2"> {article.title}</div>
      <img src={article.imgPath} className="my-2 "></img>
    <div className='text-lg font-normal' dangerouslySetInnerHTML={{ __html: article.content }} />
  
    <div className="flex flex-row justify-center gap-8 my-4">
      <Button 
      onClick={() =>navigate('/')}
      color="warning" variant="contained" startIcon={<BsDoorClosedFill />} >Go back</Button>
      <Button color="secondary" variant="contained" startIcon={<BsFillShareFill  />}>Share</Button>
      
    </div>
    </FadeIn>
    </div>
     

    );
}

export default Article;