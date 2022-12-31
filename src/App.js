import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import TopBar from './components/TopBar';
import Clubs from './Pages/Clubs';
import Events from './Pages/Events';
import './Styles/animatedBG.css'
import NewArticlePost from './Pages/ArticlePost';
import EditorConvertToHTML from './Pages/Playground';
import Article from './Pages/Article';
import Club111 from './Pages/Club111';
import NewClub from './Pages/ClubPost';
import Event111 from './Pages/Event111';
import NewEvent from './Pages/EventPost';
import Profile from './Pages/Profile';



function App() {
  return (
    <BrowserRouter>
    <TopBar/>
 


<div className='layer im1'>
    <Routes>

    <Route path='/' element={<Welcome/>}/>

    <Route path='Clubs' element={<Clubs/>}/>
    <Route path='NewClub' element={<NewClub/>}/>
    <Route path='clubs/:id' element={<Club111/>}/>

    <Route path='Events' element={<Events/>}/>
    <Route path='events/:id' element={<Event111/>}/>
    <Route path='NewEvent' element={<NewEvent/>}/>

    <Route path='NewArticle' element={<NewArticlePost/>}/>
    <Route path='articles/:id' element={<Article/>}/>
    
    <Route path='Profile' element={<Profile/>}/>
    <Route path='play' element={<EditorConvertToHTML/>}/>



    
    </Routes>
    </div>

   


    </BrowserRouter>
  );
}

export default App;
