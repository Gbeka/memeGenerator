import React, {Component} from "react"
import Header from "./components/header";
import MemeGenerator from "./components/memeGenerator";

class App extends Component {
  render(){
    return(
      <div>
      <Header />
      <MemeGenerator/>
      </div>
    )
  }
}


export default App;
