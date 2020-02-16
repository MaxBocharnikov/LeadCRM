import React, {Component} from 'react';
import InputElement from 'react-input-mask';
import './LeadDetailCard.scss';
import {formatPhoneUtil} from '../../../utils/phoneFormatUtils';
import {getAvailableManagers, getAvailableSupervisors, setSupervisorByManager} from '../../../utils/workers';
import {Roles} from '../../../constatnts/roles';
import {formatDate} from '../../../utils/timeUtils';

export default class LeadDetailCard extends Component{
    state = {
        lead: {
            id: '',
            source: null,
            fio: '',
            phone: '',
            status: null,
            supervisor: null,
            responsible: null,
            date: '',
            email: '',
            address: '',
            comment: ''
        },

        fioError: false,
        phoneError: false,
    };

    componentDidMount() {
        const lead = this.props.lead;
        if (lead) {
            this.setState(prevState=>({
                ...prevState,
                lead: {
                    ...lead,
                    date: formatDate(lead.date, 'date')
                }
            }))


        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.submitFromOutside !== this.props.submitFromOutside) {
            if (this.props.submitFromOutside) {
                this.onSubmit();
            }
        }

        if(prevState.lead.responsible !== this.state.lead.responsible) {
            const supervisor = setSupervisorByManager(this.props.availableWorkers, this.state.lead.responsible);
            this.setState({
                lead: {
                    ...this.state.lead,
                    supervisor
                }
            })
        }
    }

    onItemChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                [event.target.name]: event.target.value
            }
        })
    };


    validateFio = () => {
        if (!this.state.lead.fio) {
            this.setState({
                ...this.state.lead,
                fioError: true
            });
            return false;
        } else {
            this.setState({
                ...this.state.lead,
                fioError: false
            });
            return true;
        }
    };

     validatePhone = () => {
        let phone = this.state.lead.phone;
        if(phone.length > 10) {
            phone = formatPhoneUtil(phone);
        }
        if (phone.length !== 10 || isNaN(phone)) {
            this.setState({
                ...this.state.lead,
                phoneError: true
            });
            return false;
        } else {
            this.setState({
                ...this.state.lead,
                phoneError: false
            });
            return true;
        }
    };


      onSubmit() {
        const isFioValid = this.validateFio();
        const isPhoneValid = this.validatePhone();
       if(!isFioValid|| !isPhoneValid) {
           this.props.unSubmitForm();
           return;
       };
       if(!this.props.lead) {
         this.props.addLead(this.state.lead);
       } else {
           this.props.editLead(this.state.lead);
       }
        this.props.unSubmitForm();
    };

    render() {
        const {availableWorkers, availableSources, availableStatuses, currentWorker} = this.props;
        const {id, source, fio, phone, status, supervisor, responsible, date, email, address, comment} = this.state.lead;
        const phoneValidationError = <span className="form-validation-error">Введите корректный номер телефона</span>;
        const fioValidationError = <span className="form-validation-error">ФИО не может быть пустым</span>;
        const availableSupervisors = getAvailableSupervisors(availableWorkers);
        const availableManagers = getAvailableManagers(availableWorkers, supervisor, currentWorker);
        return (
           <form className="form">
               <div className="form-group">
                   <div className="row">
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-id">ID:</label>
                               <input
                                   title={id}
                                   disabled
                                   id="lead-id"
                                   name="id"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={id}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-source">Источник:</label>
                               <select
                                   title={source}
                                   id="lead-status"
                                   type="text"
                                   className="form-control form-control-custom"
                                   onChange={this.onItemChange}
                                   name="source"
                                   value={source || 'Не выбран'}>
                                   <option value="">Не выбрано</option>
                                   {availableSources ? availableSources.map(source => (
                                       <option key={source.id} value={source.id}>{source.title}</option>
                                   )): ''}
                               </select>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-fio">ФИО:</label>
                               <input
                                   title={fio}
                                   id="lead-fio"
                                   type="text"
                                   name="fio"
                                   className="form-control form-control-custom"
                                   value={fio}
                                   onChange={this.onItemChange}/>
                           </div>
                           {this.state.fioError ? fioValidationError : '' }
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-phone">Телефон:</label>
                               <InputElement
                                   title={phone}
                                   id="lead-phone"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={phone}
                                   name="phone"
                                   onChange={this.onItemChange}
                                   mask="+7 (999) 999-99-99"
                                   placeholder="+7 (___) __-__-__"/>
                           </div>
                           {this.state.phoneError ? phoneValidationError : ''}
                       </div>
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-status">Статус:</label>
                               <select
                                   title={status}
                                   id="lead-source"
                                   type="text"
                                   className="form-control form-control-custom"
                                   onChange={this.onItemChange}
                                   name="status"
                                   value={status || 'Не выбран'}>
                                   <option value="">Не выбрано</option>
                                   {availableStatuses ? availableStatuses.map(status => (
                                       <option key={status.id} value={status.id}>{status.title}</option>
                                   )): ''}
                               </select>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-supervisior">Супервайзер:</label>
                               <select
                                   title={supervisor}
                                   id="lead-supervisor"
                                   type="text"
                                   className="form-control form-control-custom"
                                   name="supervisor"
                                   value={supervisor || 'Не выбран'}
                                   onChange={this.onItemChange}
                               >
                                   {currentWorker && currentWorker.roleId === Roles.supervisor ? (<option value="">Не выбрано</option>) : null}
                                   {availableSupervisors ? availableSupervisors.map(supervisor => (
                                       <option key={supervisor.id} value={supervisor.id}>{supervisor.surname} {supervisor.name} {supervisor.middlename}</option>
                                   )): ''}
                               </select>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-responsible">Ответственный:</label>
                               <select
                                   title={responsible}
                                   id="lead-responsible"
                                   type="text"
                                   name="responsible"
                                   className="form-control form-control-custom"
                                   value={responsible || 'Не выбран'}
                                   onChange={this.onItemChange}
                               >
                                   {currentWorker && currentWorker.roleId === Roles.supervisor ? (<option value="">Не выбрано</option>) : null}
                                   {availableManagers ? availableManagers.map(manager => (
                                       currentWorker && (currentWorker.roleId === Roles.supervisor || manager.id === currentWorker.id) ?
                                           <option key={manager.id} value={manager.id}>{manager.surname} {manager.name} {manager.middlename}</option> : null
                                   )): ''}
                               </select>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-date">Дата создания:</label>
                               <input
                                   title={date}
                                   id="lead-date"
                                   type="text"
                                   name="date"
                                   disabled
                                   className="form-control form-control-custom"
                                   value={date}
                                   onChange={this.onItemChange}
                               />
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-email">Email:</label>
                               <input
                                   title={email}
                                   id="lead-email"
                                   type="text"
                                   name="email"
                                   className="form-control form-control-custom"
                                   value={email}
                                   onChange={this.onItemChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-address">Адрес:</label>
                               <input
                                   title={address}
                                   id="lead-address"
                                   type="text"
                                   name="address"
                                   className="form-control form-control-custom"
                                   value={address}
                                   onChange={this.onItemChange}
                               />
                           </div>
                       </div>
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-comment">Комментарий:</label>
                               <textarea
                                   className="form-control custom-area"
                                   id="lead-comment"
                                   rows="3"
                                   value={comment}
                                   name="comment"
                                   onChange={this.onItemChange}
                               ></textarea>
                           </div>
                       </div>
                   </div>
               </div>
           </form>
       )
    }
}
