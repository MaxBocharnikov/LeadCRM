import React from 'react';
import './Filter.scss';
import InputElement from 'react-input-mask';

export default class Filter extends React.Component{

    resetFilter = (event) => {
        event.preventDefault();
        this.props.resetFilter();
        this.props.fetchLeadList();
    };

    acceptFilter = (event) => {
        event.preventDefault();
        this.props.fetchLeadList();
    };

    render() {
        const {phone, fio, date, status, source, responsible, supervisor} = this.props;
        return (
            <form className="filter-form" onSubmit={this.acceptFilter}>
                <div className="filter-form-fields">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-3">
                                <label htmlFor="phone">Телефон</label>
                                <InputElement
                                    id="phone"
                                    type="text"
                                    className="form-control"
                                    placeholder="Введите номер телефона"
                                    title="Введите номер телефона"
                                    value={phone}
                                    onChange={this.props.onPhoneChange}
                                    mask="+7 (999) 999-99-99"
                                />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="status">Статус</label>
                                <input id="status"
                                       type="text"
                                       className="form-control"
                                       placeholder="Статус"
                                       title="Статус"
                                       value={status}
                                       onChange={this.props.onStatusChange}
                                />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="supervisor">Супервайзер</label>
                                <input
                                    id="supervisor"
                                    type="text"
                                    className="form-control"
                                    placeholder="Супервайзер"
                                    title="Супервайзер"
                                    value={supervisor}
                                    onChange={this.props.onSupervisorChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <label htmlFor="fio">ФИО</label>
                                <input
                                    id="fio"
                                    type="text"
                                    className="form-control"
                                    placeholder="ФИО"
                                    title="ФИО"
                                    value={fio}
                                    onChange={this.props.onFioChange}
                                />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="source">Источник</label>
                                <input
                                    id="source"
                                    type="text"
                                    className="form-control"
                                    placeholder="Источник"
                                    title="Источник"
                                    value={source}
                                    onChange={this.props.onSourceChange}
                                />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="responsible">Ответственный</label>
                                <input
                                    id="responsible"
                                    type="text"
                                    className="form-control"
                                    placeholder="Ответственный"
                                    title="Ответственный"
                                    value={responsible}
                                    onChange={this.props.onResponsibleChange}
                                />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="date">Укажите даты</label>
                                <input
                                    id="date"
                                    type="text"
                                    className="form-control"
                                    placeholder="Укажите даты"
                                    title="Укажите даты"
                                    value={date}
                                    onChange={this.props.onDateChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-form-buttons">
                    <button type="submit" className="btn btn-primary">Применить</button>
                    <button className="btn btn-secondary" onClick={this.resetFilter}>Сбросить</button>
                </div>
            </form>
        )
    }
}