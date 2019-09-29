import { connect } from 'react-redux';
import {fetchWorker} from '../UserData/actions';
import Home from '../../components/Pages/Home/Home';

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchWorker: () => dispatch(fetchWorker())
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
