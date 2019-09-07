import React, {Component} from 'react';
import './LeadList.css';
import Spinner from "../Spinner/Spinner";
import LeadTable from "./LeadTable/LeadTable";


export default class LeadList extends Component{

    componentDidMount() {
        this.props.fetchLeadList();
    }

    render() {
        const { list } = this.props;
        if (!list.length) return <Spinner/>;
        return (
            <div>
                <LeadTable list = {list}/>
            </div>
        )
    }
}
