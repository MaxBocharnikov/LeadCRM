import { connect } from 'react-redux';
import Filter from "../../components/Filter/Filter";
import {fetchLeadList} from "../LeadList/actions";
import {
    onDateChange, onFioChange, onPhoneChange, onResponsibleChange, onSourceChange, onStatusChange, onSupervisorChange,
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
        onPhoneChange: (event) => dispatch(onPhoneChange(event)),
        onFioChange: (event) => dispatch(onFioChange(event)),
        onDateChange: (event) => dispatch(onDateChange(event)),
        onSourceChange: (event) => dispatch(onSourceChange(event)),
        onStatusChange: (event) => dispatch(onStatusChange(event)),
        onResponsibleChange: (event) => dispatch(onResponsibleChange(event)),
        onSupervisorChange: (event) => dispatch(onSupervisorChange(event)),
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
