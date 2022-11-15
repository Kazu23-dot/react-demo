import React, { Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Counter from "./Components/Counter";
import {CssModules,ColoredMessage} from "./Components/CssModules";
import Menu from "./Components/SidebarMenu";
import HeaderIcon from "./Images/icon.png";
import './App.css';
import ReactDataGrid from "./Components/ReactDataGrid";
import {Loading} from "./Components/LoaderSpinner";
import {ReactModal} from "./Components/ReactModal";
import {ReactAxios} from "./Components/ReactAxios";
import ReactGridLayout from "./Components/ReactGridLayout";

class App extends Component {

  render(){
    return(     
      /*下記のように必ずComponentは1つの親タグで括ること。複数にするとエラーとなる */
      <div className="App">
        <body>

          <div className="header">
            <img src={HeaderIcon} />
            <h1>React-Demo</h1>
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
                    <Tab defaultIndex={1}>Demo</Tab>
                  </TabList>
                 <TabPanel>
                  <Tabs forceRenderTabPanel defaultIndex={0}>
                    <TabList>
                      <Tab defaultIndex={0}>Home</Tab>
                      <Tab defaultIndex={1}>ReactDataGrid</Tab>
                      <Tab defaultIndex={2}>ReactModal</Tab>       
                      <Tab defaultIndex={3}>ReactSpinner</Tab> 
                      <Tab defaultIndex={4}>ReactAxios</Tab> 
                      <Tab defaultIndex={5}>ReactGridLayout</Tab> 
                      <Tab defaultIndex={6}>ReactTestCss</Tab> 
                    </TabList>
                    <TabPanel>
                       <div className="MainContent1">
                          <h1>MainContent</h1>
                          <Counter />  
                       </div>
                    </TabPanel>
                    <TabPanel>
                      <h1>Demo_ReactDataGrid_Panel</h1> 
                      <div className='DataGrid'>
                        <ReactDataGrid/>                  
                      </div>                         
                    </TabPanel>  
                    <TabPanel>
                      <h1>Modal_Panel</h1>
                      <ReactModal/>
                    </TabPanel>   
                    <TabPanel>
                      <h1>ReactSpinner_Panel</h1>
                      <Loading/>
                    </TabPanel> 
                    <TabPanel>
                      <h1>ReactAxios_Panel</h1>
                      <div className='ReactAxios'>
                          <ReactAxios/> 
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className='ReactGridLayout'>
                          <ReactGridLayout /> 
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <h1>ReactTestCss_Panel</h1>
                      <div className='CssModules'>
                          <CssModules/> 
                          <ColoredMessage color="blue">テストコメント</ColoredMessage>
                      </div>
                    </TabPanel>
                  </Tabs>  
                 </TabPanel>

                 <TabPanel>
                  <Tabs forceRenderTabPanel defaultIndex={0}>
                    <TabList>
                      <Tab defaultIndex={0}>Home</Tab>
                      <Tab defaultIndex={1}>DataGrid</Tab>
                      <Tab defaultIndex={2}>LoaderSpinner</Tab>       
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
                      <h1>LoaderSpinner_Panel</h1>   
                      <Loading/>       
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
