import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css'
export default class Card extends Component{
    render(){
        return (
            <div className='card' onClick={this.props.handleClick}>
                <div className="card-body">
                    <div className="card-body-icon">
                        <FontAwesomeIcon size='6x' icon={this.props.icon} />
                    </div>
                    <div className="card-header">{this.props.header}</div>
                    <div className="card-details">{this.props.details}</div>
                </div>
            </div>
        )
    }
}