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
                <div className="header_worker">
                    <p>{worker ? worker.surname + ' ' + worker.name + ' ' + worker.middlename: ''}</p>
                    <button onClick={this.onLogout} className="btn-primary">Выйти</button>
                </div>
            </div>
        )
    }
}