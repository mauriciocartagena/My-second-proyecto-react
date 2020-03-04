import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';
import tasks from './sample/task.json';
//Aqui estamos importando los Componentes
import Tasks from './components/Tasks'
import  TaskFrom from './components/TaskForm';
import Posts from "./components/Posts";
console.log(tasks);

//esto es el objeto principal
class App extends Component {
    state={
        tasks:tasks
    }

    addTask=(title,description)=>{
        const newTask={
            title:title,
            description:description,
            id:this.state.tasks.length
        }
       this.setState({
           tasks:[...this.state.tasks,newTask]
       })
    }
    deleteTask=(id)=>{
        const newTask = this.state.tasks.filter(tasks=>tasks.id!==id);
        this.setState({tasks:newTask});
    }
    checkDone=(id)=>{
        const newTasks= this.state.tasks.map(tasks=>{
            if (tasks.id===id){
                tasks.Done= !tasks.Done
            }{
                return tasks;
            }
        });
        this.setState({tasks:newTasks});

    }

     render(){
         return(
             <div>
                <Router>
                    <Link to="/">Home</Link>
                    <br/>
                    <Link to="/posts">View Post</Link>

                    <Route exact path="/" render={()=>{
                        return <div>
                                <TaskFrom  addTask={this.addTask}/>
                                    <Tasks
                                        tasks={this.state.tasks}
                                        deleteTask={this.deleteTask}
                                        checkDone={this.checkDone}>
                                    </Tasks>
                            </div>
                        }}>
                    </Route>
                    <Route path="/posts" component={Posts}/>
                </Router>
             </div>
         )
     }
}

export default App;
