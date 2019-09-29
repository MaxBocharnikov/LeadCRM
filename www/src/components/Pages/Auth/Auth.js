import React from 'react';
import { withRouter } from 'react-router-dom'

import './Auth.scss';

export default class Auth extends React.Component{

    state = {
      login: '',
      password: ''
    };

    componentDidMount() {
       if(localStorage.getItem('JWT')) this.props.onSuccessLogin();
    }

    onChangeHandle = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
    };

    onSubmit =(e) => {
        e.preventDefault();
        this.props.login(this.state);
    };

    render() {
        const {isAuth, isError} = this.props;
        const errorMessage = <span className="auth-error">Логин или пароль неверны</span>;
        if(isAuth) this.props.history.push('/home');
        return (
            <div className="auth-container">
                <form className="auth-form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="login">Логин</label>
                        <input
                            type="text"
                            id="login"
                            className="form-control"
                            name="login"
                            onChange={this.onChangeHandle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            onChange={this.onChangeHandle}
                        />
                    </div>
                    {isError ? errorMessage : ''}
                    <button type="submit" className="btn btn-primary">Авторизироваться</button>
                </form>
            </div>
        )
    }
};
