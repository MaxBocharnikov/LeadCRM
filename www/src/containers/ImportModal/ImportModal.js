import { connect } from 'react-redux';
import {addLeadsByImport, hideImportModal, showImportModal} from './actions';
import ImportModal from '../../components/ImportModal';

function mapStateToProps(state) {
    return {
        isImportModalShown: state.importModal.isImportModalShown,
        avaliableSources: state.userData.sources,
        importError: state.importModal.importError,
        loading: state.importModal.loading,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        showImportModal: () => dispatch(showImportModal()),
        hideImportModal: () => dispatch(hideImportModal()),
        addLeadsByImport: (data) => dispatch(addLeadsByImport(data))
    }
}


const ImportModalContainer = connect(mapStateToProps,mapDispatchToProps)(ImportModal);

export default ImportModalContainer;