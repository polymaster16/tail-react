import React, { Component } from 'react';
import hello from '../SVGs/waving-287.gif';
import FadeIn from "react-fade-in/lib/FadeIn";
import { supabase } from '../supabase';
import { Link } from "react-router-dom";
import { LinearProgress } from '@mui/material';

//<div dangerouslySetInnerHTML={{ __html: val }} />
/* 
<div className='mainWell' >
Welcome to the SUG Platforms baby

<img src={hello} alt="Loading"></img>

<button className='button1' onClick={()=>this.setState({clicked:!this.state.clicked})}>Start</button>
</div>
*/

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

<div class="container mb-2 px-6 mx-auto">

  <div class="mb-10 ">
    

    <div class="px-6 py-12 md:px-12 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" >Welcome to <br /><span >The SUG Platforms</span></h1>
            <Link class="inline-block px-7 py-3 mr-2
             bg-gray-200 text-gray-700 
             font-medium text-sm leading-snug
              uppercase rounded shadow-md
               hover:bg-gray-300 hover:shadow-lg
                focus:bg-gray-300 focus:shadow-lg 
                focus:outline-none focus:ring-0 active:bg-gray-400 
                active:shadow-lg transition duration-150 ease-in-out"
                 data-mdb-ripple="true" data-mdb-ripple-color="light" 
                 to={"/Profile"} role="button">Get started</Link>
            <a class="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
          </div>
          <div class="mb-12 lg:mb-0">
            <img
              src={hello}
              class="w-full rounded-lg bg-emerald-100 shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>


</div>




<div   className="text-3xl font-bold ml-8 mb-2"> Blog: </div>
<div   className="mainArts mt-4">
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