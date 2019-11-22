import React, { Component } from 'react';

import './App.css';
import NavBar from './components/NavBar'
import axios from 'axios';



class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      cryptos:[]
    };
  
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/cards/general&api_key=27b1a1f7beb00b91dc5cae2ad07443ac511c7685e0adc98f0cc3907f0f43e4da')
    .then(res=>{
      const cryptos = res.data;
      
      this.setState({cryptos:cryptos});
    })
  }


  render()
  {
    console.log(this.state.cryptos.Data);
    
      
    return(
<div className="App">
<NavBar/>
{ Object.keys(this.state.cryptos.Data).map((key) =>(
        <div className="container">
        <span>{key}</span>
        <span>{this.state.cryptos[key].Name}</span>
          </div>
      ))}
   </div>
  );

  }
}

export default App;
