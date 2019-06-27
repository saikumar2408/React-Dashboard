import React,{Component} from 'react';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHome,faChartLine, faUser, faHistory, faWallet, faExchangeAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import enhanceWithClickOutside from 'react-click-outside';
import { withRouter } from 'react-router';
import {Can} from '../Authorization/Can';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Sidebar.css'

export default class Sidebar extends Component{
    state = {
        expanded: false,
        selectedNav: 'home',
    };
    handleClickOutside() {
        this.setState({ expanded: false });
    }

    onNavClick = (navId) => {
        this.props.history.push(navId);
        this.setState({ expanded: false, selectedNav: navId });
    }
    render(){
        return(
            <div>
                <SideNav expanded={this.state.expanded}
                         style={{ backgroundColor:'#19313a', position: 'fixed' , color:'blue' ,zIndex:"10" }}
                         onToggle={(expanded) => { this.setState({ expanded }); }}
                >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" onClick={()=>this.onNavClick("/home")}>
            <NavIcon>
            <FontAwesomeIcon icon={faHome} className='em175'/>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <Can I='view' a='charts'>
            <NavItem eventKey="charts">
                <NavIcon>
                <FontAwesomeIcon icon={faChartLine} className='em175' />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
                <NavItem eventKey="/charts/linechart">
                    <NavText>
                        Line Chart
                    </NavText>
                </NavItem>
                <NavItem eventKey="/charts/barchart">
                    <NavText>
                        Bar Chart
                    </NavText>
                </NavItem>
            </NavItem>
        </Can>
        <Can I='view' a='profile'>
            <NavItem eventKey="profile">
                        <NavIcon>
                            <FontAwesomeIcon icon={faUser} className='em175' />
                        </NavIcon>
                        <NavText>
                            Profile
                        </NavText>
            </NavItem>
        </Can>
        <Can I='view' a='view-history'>
            <NavItem eventKey="history" onClick={()=>this.onNavClick("/home/view-history")}>
                        <NavIcon>
                            <FontAwesomeIcon icon={faHistory} className='em175' />
                        </NavIcon>
                        <NavText>
                            View History
                        </NavText>
            </NavItem>
        </Can> 
        <Can I='view' a='wallet'>
                            <NavItem eventKey="wallet" onClick={() => this.onNavClick("/home/wallet")}>
                <NavIcon>
                    <FontAwesomeIcon icon={faWallet} className='em175' />
                </NavIcon>
                <NavText>
                    Wallet
                </NavText>
            </NavItem>
        </Can> 
        <Can I='view' a='add-account'>
                <NavItem eventKey="add-account" onClick={() => this.onNavClick("/home/add-account")}>
                <NavIcon>
                    <FontAwesomeIcon icon={faAddressCard} className='em175' />
                </NavIcon>
                <NavText>
                    Add Account
                </NavText>
            </NavItem>
        </Can>
        <Can I='view' a='transactions'>
                <NavItem eventKey="transactions" onClick={() => this.onNavClick("/home/transactions")}>
                <NavIcon>
                    <FontAwesomeIcon icon={faExchangeAlt} className='em175' />
                </NavIcon>
                <NavText>
                    Transactions
                </NavText>
            </NavItem>
        </Can>        
    </SideNav.Nav>
</SideNav >
            </div>
        )
    }
}

Sidebar=withRouter(enhanceWithClickOutside(Sidebar));