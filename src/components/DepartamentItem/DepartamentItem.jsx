import React from 'react';
import './DepartamentItem.css';

class DepartamentItem extends React.Component{
    render(){
        return(
            <div className="departamentItemWrapper" id={this.props.name == 'Ver más' ? 'VerMas': '' }>
                <div className="imgContainer">
                    <img className="departamentImg" src={this.props.src} alt="" />
                    <h2 style={{display: this.props.name == 'Ver más' ? 'block': 'none' }}>{this.props.name}</h2>
                </div>
                
                <h3 className="departamentName"><a href={this.props.href}>{this.props.name}</a></h3>
            </div>
        );
    }
}

export default DepartamentItem;