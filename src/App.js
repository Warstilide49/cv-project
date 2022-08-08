import React, {Component} from 'react'
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer />
      </div>
    );
  }
}

export default App;
