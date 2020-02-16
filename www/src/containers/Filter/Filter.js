import { connect } from 'react-redux';
import Filter from "../../components/Filter/Filter";
import {fetchLeadList} from "../LeadList/actions";
import {
    onDateChange, onFioChange, onItemChange, onPhoneChange, onResponsibleChange, onSourceChange, onStatusChange,
    onSupervisorChange,
    resetFilter
} from "./actions";


function mapStateToProps(state) {
    return {
        phone: state.filter.phone,
        fio: state.filter.fio,
        date: state.filter.date,
        source: state.filter.source,
        status: state.filter.status,
        supervisor: state.filter.supervisor,
        responsible: state.filter.responsible,
        availableWorkers: state.userData.availableWorkers,
        availableSources: state.userData.sources,
        availableStatuses: state.userData.statuses,
        currentWorker: state.userData.worker
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLeadList: () => dispatch(fetchLeadList()),
        resetFilter: () => dispatch(resetFilter()),
        onItemChange: (name, value) => dispatch(onItemChange(name, value)),
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
