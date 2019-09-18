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
        const { list, addLeadCardOpen, spinner } = this.props;
        return (
            <div>
                {spinner ? <Spinner/> : ''}
                <button className="btn btn-success btn-sm" onClick={addLeadCardOpen}>Добавить лид</button>
                <LeadTable list = {list} onLeadClick={this.onLeadClick}/>
            </div>
        )
    }
}
