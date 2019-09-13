import React, {Component, Fragment} from 'react';
import './LeadDetail.css';
import Spinner from "../Spinner/Spinner";
import Overlay from "../Overlay/Overlay";

export default class LeadDetail extends Component{

    render() {
        const {lead, spinner, modal, hideModal} = this.props;
        if (spinner) return <Spinner/>;
        if (!modal) return null;
        console.log(lead);
        return (
            <Fragment>
                <Overlay/>
                <div className="lead-detail-modal">
                    <p>{lead.fio}</p>
                    <button className="btn btn-primary" onClick={hideModal}>Close</button>
                </div>
            </Fragment>
        )
    }
}
