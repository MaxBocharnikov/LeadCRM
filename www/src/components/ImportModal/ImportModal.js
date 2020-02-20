import React, {Component, Fragment} from 'react';
import Overlay from '../Overlay/Overlay';
import './ImportModal.scss';
import * as XLSX from 'xlsx';
import Spinner from '../Spinner/Spinner';

export default class ImportModal extends Component {
    state = {
        source: '',
        data: null,
    };


    onItemChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    onFileChange = event => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = event => {
            this.setState({
                ...this.state,
                data: this.parseExcel(event)
            });
        };
        reader.readAsBinaryString(file)
    };

    parseExcel = event => {
        const bstr  = event.target.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, {defval:""});
        return data;
    };

    getFormattedData = () => {
        const formattedData = [];
        this.state.data.forEach(obj => {
            formattedData.push({
                'source': this.state.source,
                'fio': obj['ФИО'],
                'phone': obj['Телефон'],
                'email': obj['Email'],
                'address': obj['Адрес'],
                'comment': obj['Комментарий']
            });
        });
        return formattedData;
    };

    isImportFormAvaliable = () => {
        return this.state.source && this.state.data && !this.props.loading;
    };

    submit = event => {
        event.preventDefault();
        const formattedData = this.getFormattedData();
        this.props.addLeadsByImport(formattedData);
    }


    render() {
        const {isImportModalShown, hideImportModal, avaliableSources, importError, loading} = this.props;
        const {source} = this.state;
        const errorMessage = importError ? <span className="import-error-message">Что то пошло не так. Повторите попытку.</span> : null;
        if(!isImportModalShown) return null;
        const spinner = loading ? <Spinner/> : null;
        return (
            <Fragment>
                <Overlay/>
                {spinner}
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
                            {errorMessage}
                        </div>
                        <div className="import-modal-footer">
                            <button
                                disabled={!this.isImportFormAvaliable()}
                                className="btn btn-success import-modal-download"
                                onClick={this.submit}>Загрузить
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