import React, {Component} from 'react';
import './LeadList.scss';
import Spinner from "../Spinner/Spinner";
import LeadTable from "./LeadTable/LeadTable";
import {Roles} from '../../constatnts/roles'

export default class LeadList extends Component{

    componentDidMount() {
        this.props.fetchLeadList();
    };

    onLeadClick = (id) => {
        this.props.openLeadHandler(id);
    };


    render() {
        const {currentWorker, list, addLeadCardOpen, spinner, sources, statuses, availableWorkers, showImportModal } = this.props;
        return (
            <div>
                {spinner ? <Spinner/> : ''}
                <button className="btn btn-success btn-sm btn-add" onClick={addLeadCardOpen}>Добавить лид</button>
                {currentWorker && currentWorker.roleId === Roles.supervisor ? (
                    <button className="btn btn-primary btn-sm btn-import" onClick={showImportModal}>Импорт лидов</button>
                ): null}
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
