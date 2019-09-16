import React, {Component, Fragment} from 'react';
import './LeadDetail.css';
import Spinner from "../Spinner/Spinner";
import Overlay from "../Overlay/Overlay";
import LeadDetailCard from "./LeadDetailCard/LeadDetailCard";

export default class LeadDetail extends Component{

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
                        hideModal = {hideModal}
                    />
                </div>
            </Fragment>
        )
    }
}
