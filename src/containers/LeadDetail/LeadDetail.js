import { connect } from 'react-redux';
import LeadDetail from "../../components/LeadDetail/LeadDetail";
import {hideModal} from "./actions";


function mapStateToProps(state) {
    return {
        spinner: state.leadDetail.spinner,
        modal: state.leadDetail.modal,
        lead: state.leadDetail.lead
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch(hideModal())
    }
}

const LeadDetailContainer = connect(mapStateToProps, mapDispatchToProps)(LeadDetail);

export default LeadDetailContainer;
