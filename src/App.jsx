import React, { Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Counter from "./Components/Counter";
import Menu from "./Components/SidebarMenu";
import HeaderIcon from "./Images/icon.png";
import './App.css';
import ReactDataGrid from "./Components/ReactDataGrid"

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
               <Tabs forceRenderTabPanel defaultIndex={0}>
                  <TabList>
                    <Tab defaultIndex={0}>Main</Tab>
                    <Tab defaultIndex={1}>Sub</Tab>
                  </TabList>
                 <TabPanel>
                  <Tabs forceRenderTabPanel defaultIndex={0}>
                    <TabList>
                      <Tab defaultIndex={0}>Home</Tab>
                      <Tab defaultIndex={1}>Demo</Tab>
                      <Tab defaultIndex={2}>Settings</Tab>       
                      <Tab defaultIndex={3}>Option</Tab> 
                    </TabList>
                    <TabPanel>
                       <div className="MainContent1">
                          <h1>MainContent</h1>
                          <Counter />   
                       </div>
                    </TabPanel>
                    <TabPanel>
                      <h1>Demo_Panel</h1> 
                      <div className='DataGrid'>
                        <ReactDataGrid/>                  
                      </div>                         
                    </TabPanel>  
                    <TabPanel>
                      <h1>Settings_Panel</h1>   
                      <div className='DataGrid'>
                        <ReactDataGrid/>       
                      </div>
                    </TabPanel>    
                    <TabPanel>
                      <h1>Option_Panel</h1>          
                    </TabPanel>  
                  </Tabs>  
                 </TabPanel>

                 <TabPanel>
                  <Tabs forceRenderTabPanel defaultIndex={0}>
                    <TabList>
                      <Tab defaultIndex={0}>Home</Tab>
                      <Tab defaultIndex={1}>Demo</Tab>
                      <Tab defaultIndex={2}>Settings</Tab>       
                      <Tab defaultIndex={3}>Option</Tab> 
                    </TabList>
                    <TabPanel>
                       <div className="MainContent1">
                          <h1>MainContent</h1>
                          <Counter />   
                       </div>
                    </TabPanel>
                    <TabPanel>
                      <h1>Demo_Panel</h1>          
                    </TabPanel>  
                    <TabPanel>
                      <h1>Settings_Panel</h1>          
                    </TabPanel>    
                    <TabPanel>
                      <h1>Option_Panel</h1>          
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
