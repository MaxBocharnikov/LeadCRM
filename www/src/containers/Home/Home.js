import { connect } from 'react-redux';
import {fetchAvailableWorkers, fetchSources, fetchStatuses, fetchWorker} from '../UserData/actions';
import Home from '../../components/Pages/Home/Home';

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchWorker: () => dispatch(fetchWorker()),
        fetchSources: () => dispatch(fetchSources()),
        fetchStatuses: () => dispatch(fetchStatuses()),
        fetchAvailableWorkers: () => dispatch(fetchAvailableWorkers())
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
