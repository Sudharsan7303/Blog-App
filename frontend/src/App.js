import './App.css';
import NavbarComp from './components/Navbar';
import Form from './components/Form';
import { useState,useEffect } from 'react';
import Postlist  from './components/PostList';


function App() {
  const [Posts,setposts]=useState([])
  const [editPost,setEditPost]=useState({})
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/posts/',{
      'method':'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Token 9874438387568b88de1b842331a0a808c9dad0df'

      }
    })
    .then(resp=>resp.json())
    .then(resp=>setposts(resp))
    .catch(error=>console.log(error))


  })
  const editbtn=(post)=>
  {
    setEditPost(post)

  }

  const deletebtn=(post)=>
    {
      const new_article = Posts.filter(myarticle => {
        if(myarticle.id === Posts.id){
          return false
        }
        
        return true
      })
      setposts(new_article)
  
    }

  const postForm=()=>{
    setEditPost({Title:'',Description:''}
    )

  }
  return (
    <div className="App">
      
      <NavbarComp/>
      
      <div>
        <button onClick={postForm} className='btn btn-primary my-3'>Create New Post</button>
      </div>
      <div>
        <h1 className='display-3'>All Posts</h1>
      </div>
      <Postlist Posts={Posts}  deletebtn={deletebtn} editbtn={editbtn}/>
      {editPost ? (<Form post={editPost}/>):null}
      
        
        

      
      
      
    </div>
  );
}

export default App;
