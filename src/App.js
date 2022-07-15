import React, {Component} from 'react'
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
