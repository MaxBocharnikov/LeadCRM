import React, {Component, Fragment} from 'react';
import InputElement from 'react-input-mask';
import './LeadDetailCard.scss';
import {formatPhoneUtil} from '../../../utils/phoneFormatUtils';
import {getAvailableManagers, getAvailableSupervisors} from '../../../utils/workers';
import {formatDate} from '../../../utils/timeUtils';
import {Roles} from '../../../constatnts/roles';

export default class LeadDetailCard extends Component{
    state = {
        lead: {
            id: '',
            source: undefined,
            fio: '',
            phone: '',
            status: undefined,
            supervisor: undefined,
            responsible: undefined,
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
            this.setState({
                lead: {
                    id: lead.lead_id,
                    source: lead.source,
                    fio: lead.fio,
                    phone: lead.phone,
                    status: lead.status,
                    supervisor: lead.supervisor,
                    responsible: lead.responsible,
                    date: formatDate(lead.creation_date, 'date'),
                    email: lead.email,
                    address: lead.address,
                    comment: lead.comment
                }
            });

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.submitFromOutside !== this.props.submitFromOutside) {
            if (this.props.submitFromOutside) {
                this.onSubmit();
            }
        }
    }

    onSourceChange = (event) => {
       this.setState({
          lead: {
              ...this.state.lead,
              source: event.target.value
          }
       });
    };

    onFioChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                fio: event.target.value
            }
        });
    };

    onPhoneChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                phone: event.target.value
            }
        });
    };

    onStatusChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                status: event.target.value
            }
        });
    };

    onSupervisiorChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                supervisor: event.target.value
            }
        });
    };

    onResponsibleChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                responsible: event.target.value
            }
        });
    };

    onDateChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                date: event.target.value
            }
        });
    };

    onEmailChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                email: event.target.value
            }
        });
    };

    onAddressChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                address: event.target.value
            }
        });
    };

    onCommentChange = (event) => {
        this.setState({
            lead: {
                ...this.state.lead,
                comment: event.target.value
            }
        });
    };

    validateFio = () => {
        if (!this.state.lead.fio) {
            this.setState({
                fioError: true
            });
            return false;
        } else {
            this.setState({
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
                phoneError: true
            });
            return false;
        } else {
            this.setState({
                phoneError: false
            });
            return true;
        }
    };

    formatPhone = () => {
        let formatedPhone = formatPhoneUtil(this.state.lead.phone);
        this.setState({
            lead: {
                ...this.state.lead,
                phone:formatedPhone
            }
        });
    }

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
        const {lead, availableWorkers, availableSources, availableStatuses, currentWorker} = this.props;
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
                                   onChange={this.onSourceChange}
                                   value={source || 'Не выбран'}>
                                   <option value="">Не выбрано</option>
                                   {availableSources ? availableSources.map(source => (
                                       <option key={source.source_id} value={source.source_id}>{source.source_title}</option>
                                   )): ''}
                               </select>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-fio">ФИО:</label>
                               <input
                                   title={fio}
                                   id="lead-fio"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={fio}
                                   onChange={this.onFioChange}/>
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
                                   onChange={this.onPhoneChange}
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
                                   onChange={this.onStatusChange}
                                   value={status}>
                                   <option value="">Не выбрано</option>
                                   {availableStatuses ? availableStatuses.map(status => (
                                       <option key={status.status_id} value={status.status_id}>{status.title}</option>
                                   )): ''}
                               </select>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-supervisior">Супервайзер:</label>
                               <select
                                   title={supervisor}
                                   id="lead-supervisior"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={supervisor}
                                   onChange={this.onSupervisiorChange}
                               >
                                   {currentWorker && currentWorker.role_id === Roles.supervisor ? (<option value="">Не выбрано</option>) : null}
                                   {availableSupervisors ? availableSupervisors.map(supervisor => (
                                       <option key={supervisor.worker_id} value={supervisor.worker_id}>{supervisor.surname} {supervisor.name} {supervisor.middlename}</option>
                                   )): ''}
                               </select>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-responsible">Ответственный:</label>
                               <select
                                   title={responsible}
                                   id="lead-responsible"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={responsible}
                                   onChange={this.onResponsibleChange}
                               >
                                   {currentWorker && currentWorker.role_id === Roles.supervisor ? (<option value="">Не выбрано</option>) : null}
                                   {availableManagers ? availableManagers.map(manager => (
                                       currentWorker && (currentWorker.role_id === Roles.supervisor || manager.worker_id === currentWorker.worker_id) ?
                                           <option key={manager.worker_id} value={manager.worker_id}>{manager.surname} {manager.name} {manager.middlename}</option> : null
                                   )): ''}
                               </select>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-date">Дата создания:</label>
                               <input
                                   title={date}
                                   id="lead-date"
                                   type="text"
                                   disabled
                                   className="form-control form-control-custom"
                                   value={date}
                                   onChange={this.onDateChange}
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
                                   className="form-control form-control-custom"
                                   value={email}
                                   onChange={this.onEmailChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-address">Адрес:</label>
                               <input
                                   title={address}
                                   id="lead-address"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={address}
                                   onChange={this.onAddressChange}
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
                                   onChange={this.onCommentChange}
                               ></textarea>
                           </div>
                       </div>
                   </div>
               </div>
           </form>
       )
    }
}
