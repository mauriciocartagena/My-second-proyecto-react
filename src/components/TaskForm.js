import React,{Component} from "react";

export default class TaskForm extends Component{

    state ={
        title:'',
        description:''
    }
    onSumit = e =>{
console.log(this.state)
        this.props.addTask(this.state.title,this.state.description);
        e.preventDefault();
    }
    onChange=e=>{
       this.setState({
           [e.target.name] : e.target.value
       })
    }

    render() {
        return(
            <form onSubmit={this.onSumit}>
                <input type="text" name="title" placeholder="Write a Task" onChange={this.onChange} value={this.state.title}/>
                <br/>
                <br/>
                <textarea placeholder="Write a Description" name="description" onChange={this.onChange} value={this.state.description}></textarea>
               <button type="submit">
                   Save Task
               </button>
            </form>
        )
    }

}