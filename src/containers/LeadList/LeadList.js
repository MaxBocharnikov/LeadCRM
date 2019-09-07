import { connect } from 'react-redux';
import LeadList from "../../components/LeadList/LeadList";
import {fetchLeadList} from "./actions";


function mapStateToProps(state) {
    return {
        list: state.leadList.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLeadList: () => dispatch(fetchLeadList())
    }
}

const LeadListContainer = connect(mapStateToProps, mapDispatchToProps)(LeadList);

export default LeadListContainer;