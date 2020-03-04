import React,{Component} from 'react';
export default class Posts extends Component {

    state={
        post:[]
    }
    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data= await res.json();
        console.log(data);
        this.setState({post:data})
    }

    render(){
        return(
            <div>
                <h1>
                    Posts
                    {
                        this.state.post.map(post=>{
                            return(
                                <div key={post.id}>
                                    <h1>{post.title}</h1>
                                    <p>{post.body}</p>
                                </div>
                            )
                        })
                    }
                </h1>
            </div>
        )
    }
}