import React from 'react';
import './ToolItem.css';

class ToolItem extends React.Component{
    render(){
        return(
            <div className="toolItemContainer">
                <div className="imgWrapper">
                    <img src={this.props.src} alt="" />
                    <h2 style={{display: this.props.tittle == 'Ver más' ? 'block': 'none' }}>{this.props.tittle}</h2>
                </div>
                <h3>{this.props.tittle}</h3>
            </div>
        );
    }
}


export default ToolItem;