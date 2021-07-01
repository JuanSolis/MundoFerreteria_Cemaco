import React from 'react';
import './ToolItem.css';

class ToolItem extends React.Component{
    render(){
        return(
            <a href={this.props.href} className="toolItemContainer">
                <div>
                    <div className="imgWrapper">
                        <img src={this.props.src} alt="" />
                        <h2 style={{display: this.props.tittle == 'Ver más' ? 'block': 'none' }}>{this.props.tittle}</h2>
                    </div>
                    <h3>{this.props.tittle}</h3>
                </div>
            </a>
        );
    }
}


export default ToolItem;