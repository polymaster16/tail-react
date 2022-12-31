import React, { Component, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { BsCameraFill, BsFillCloudUploadFill } from 'react-icons/bs';
import { supabase } from '../supabase';
import { Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Navigate, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import FadeIn from 'react-fade-in/lib/FadeIn';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

function NewEvent () {
  const [progress, setProgress] = React.useState(0);
  const [editorState, setEditorState]= React.useState(EditorState.createEmpty());
  const [imgUrl, setImgUrl]= React.useState("");
  const [title, setTitle]= React.useState("");
  const [date, setDate]= React.useState("");

  const [loading, setLoading]= React.useState(false);
  const [loading2, setLoading2]= React.useState(false);


  const [time, setTime]= React.useState("");
    const val = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const navigate = useNavigate();

       const uploadImage=async(y)=>{
        const imgRef = ref(storage, `images/${new Date()}${y.name}`);
        setLoading(true);
        await uploadBytes(imgRef, y)
        .then(() => {
          console.log('image uploaded');
          getDownloadURL(imgRef)
          .then((url) => {console.log(url); setImgUrl(url); setLoading(false);})
          .catch((e) => {console.log(e)});
        
        })
        .catch((e) => {console.log(e)});
      

        /*
           const formData = new FormData();
           formData.append("file",x[0]);
           formData.append("upload_presets", "goly0dnw");

           Axios.post("http://api.cloudinary.com/v1_1/dmabxcslq/images/upload", formData)
           .then((res) => {alert(res)})
           .catch((err) => {alert(err)})*/

         }
         const createEvent= async ()=>{
          setLoading2(true)
               try {
                const { error } = await supabase
                .from('events')
                .insert({
                  name: title,    
               content: val ,
               date:date,
               time: time,
              imgPath: imgUrl,
               
            });
            setLoading2(false)

              alert("article posted successfully");
              navigate('/Events')

               throw error;
               } catch (error) {
                console.log(error);
               }
                
             
         }

         React.useEffect(() => {
          setImgUrl(imgUrl);
        }, [imgUrl]);

      //This keyboard works fine, i really enjoy it     
     //<div className='text-lg font-normal' dangerouslySetInnerHTML={{ __html: val }} />

     
        return (
          <FadeIn
delay={200}>
            <div  className="mainWell">
<FadeIn
delay={800}>
              <div className='text-indigo-800 text-3xl font-bold flex justify-center mb-5'> New Event</div>
           <div className='ml-4 mr-4  '>
              <TextField onChange={(e)=> setTitle(e.target.value)}
              fullWidth label="Event Title" color="warning"  />
            </div>


            <div className='ml-4 mr-4 my-4 '>
            <div className='font-semibold text-sm mb-2 text-indigo-800 '>Select date</div>
            <DatePicker selected={date} onChange={(date) => {setDate(date); alert(date)}} />
            </div>
          
            <div className='ml-4 mr-4 my-4 '>
            <div className='font-semibold text-sm mb-2 text-indigo-800 '>Select Time</div>

      <TimePicker onChange={(x)=>setTime(x)} value={time} />
    </div>
        

                <div className='ml-4 mr-4 mt-5 '>
                
                <input className='ml-4 mr-4 mb-4 text-sm text-gray-800 '
                 type="file"
                 onChange={(e)=> { //then, upload the image
                  uploadImage(e.target.files[0]);
                    }}/>

            {loading && <LinearProgress color="warning" />}
              
            <div className='text-2xl text-indigo-800 font-semibold mt-4 '>Content:
           </div>

<div className= 'bg-indigo-100 border-2 border-slate-600 mt-4 text-lg font-normal '>
<Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
      /> </div>
          
            <div className='mt-4 flex justify-center'>
          <Button
                onClick={()=>createEvent()}
                size="medium"
                variant='contained'
                  color="success"
                   startIcon={<BsFillCloudUploadFill/>}
                   endIcon={loading2 && <CircularProgress color="warning"  size={24}/>}>
                    Submit</Button> 
    </div>
  
                </div>
                </FadeIn></div>
                </FadeIn>
        );
    }

 
export default NewEvent;