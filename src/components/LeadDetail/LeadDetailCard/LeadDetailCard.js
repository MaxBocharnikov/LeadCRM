import React, {Component, Fragment} from 'react';
import './LeadDetailCard.css';


export default class LeadDetailCard extends Component{
    state = {
        lead: {
            id: '',
            source: '',
            fio: '',
            phone: '',
            status: '',
            supervisor: '',
            responsible: '',
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
                    id: lead.id,
                    source: lead.source,
                    fio: lead.fio,
                    phone: lead.phone,
                    status: lead.status,
                    supervisor: lead.supervisor,
                    responsible: lead.responsible,
                    date: lead.date,
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
        if (this.state.lead.phone.length !== 10) {
            this.setState({
                phoneError: true
            })
            return false;
        } else {
            this.setState({
                phoneError: false
            })
            return true;
        }
    }


    onSubmit = () => {
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
        const {lead} = this.props;
        const {id, source, fio, phone, status, supervisor, responsible, date, email, address, comment} = this.state.lead;
        const phoneValidationError = <span className="form-validation-error">Введите корректный номер телефона</span>;
        const fioValidationError = <span className="form-validation-error">ФИО не может быть пустым</span>;

        return (
           <form>
               <div className="form-group">
                   <div className="row">
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-id">ID:</label>
                               <input
                                   title={id}
                                   disabled id="lead-id" type="text"
                                   className="form-control form-control-custom"
                                   value={id}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-source">Источник:</label>
                               <input
                                   title={source}
                                   id="lead-source" type="text"
                                   className="form-control form-control-custom"
                                   value={source}
                                   onChange={this.onSourceChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-fio">ФИО:</label>
                               <input
                                   title={fio}
                                   id="lead-fio" type="text"
                                   className="form-control form-control-custom"
                                   value={fio}
                                   onChange={this.onFioChange}/>
                           </div>
                           {this.state.fioError ? fioValidationError : '' }
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-phone">Телефон:</label>
                               <input
                                   title={phone}
                                   id="lead-phone"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={phone}
                                   onChange={this.onPhoneChange}
                               />
                           </div>
                           {this.state.phoneError ? phoneValidationError : ''}
                       </div>
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-status">Статус:</label>
                               <input
                                   title={status}
                                   id="lead-status"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={status}
                                   onChange={this.onStatusChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-supervisior">Супервайзер:</label>
                               <input
                                   title={supervisor}
                                   id="lead-supervisior"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={supervisor}
                                   onChange={this.onSupervisiorChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-responsible">Ответственный:</label>
                               <input
                                   title={responsible}
                                   id="lead-responsible"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={responsible}
                                   onChange={this.onResponsibleChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-date">Дата создания:</label>
                               <input
                                   title={date}
                                   id="lead-date"
                                   type="text"
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
