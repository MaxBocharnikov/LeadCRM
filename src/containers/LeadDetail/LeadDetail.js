import { connect } from 'react-redux';
import LeadDetail from "../../components/LeadDetail/LeadDetail";
import {addLead, editLead, hideModal} from "./actions";


function mapStateToProps(state) {
    return {
        spinner: state.leadDetail.spinner,
        modal: state.leadDetail.modal,
        lead: state.leadDetail.lead
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch(hideModal()),
        addLead: (lead) => dispatch(addLead(lead)),
        editLead: (lead) => dispatch(editLead(lead))
    }
}

const LeadDetailContainer = connect(mapStateToProps, mapDispatchToProps)(LeadDetail);

export default LeadDetailContainer;
