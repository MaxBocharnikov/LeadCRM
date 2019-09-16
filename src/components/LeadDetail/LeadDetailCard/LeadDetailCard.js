import React, {Component, Fragment} from 'react';
import './LeadDetailCard.css';


export default class LeadDetailCard extends Component{
    state = {
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
    };

    componentDidMount() {
        const lead = this.props.lead;
        if (lead) {
            this.setState({
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
            });
        }
    }


    onSourceChange = (event) => {
       this.setState({
          source: event.target.value
       });
    };

    onFioChange = (event) => {
        this.setState({
            fio: event.target.value
        });
    };

    onPhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        });
    };

    onStatusChange = (event) => {
        this.setState({
            status: event.target.value
        });
    };

    onSupervisiorChange = (event) => {
        this.setState({
            supervisor: event.target.value
        });
    };

    onResponsibleChange = (event) => {
        this.setState({
            responsible: event.target.value
        });
    };

    onDateChange = (event) => {
        this.setState({
            date: event.target.value
        });
    };

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    onAddressChange = (event) => {
        this.setState({
            address: event.target.value
        });
    };

    onCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
       if(!this.props.lead) {
         this.props.addLead(this.state);
       } else {
           this.props.editLead(this.state);
       }
    };

    render() {
        const {lead, hideModal} = this.props;
       return (
           <form onSubmit={this.onSubmit}>
               <div className="form-group">
                   <div className="row">
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-id">ID:</label>
                               <input
                                   title={this.state.id}
                                   disabled id="lead-id" type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.id}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-source">Источник:</label>
                               <input
                                   itle={this.state.source}
                                   id="lead-source" type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.source}
                                   onChange={this.onSourceChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-fio">ФИО:</label>
                               <input
                                   title={this.state.fio}
                                   id="lead-fio" type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.fio}
                                   onChange={this.onFioChange}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-phone">Телефон:</label>
                               <input
                                   title={this.state.phone}
                                   id="lead-phone"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.phone}
                                   onChange={this.onPhoneChange}
                               />
                           </div>
                       </div>
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-status">Статус:</label>
                               <input
                                   title={this.state.status}
                                   id="lead-status"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.status}
                                   onChange={this.onStatusChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-supervisior">Супервайзер:</label>
                               <input
                                   title={this.state.supervisor}
                                   id="lead-supervisior"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.supervisor}
                                   onChange={this.onSupervisiorChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-responsible">Ответственный:</label>
                               <input
                                   title={this.state.responsible}
                                   id="lead-responsible"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.responsible}
                                   onChange={this.onResponsibleChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-date">Дата создания:</label>
                               <input
                                   title={this.state.date}
                                   id="lead-date"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.date}
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
                                   title={this.state.email}
                                   id="lead-email"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.email}
                                   onChange={this.onEmailChange}
                               />
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-address">Адрес:</label>
                               <input
                                   title={this.state.address}
                                   id="lead-address"
                                   type="text"
                                   className="form-control form-control-custom"
                                   value={this.state.address}
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
                                   value={this.state.comment}
                                   onChange={this.onCommentChange}
                               ></textarea>
                           </div>
                       </div>
                   </div>
               </div>
               {!lead ?  <button type="submit" className="btn btn-success">Добавить</button> : <button type="submit" className="btn btn-success">Редактировать</button>}
               <button className="btn btn-primary" onClick={hideModal}>Close</button>
           </form>
       )
    }
}
