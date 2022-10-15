import React, { Component} from 'react'
import Sidebar from "./Components/Sidebar";
import Counter from './Components/Counter';
import HeaderIcon from "./Images/icon.png";
import './App.css';

class App extends Component {
  render(){
    return(
      /*下記のように必ずComponentは1つの親タグで括ること。複数にするとエラーとなる */
      <div className="App">
        <body>
          <div className="header">
            <img src={HeaderIcon} />
            <h1>Portfolio Management</h1>

              <div className="toggle-btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div id="mask"></div>
          </div>

          <div className="main">
                  <div className="SideMenu">
                  <Sidebar />
                  </div>

            <div className="contents">
              <h1>コンテンツ内容</h1>
              <Counter />
            </div>
          </div>
          
          <div className="footer">
          </div>
        </body>
      </div>
    )
  }
}

export default App;
