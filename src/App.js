import React from 'react';
import ReactDOM from 'react-dom';
import CIcon from './Campaign_icon.js';
import CInfo from './Campaign_info.js';
import CScroller from './Campaign_scroller.js';
import './App.css';


const axios = require('axios').default;


//import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom';
//import Home from './Home';
//import About from './About';
//import Contact from './Contact';
//import Root from './Root';
//import { createBrowserHistory } from 'history';




class App extends React.Component {

  constructor() {
    super();
    this.state = {
      campaigns: []
    };

  }

  

  componentDidMount() {
    //axios.get("https://www.plugco.in/public/take_home_sample_feed")
    axios.get("http://hmobk.presvote.tk/api/campaigns") 
      .then(
        (res) => {
          //const _campaigns = res.data.campaigns;
          const _campaigns = res.data;
          console.log(_campaigns);
          this.setState({campaigns : _campaigns});
        })
        .catch((error) => {
            console.log(error);
        })
        .then(function () {
          // always executed
        });  

        
  }

sendRequest(){
  axios.post('http://localhost:8000/api/todos', {
    title: 'first-item'
  })
  .then(function (response) {
    console.log(response);
  }); 

}

  render() {
      return (
        <div>            
          {      
            this.state.campaigns.map((campaign,index) => 
              <ul >
                          
                <div className="container">
                  <div className="row ifield">
                    <div className="icon-holder">    
                      <CIcon key={index} campaign_icon = {campaign.campaignIconUrl}/>
                    </div>  
                    <div className='info-holder'>                   
                      <CInfo key={index} campaign_name = {campaign.campaignName} pay_per_install = {campaign.payPerInstall} />
                    </div>
                  </div>

                  <CScroller key={index}  medias = {campaign.mediaItems}/>

                </div>
              </ul>
            )
          }
        </div>
      );
  }
}
export default App;

