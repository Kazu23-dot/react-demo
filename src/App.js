import React, { Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sidebar from "./Components/SidebarMenu";
import Counter from "./Components/Counter";
import Menu from "./Components/SidebarMenu";
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
              <div id="mask"></div>
          </div>

          <div className="main">
            <div className="SideMenu">
              <Menu width={250}/>
            </div>

            <div className="contents">
               <Tabs forceRenderTabPanel defaultIndex={1}>
                 <TabList>
                  <Tab>MainTab</Tab>
                   <Tab>SubTab</Tab>
                 </TabList>
                 <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      <Tab>Home</Tab>
                      <Tab>Settings</Tab>       
                      <Tab>Option</Tab> 
                    </TabList>
                    <TabPanel>
                       <div className="MainContent1">
                          <h1>MainContent</h1>
                          <Counter />   
                       </div>
                    </TabPanel>
                    <TabPanel>
                      <h1>Settings_Panel</h1>          
                    </TabPanel>    
                    <TabPanel>
                      <h1>Option_Panel</h1>          
                    </TabPanel>  
                  </Tabs>  
                 </TabPanel>

                 <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      <Tab>Home</Tab>
                      <Tab>Settings</Tab>       
                      <Tab>Option</Tab> 
                    </TabList>
                    <TabPanel>
                       <h1>SubContent</h1>
                       <Counter />          
                    </TabPanel>
                    <TabPanel>
                      <h1>Sub-Settings_Panel</h1>          
                    </TabPanel>    
                    <TabPanel>
                      <h1>Sub-Option_Panel</h1>          
                    </TabPanel>  
                  </Tabs>  
                 </TabPanel>         
               </Tabs>
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
