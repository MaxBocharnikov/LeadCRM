import { connect } from 'react-redux';
import LeadList from "../../components/LeadList/LeadList";
import {fetchLeadList} from "./actions";
import {fetchLeadDetail} from "../LeadDetail/actions";


function mapStateToProps(state) {
    return {
        list: state.leadList.list,
        detailsLoading: state.leadDetail.showSpinner
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLeadList: () => dispatch(fetchLeadList()),
        openLeadHandler: (id) => dispatch(fetchLeadDetail(id))
    }
}

const LeadListContainer = connect(mapStateToProps, mapDispatchToProps)(LeadList);

export default LeadListContainer;