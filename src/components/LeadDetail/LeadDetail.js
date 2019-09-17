import React, {Component, Fragment} from 'react';
import './LeadDetail.css';
import Spinner from "../Spinner/Spinner";
import Overlay from "../Overlay/Overlay";
import LeadDetailCard from "./LeadDetailCard/LeadDetailCard";

export default class LeadDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            submitFromOutside: false
        }
    }

    submitForm = () => {
        this.setState({
            submitFromOutside: true
        });
    };

    unSubmitForm = () => {
        this.setState({
            submitFromOutside: false
        });
    };

    render() {
        const {lead, spinner, modal, hideModal, addLead, editLead} = this.props;
        if (!modal) return null;
        return (
            <Fragment>
                <Overlay/>
                {spinner ? <Spinner/> : ''}
                <div className="lead-detail-modal">
                    <div className="lead-detail-header">{lead ? `Редактирование лида с id: ${lead.id}` : `Добавление нового лида`}</div>
                    <LeadDetailCard
                        lead = {lead}
                        addLead = {addLead}
                        editLead = {editLead}
                        submitFromOutside={this.state.submitFromOutside}
                        unSubmitForm = {this.unSubmitForm}
                    />
                    <div className="lead-detail-footer">
                        <button onClick={this.submitForm} className="btn btn-success lead-btn">{lead ? 'Сохранить' : 'Добавить'}</button>
                        <button className="btn btn-primary lead-btn" onClick={hideModal}>Закрыть</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
