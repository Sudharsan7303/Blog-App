import React from 'react'
import APISerive from './APIService'


const Postlist = (props) => {
    const editbtn=(post)=>{
        props.editbtn(post)
    }

    const deletebtn=(post)=>{
        APISerive.DeleteArticle(post.id,)
        .then(()=> props.deletebtn(post))
        .catch(error => console.log(error))
    }


  return (
    <div>
        {props.Posts && props.Posts.map(post=>
        {
        return(
        <div class="card">
            
            <div class="card-body">
                <h5 class="card-title">{post.Title}</h5>
                <p class="card-text">{post.Description}</p>
                <a  className="btn btn-primary mx-3" onClick={()=>editbtn(post)}>Update</a>
                <a  className="btn btn-danger mx-3" onClick={()=>deletebtn(post)}>Delete</a>

                
            </div>
        </div>

    )})}
        

    </div>

    
  )
}

export default Postlist