import React, {Component} from 'react';
import './LeadList.scss';
import Spinner from "../Spinner/Spinner";
import LeadTable from "./LeadTable/LeadTable";


export default class LeadList extends Component{

    componentDidMount() {
        this.props.fetchLeadList();
    };

    onLeadClick = (id) => {
        this.props.openLeadHandler(id);
    };


    render() {
        const { list, addLeadCardOpen, spinner, sources, statuses, availableWorkers, showImportModal } = this.props;
        return (
            <div>
                {spinner ? <Spinner/> : ''}
                <button className="btn btn-success btn-sm btn-add" onClick={addLeadCardOpen}>Добавить лид</button>
                <button className="btn btn-primary btn-sm btn-import" onClick={showImportModal}>Импорт лидов</button>
                <LeadTable
                    list = {list}
                    onLeadClick={this.onLeadClick}
                    sources={sources}
                    statuses={statuses}
                    availableWorkers={availableWorkers}
                />
            </div>
        )
    }
}
