import React from 'react';
import './DepartamentItem.css';

class DepartamentItem extends React.Component{
    moreItems(){
        const toShowelement = document.querySelectorAll(".departamentListContainer .hidden");
        toShowelement.forEach((element) => {
            element.classList.remove("hidden");
            element.classList.add("block");
        })
        

        const moreBtn = document.querySelector(".departamentListContainer #VerMas");
        moreBtn.classList.remove("block");
        moreBtn.classList.add("hidden");
    }
    render(){   
        return(
            <div className={`departamentItemWrapper ${this.props.hidden ? 'hidden': '' }`} id={this.props.name == 'Ver más' ? 'VerMas': '' } onClick={ this.props.name == 'Ver más' ? this.moreItems : ()=>{}}>
                <div className="imgContainer">
                    <img className="departamentImg" src={this.props.src} alt="" />
                    <h2 className="verMas" style={{display: this.props.name == 'Ver más' ? 'block': 'none' }}>{this.props.name}</h2>
                </div>
                
                <h3 className="departamentName"><a href={this.props.href}>{this.props.name}</a></h3>
            </div>
        );
    }
}

export default DepartamentItem;