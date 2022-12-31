import { Button, LinearProgress, Stack } from "@mui/material";
import { signInWithGoogle } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";

function Profile() {
    const navigate = useNavigate();
    const [name, setName]=  useState("Anonymous");
    const [email, setEmail]=  useState("Anonymous");
    const [pic, setPic]=  useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png");

useEffect(() => {
  const  a=localStorage.getItem('@userName');
  const b =localStorage.getItem('@userEmail');
  const c = localStorage.getItem('@userPic');

  if(a!== null){
setName(a);
}
if(a!== null){
setEmail(b);
}
if(c!== null){
setPic(a);
}
}
, [name,email, pic])


    return ( <FadeIn delay={1000}>
     
{ name==="Anonymous"
        &&
    <div className="mainWell gap-4">

      <Button 
      onClick={()=> {signInWithGoogle();  } }
      variant="contained">SignIn</Button>
      <Button 
      onClick={()=> {signInWithGoogle()}}
      variant="contained" color="secondary">
        With Google
      </Button>
      
</div>}


{
    name!=='Anonymous' &&
<div className="mainWell flex justify-center">

    <Stack direction="row" spacing={2}>
      <Button 
      onClick={()=> navigate('/NewArticle')}
      color="success" variant="contained">New Article</Button>
     
      <Button 
      onClick={()=> navigate('/NewEvent')}
      variant="contained" color="warning">
        New Event <i class="fas fa-cloud-rainbow    "></i>
      </Button>

      <Button 
      onClick={()=> navigate('/NewClub')}
      variant="contained" color="secondary">
        New Club
      </Button>
      
    </Stack>
</div>
}
        <section class="pt-1 bg-blueGray-50">
<div class="w-full lg:w-4/12 px-4 mx-auto">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <img 
            alt="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"
             src={pic} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
          </div>
        </div>
        <div class="w-full px-4 text-center mt-20">
          <div class="flex justify-center py-4 lg:pt-4 pt-8">
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
            0
              </span>
              <span class="text-sm text-blueGray-400">Article Posts</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                0
              </span>
              <span class="text-sm text-blueGray-400">Events Post</span>
            </div>
           
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          {name}
        </h3>
        <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          Yaoundé, Cameroon
        </div>
        <div class="mb-2 text-blueGray-600 mt-10">
          <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
         Level XX - Student
        </div>
        <div class="mb-2 text-blueGray-600">
          <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
          The ICT University
        </div>
      </div>
      <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
             lorem ipsum dolor sit ameit conseictur .
            </p>
            <a href="javascript:void(0);" class="font-normal text-pink-500">
              See more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer class="relative  pt-8 pb-6 mt-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Made by Polymaster/ The ICTU - Student Union 
        </div>
      </div>
    </div>
  </div>
</footer>
</section>

    </FadeIn> );
}

export default Profile;