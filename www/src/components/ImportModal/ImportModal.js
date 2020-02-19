import React, {Component, Fragment} from 'react';
import Overlay from '../Overlay/Overlay';
import './ImportModal.scss';


export default class ImportModal extends Component {

    fileValue = null;

    state = {
        source: '',
        excelFile: null,
    };


    onItemChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    onFileChange = event => {
        this.setState({
            ...this.state,
            excelFile: event.target.files[0],
        });
        // let files = event.target.files;
        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);
        // reader.onload = e => {
        //     this.fileValue = event.target.result
        // }
    }

    isImportFormAvaliable = () => {
        return this.state.source && this.state.excelFile;
    };

    downLoadExcelFile = event => {
        event.preventDefault();
        this.props.downLoadExcelFile(this.state);
    }


    render() {
        const {isImportModalShown, hideImportModal, avaliableSources} = this.props;
        const {source, excelFileName} = this.state;
        if(!isImportModalShown) return null;
        return (
            <Fragment>
                <Overlay/>
                <div className="import-modal">
                    <form className="import-modal-form">
                        <div className="import-modal-form-content">
                            <div className="form-group">
                                <label htmlFor="source">Выберите источник</label>
                                <select
                                    value={source}
                                    className="form-control"
                                    id="source"
                                    name="source"
                                    onChange={this.onItemChange}
                                >
                                    <option value=''>Не выбрано</option>
                                    {avaliableSources ? avaliableSources.map(source => (
                                        <option key={source.id} value={source.id}>{source.title}</option>
                                    )): null}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Выберите excel файл</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="excel_file"
                                    name="excelFile"
                                    onChange={this.onFileChange}
                                />
                            </div>
                        </div>
                        <div className="import-modal-footer">
                            <button
                                disabled={!this.isImportFormAvaliable()}
                                className="btn btn-success import-modal-download"
                                onClick={this.downLoadExcelFile}>Загрузить
                            </button>
                            <button
                                className="btn btn-primary import-modal-close"
                                onClick={hideImportModal}>Закрыть
                            </button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}