import { connect } from 'react-redux';
import {downLoadExcelFile, hideImportModal, showImportModal} from './actions';
import ImportModal from '../../components/ImportModal';

function mapStateToProps(state) {
    return {
        isImportModalShown: state.importModal.isImportModalShown,
        avaliableSources: state.userData.sources
    }
}


function mapDispatchToProps(dispatch) {
    return {
        showImportModal: () => dispatch(showImportModal()),
        hideImportModal: () => dispatch(hideImportModal()),
        downLoadExcelFile: (importObj) => dispatch(downLoadExcelFile(importObj))
    }
}


const ImportModalContainer = connect(mapStateToProps,mapDispatchToProps)(ImportModal);

export default ImportModalContainer;