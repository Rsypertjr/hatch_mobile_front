import React from 'react';

class CInfo extends React.Component { 
    render() {      
      return (   
            <div className="col-5 info-field">
                <p className="info itop">{this.props.campaign_name}</p>
                <p className="info ibot">{this.props.pay_per_install}</p>
            </div>
        )
    }
  }
  export default CInfo;