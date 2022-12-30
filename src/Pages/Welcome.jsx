import React, { Component } from 'react';
import hello from '../SVGs/waving-287.gif';
import FadeIn from "react-fade-in/lib/FadeIn";
import { supabase } from '../supabase';
import { Link } from "react-router-dom";
import { LinearProgress } from '@mui/material';
//<div dangerouslySetInnerHTML={{ __html: val }} />


class Welcome extends Component {
    constructor(){
        super();

        this.state = {
            name:"Database notloaded",
            content: "We may be facing maintenance issues, come back in few hours, ",
            img: "https://kinsta.com/wp-content/uploads/2021/05/there-has-been-a-critical-error-on-this-website-featured-image-1200x675.jpeg",
            articles: [{name:"Article1", text:"this is text of Article1"},{name:"Article2", text:"this is text of Article2"}],  
            clicked: false,
            loading:false,
          }
    }
     getArticles = async()=>{
      this.setState({loading:true});
      try {
        const { data, error } = await supabase
        .from('articles')
        .select('*');
        this.setState({articles: data});
        console.log(JSON.stringify(this.state.articles));
        this.setState({loading:false});

        throw error; 
      } catch (error) {
        console.log(error);
      }
    
      
    }

   componentDidMount(){
    console.log("componet mounted")
      this.getArticles();
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
<FadeIn
delay={1200}>
<div className='mainWell' >
Welcome to the SUG Platforms baby

<img src={hello} alt="Loading"></img>

<button className='button1' onClick={()=>this.setState({clicked:!this.state.clicked})}>Start</button>
</div>

<div   className="mainArts mt-4">
<div   className="text-4xl mb-2"> Blog: </div>
  {this.state.loading&&  <LinearProgress color="primary" />}

  {this.state.articles.map((article) => {return (
    <Link to={`/articles/${article.id}`}>
  <div class="max-w-sm rounded overflow-hidden 
  bg-blue-50
  shadow-lg hover:bg-blue-100 focus:bg-green-100"
>
  <img class="w-full" src= {article.imgPath} alt=""/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{article.title}</div>
    <p class="text-gray-700 text-base">
        {article.description} 
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">{article.created_at}</span>
   
  </div>
</div>
</Link>
  )})}
</div>

</FadeIn>
</div>


        );
    }
}
 
export default Welcome;