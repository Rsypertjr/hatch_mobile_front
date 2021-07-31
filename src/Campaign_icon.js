import React from 'react';
class CIcon extends React.Component { 
    render() {      
      return (
          <img src={this.props.campaign_icon} className="img-responsive w-100 h-100 rounded-xl" alt="..."></img>
      )
    }
  }
  export default CIcon;