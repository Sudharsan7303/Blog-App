import React,{useState,useEffect} from 'react'
import APISerive from './APIService'

const Form = (props) => {
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')

    useEffect(()=>{
        setTitle(props.post.Title)
        setDescription(props.post.Description)

    }, [props.post])

    const updateArticle = ()=>{
        APISerive.UpdateArticle(props.post.id, {Title,Description})
        .then(resp => console.log(resp))
        
    }

    const insertArticle = ()=>{
        APISerive.InsertArticle({Title,Description})
        .then(resp => console.log(resp))
        setTitle('')
        setDescription('')
    }

  return (
    <div>
        {props.post ? (
            
            <div>
                <h1 className='display-3'>Create Your New Post Here</h1>
            <div>
        <div >
            <div className="form-group">
                <label htmlFor="title">Title</label>
            <input type="text" value={Title} className="form-control" placeholder="Enter Post Title" onChange ={e=> setTitle(e.target.value)}/>
            </div>
        </div>

        <div >
            <div className="form-group">
                <label htmlFor="description">Description</label>
            <textarea type="text" value={Description} className="form-control" placeholder="Enter Post Description" rows="3" onChange ={e=> setDescription(e.target.value)}/>
            </div>
        </div>

        <br />
        {props.post.id ? 
        <button onClick ={updateArticle} className="btn btn-success">Update</button>
        :
        <button onClick ={insertArticle} className="btn btn-primary">Post</button>
        }
        </div>


        </div>) : null}
    </div>
        
  )
}

export default Form