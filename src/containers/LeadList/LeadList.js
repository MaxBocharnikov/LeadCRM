import { connect } from 'react-redux';
import LeadList from "../../components/LeadList/LeadList";
import {fetchLeadList} from "./actions";
import {fetchLeadDetail, showModal} from "../LeadDetail/actions";


function mapStateToProps(state) {
    return {
        list: state.leadList.list,
        spinner: state.leadList.spinner
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLeadList: () => dispatch(fetchLeadList()),
        openLeadHandler: (id) => dispatch(fetchLeadDetail(id)),
        addLeadCardOpen: () => dispatch(showModal())
    }
}

const LeadListContainer = connect(mapStateToProps, mapDispatchToProps)(LeadList);

export default LeadListContainer;