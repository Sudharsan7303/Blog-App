export default class APISerive {
    static UpdateArticle(post_id,body,token){
        return fetch(`http://127.0.0.1:8000/posts/${post_id}/`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 9874438387568b88de1b842331a0a808c9dad0df'
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertArticle(body,token){
        return fetch(`http://127.0.0.1:8000/posts/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 9874438387568b88de1b842331a0a808c9dad0df'
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteArticle(post_id,token){
        return fetch(`http://127.0.0.1:8000/posts/${post_id}/`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 9874438387568b88de1b842331a0a808c9dad0df'
            }
            }
        )
    }


    static LoginUser(body){
        return fetch(`http://127.0.0.1:8000/auth/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }



    static RegisterUser(body){
        return fetch(`http://127.0.0.1:8000/users/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }    

    

}