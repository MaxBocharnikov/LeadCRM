import React, {Component, Fragment} from 'react';
import { FormControl } from '@material-ui/core';
import './LeadDetailCard.css';


export default class LeadDetailCard extends Component{

    render() {
        const {lead} = this.props;
       return (
           <form>
               <div className="form-group">
                   <div className="row">
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-id">ID:</label>
                               <input title={lead.id} disabled id="lead-id" type="text" className="form-control form-control-custom" value={lead.id}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-source">Источник:</label>
                               <input title={lead.source} id="lead-source" type="text" className="form-control form-control-custom" value={lead.source}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-fio">ФИО:</label>
                               <input title={lead.fio} id="lead-fio" type="text" className="form-control form-control-custom" value={lead.fio}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-phone">Телефон:</label>
                               <input title={lead.phone} id="lead-phone" type="text" className="form-control form-control-custom" value={lead.phone}/>
                           </div>
                       </div>
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-status">Статус:</label>
                               <input title={lead.status} id="lead-status" type="text" className="form-control form-control-custom" value={lead.status}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-supervisior">Статус:</label>
                               <input title={lead.supervisor} id="lead-supervisior" type="text" className="form-control form-control-custom" value={lead.supervisor}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-responsible">Ответственный:</label>
                               <input title={lead.responsible} id="lead-responsible" type="text" className="form-control form-control-custom" value={lead.responsible}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-date">Дата создания:</label>
                               <input title={lead.date} id="lead-date" type="text" className="form-control form-control-custom" value={lead.date}/>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-email">Email:</label>
                               <input title={lead.email} id="lead-email" type="text" className="form-control form-control-custom" value={lead.email}/>
                           </div>
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-address">Адрес:</label>
                               <input title={lead.address} id="lead-address" type="text" className="form-control form-control-custom" value={lead.address}/>
                           </div>
                       </div>
                       <div className="col-sm-6 block">
                           <div className="form-group form-group-custom">
                               <label className="form-group-label" htmlFor="lead-comment">Комментарий:</label>
                               <textarea className="form-control custom-area" id="lead-comment" rows="3" value={lead.comment}></textarea>
                           </div>
                       </div>
                   </div>
               </div>
           </form>
       )
    }
}
