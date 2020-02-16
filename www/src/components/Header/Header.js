import React from 'react';
import './Header.scss';

export default class Header extends React.Component {

    onLogout = () => {
        localStorage.clear();
        this.props.logout();
    };

    render() {
        const {worker} = this.props;
        return (
            <div className="header">
                <h3 className="header-title">Система управление лидами</h3>
                <div className="header-worker">
                    <p>{worker ? worker.surname + ' ' + worker.name + ' ' + worker.middlename: ''}</p>
                    <i onClick={this.onLogout} className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        )
    }
}