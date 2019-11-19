import React, {Fragment} from 'react';
import FilterContainer from '../../../containers/Filter/Filter';
import LeadDetailContainer from '../../../containers/LeadDetail/LeadDetail';
import LeadListContainer from '../../../containers/LeadList/LeadList';
import HeaderContainer from '../../../containers/Header/Header';
import { withRouter } from 'react-router-dom'

export default class Home extends React.Component {

    componentDidMount() {
        if(!this.props.isAuth) {
            this.props.history.push('/');
            return;
        }
        this.props.fetchWorker();
        this.props.fetchSources();
        this.props.fetchStatuses();
        this.props.fetchAvailableWorkers();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.isAuth !== this.props.isAuth) {
            if(!this.props.isAuth) {
                this.props.history.push('/');
            }
        }
    }

    render() {
        if(this.props.isAuth) {
            return (
                <Fragment>
                    <HeaderContainer/>
                    <FilterContainer/>
                    <LeadListContainer/>
                    <LeadDetailContainer/>
                </Fragment>
            )
        }
        return null;
    }
};

