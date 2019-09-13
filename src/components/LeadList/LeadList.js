import React, {Component} from 'react';
import './LeadList.css';
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
        const { list } = this.props;
        if (!list.length) return <Spinner/>;
        return (
            <div>
                <LeadTable list = {list} onLeadClick={this.onLeadClick}/>
            </div>
        )
    }
}
