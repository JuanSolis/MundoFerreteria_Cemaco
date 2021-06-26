import React from 'react';
import './DepartamentItem.css';

class DepartamentItem extends React.Component{
    render(){
        return(
            <div className="departamentItemWrapper">
                <div className="imgContainer">
                    <img className="departamentImg" src={this.props.src} alt="" />
                    <h2 style={{display: this.props.name == 'Ver más' ? 'block': 'none' }}>{this.props.name}</h2>
                </div>
                
                <h3 className="departamentName">{this.props.name}</h3>
            </div>
        );
    }
}

export default DepartamentItem;