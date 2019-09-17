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
                    <LeadDetailCard
                        lead = {lead}
                        addLead = {addLead}
                        editLead = {editLead}
                        submitFromOutside={this.state.submitFromOutside}
                        unSubmitForm = {this.unSubmitForm}
                    />
                    {!lead
                        ? <button onClick={this.submitForm} className="btn btn-success">Добавить</button>
                        : <button onClick={this.submitForm} className="btn btn-success">Редактировать</button>
                    }
                    <button className="btn btn-primary" onClick={hideModal}>Close</button>
                </div>
            </Fragment>
        )
    }
}
