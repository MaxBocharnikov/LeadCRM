import React from 'react';
import './Filter.scss';
import InputElement from 'react-input-mask';
import {getAvailableSupervisors, getAvailableManagers, setSupervisorByManager} from '../../utils/workers'
import {Roles} from '../../constatnts/roles'

export default class Filter extends React.Component{

    componentDidUpdate(prevProp) {
        if(prevProp.responsible !== this.props.responsible) {
            const supervisor = setSupervisorByManager(this.props.availableWorkers, this.props.responsible)
            this.props.onItemChange('supervisor', supervisor);
        }
    }


    onItemChange = event => {
        this.props.onItemChange(event.target.name, event.target.value)
    };

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
                                    name="phone"
                                    onChange={this.onItemChange}
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
                                       name="status"
                                       value={status || 'Не выбран'}
                                       onChange={this.onItemChange}
                                >
                                    <option value="">Не выбрано</option>
                                    {availableStatuses ? availableStatuses.map(status => (
                                        <option key={status.id} value={status.id}>{status.title}</option>
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
                                    name="supervisor"
                                    value={supervisor || 'Не выбран'}
                                    onChange={this.onItemChange}
                                >
                                    {currentWorker && currentWorker.roleId === Roles.supervisor ? (<option value="">Не выбрано</option>) : null}
                                    {availableSupervisors ? availableSupervisors.map(supervisor => (
                                        <option key={supervisor.id} value={supervisor.id}>{supervisor.surname} {supervisor.name} {supervisor.middlename}</option>
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
                                    name="fio"
                                    value={fio}
                                    onChange={this.onItemChange}
                                />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="source">Источник</label>
                                <select id="source"
                                        type="text"
                                        className="form-control"
                                        placeholder="Источник"
                                        title="Источник"
                                        value={source || 'Не выбран'}
                                        name="source"
                                        onChange={this.onItemChange}
                                >
                                    <option value="">Не выбрано</option>
                                    {availableSources ? availableSources.map(source => (
                                        <option key={source.id} value={source.id}>{source.title}</option>
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
                                    value={responsible || 'Не выбран'}
                                    name="responsible"
                                    onChange={this.onItemChange}
                                >
                                    {currentWorker && currentWorker.roleId === Roles.supervisor ? (<option value="">Не выбрано</option>) : null}
                                    {availableManagers ? availableManagers.map(manager =>
                                        currentWorker && (currentWorker.roleId === Roles.supervisor || manager.id === currentWorker.id) ?
                                        <option key={manager.id} value={manager.id}>{manager.surname} {manager.name} {manager.middlename}</option> : null
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
                                    name="date"
                                    onChange={this.onItemChange}
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