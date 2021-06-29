import React from 'react';
import './ServiceBanner.css';


class ServiceBanner extends React.Component {
    render(){
        return(
            <div className="serviceBannerContainer" id={this.props.id}>
                <div className="banner">
                    <h2 style={{color: this.props.colorFont}}>{this.props.service}</h2>
                    <a href={this.props.href} style={{color: this.props.colorFont}}><h3> Ver más</h3></a>
                </div>
            </div>
        );
    }
}

export default ServiceBanner;