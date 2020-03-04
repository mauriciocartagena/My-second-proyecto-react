import React from 'react';
import './App.css';

// function HelloWorld(props) {
//     return(
//         <div id="hello">
//             <h3>{props.subtitle}</h3>
//             {props.mytext}
//         </div>
//     )
// }

class  HelloWorld extends  React.Component{
    state={
        show:true
    }
    toogleShow=()=>{
        this.setState({show:!this.state.show})
    }

    render(){
          if (this.state.show){
              return(
                  <div id="hello">
                      <h3>{this.props.subtitle}</h3>
                      {this.props.mytext}
                      <button onClick={this.toogleShow}>Toggle Show</button>
                  </div>
              )
          }else{
              return(
                  <h1>
                      Thre are not element
                      <button onClick={this.toogleShow}>
                          Toggle Show
                      </button>
                  </h1>


              )
          }
    };
}
// Lo de abajo es otra manera de devolver como una funcion pero al final es lo mismo
// const App = ()=> <div>This is my component :<HelloWorld/> </div>
// class  App extends React.Component{
//     render() {
//         return <div>
//             this is my component :<HelloWorld/>
//         </div>
//     }
// }
function App() {
  return (
    <div className="App">
        this is my component:
        <HelloWorld mytext="Hello Fazt " subtitle="loremp Ispun"/>
        <HelloWorld mytext="Esto es la siguiente" subtitle="loremp Ispun 2"/>
        <HelloWorld mytext="Hola!!!!.........." subtitle="loremp Ispun 3"/>
    </div>
  );
}

export default App;
