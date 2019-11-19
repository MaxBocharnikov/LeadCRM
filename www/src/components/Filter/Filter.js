import React from 'react';
import './Filter.scss';
import InputElement from 'react-input-mask';
import {getAvailableSupervisors, getAvailableManagers} from '../../utils/workers'
import {Roles} from '../../constatnts/roles'

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
        const {phone, fio, date, status, source, responsible, supervisor, availableWorkers, availableSources, availableStatuses, currentWorker} = this.props;
        const availableSupervisors = getAvailableSupervisors(availableWorkers);
        const availableManagers = getAvailableManagers(availableWorkers, supervisor, currentWorker);
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
                                <select id="status"
                                       type="text"
                                       className="form-control"
                                       placeholder="Статус"
                                       title="Статус"
                                       value={status}
                                       onChange={this.props.onStatusChange}
                                >
                                    <option value="">Не выбрано</option>
                                    {availableStatuses ? availableStatuses.map(status => (
                                        <option key={status.status_id} value={status.status_id}>{status.title}</option>
                                    )): null}
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="supervisor">Супервайзер</label>
                                <select
                                    id="supervisor"
                                    type="text"
                                    className="form-control"
                                    placeholder="Супервайзер"
                                    title="Супервайзер"
                                    value={supervisor}
                                    onChange={this.props.onSupervisorChange}
                                >
                                    {currentWorker && currentWorker.role_id === Roles.supervisor ? (<option value="">Не выбрано</option>) : null}
                                    {availableSupervisors ? availableSupervisors.map(supervisor => (
                                        <option key={supervisor.worker_id} value={supervisor.worker_id}>{supervisor.surname} {supervisor.name} {supervisor.middlename}</option>
                                    )): null}
                                </select>
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
                                <select id="source"
                                        type="text"
                                        className="form-control"
                                        placeholder="Источник"
                                        title="Источник"
                                        value={source}
                                        onChange={this.props.onSourceChange}
                                >
                                    <option value="">Не выбрано</option>
                                    {availableSources ? availableSources.map(source => (
                                        <option key={source.source_id} value={source.source_id}>{source.source_title}</option>
                                    )): null}
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="responsible">Ответственный</label>
                                <select
                                    id="responsible"
                                    type="text"
                                    className="form-control"
                                    placeholder="Ответственный"
                                    title="Ответственный"
                                    value={responsible}
                                    onChange={this.props.onResponsibleChange}
                                >
                                    {currentWorker && currentWorker.role_id === Roles.supervisor ? (<option value="">Не выбрано</option>) : null}
                                    {availableManagers ? availableManagers.map(manager =>
                                        currentWorker && (currentWorker.role_id === Roles.supervisor || manager.worker_id === currentWorker.worker_id) ?
                                        <option key={manager.worker_id} value={manager.worker_id}>{manager.surname} {manager.name} {manager.middlename}</option> : null
                                    ): null}
                                </select>
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