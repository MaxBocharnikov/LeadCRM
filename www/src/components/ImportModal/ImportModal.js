import React, {Component, Fragment} from 'react';
import Overlay from '../Overlay/Overlay';
import './ImportModal.scss';

import Spinner from '../Spinner/Spinner';
import ImportService from '../../services/importService';

export default class ImportModal extends Component {

    importService = null;

    constructor(props) {
        super(props);
        this.importService = new ImportService();
    }

    state = {
        source: '',
        data: null,
        invalidFileType: false
    };


    onItemChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    onFileChange = async event => {
        try {
            const data = await this.importService.readFile(event);
            this.setState({
                ...this.state,
                invalidFileType: false,
                data
            });
        } catch(e) {
            this.setState({
                ...this.state,
                invalidFileType: true
            });
        }

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
        return this.state.source && this.state.data && !this.props.loading && !this.state.invalidFileType;
    };

    submit = event => {
        event.preventDefault();
        const formattedData = this.getFormattedData();
        this.props.addLeadsByImport(formattedData);
    };

    renderErrorMessage = (message) => {
      return (
          <span className="import-error-message">{message}</span>
      )
    };


    render() {

        const {isImportModalShown, hideImportModal, avaliableSources, importError, loading} = this.props;
        const {source, invalidFileType} = this.state;
        const invalidFileMessage = invalidFileType ? this.renderErrorMessage('Некорректный тип файла') : null;
        const errorMessage = importError ? this.renderErrorMessage('Что то пошло не так, повторите попытку') : null;
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
                            {invalidFileMessage}
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