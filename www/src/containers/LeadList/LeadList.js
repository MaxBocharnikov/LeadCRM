import { connect } from 'react-redux';
import LeadList from "../../components/LeadList/LeadList";
import {fetchLeadList} from "./actions";
import {fetchLeadDetail, showModal} from "../LeadDetail/actions";
import {showImportModal} from '../ImportModal/actions';


function mapStateToProps(state) {
    return {
        list: state.leadList.list,
        spinner: state.leadList.spinner,
        sources: state.userData.sources,
        statuses: state.userData.statuses,
        availableWorkers: state.userData.availableWorkers,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLeadList: () => dispatch(fetchLeadList()),
        openLeadHandler: (id) => dispatch(fetchLeadDetail(id)),
        addLeadCardOpen: () => dispatch(showModal()),
        showImportModal: () => dispatch(showImportModal())
    }
}

const LeadListContainer = connect(mapStateToProps, mapDispatchToProps)(LeadList);

export default LeadListContainer;