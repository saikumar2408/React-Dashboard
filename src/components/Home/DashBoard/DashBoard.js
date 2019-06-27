import React, { Component } from 'react';
import { faHistory, faExchangeAlt, faWallet, faAddressCard, faUserEdit, faComments } from '@fortawesome/free-solid-svg-icons';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import {Can} from '../../Authorization/Can';
import Card from '../../Cards/Card';

export default class DashBoard extends Component {
    clickHanlder = (url) => {
        const { history , match } = this.props
        history.push(`${ match.url }/${url}`);
    }
    state={
        cardInfo:[{ header: "View History", url: "view-history", icon: faHistory , details : "view Detials" },
                { header: "Comments", url: "comments", icon: faComments , details: "view Detials" },
                { header: "Profile", url: "profile", icon: faUserEdit , details: "view Detials" },
                { header: "Transactions", url: "transactions", icon: faExchangeAlt , details: "view Detials" },
                { header: "Wallet", url: "wallet", icon: faWallet , details: "view Detials" },
                { header: "Add Account", url: "add-account", icon: faAddressCard, details: "view Detials" },
                { header: "Show Users", url: "show-users", icon: faAddressCard, details: "view Detials" }]
    }
    
    render() {
        let CardDOc = this.state.cardInfo.map((card) => {
            return (
                <Can I="view" a={card.url}>
                <Card header={card.header}
                      key={card.header}
                      url={card.url}  
                      handleClick={()=>this.clickHanlder(card.url)}
                      icon={card.icon}
                      details={card.details} />
                </Can>
            )
        })
        return (
                <div style={{margin:'20px'}}>
                    {CardDOc}
                    {/* <Card header="View History"
                          handleClick={this.clickHanlder}
                          icon={faHistory}
                          details="View Details"/> 
                     <div className='card'>
                        <div className="card-header">
                            Comments
                        </div>
                        <div className="card-body">
                            <div className="card-body-icon">
                                <FontAwesomeIcon size='6x' icon={faComment} />
                            </div>
                            <div className="card-details">viewDetails</div>
                        </div>
                    </div> */}
            </div>

        );
    }
}
