import React from 'react';
import './ServiceBanner.css';


class ServiceBanner extends React.Component {
    render(){
        return(
            <div className="serviceBannerContainer" id={this.props.id}>
                <div className="banner" style={{color: this.props.colorFont}}>
                    <h2>{this.props.service}</h2>
                    <h3>Ver más</h3>
                </div>
            </div>
        );
    }
}

export default ServiceBanner;