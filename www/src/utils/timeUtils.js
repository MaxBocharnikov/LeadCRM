import moment from 'moment';


export function formatDate(date, format) {
    if(!date) return '';
    const formDate = new Date(date);
    switch (format) {
        case 'shortDate': {
            return moment(formDate, 'DD-MM-YYYY').format('DD-MM-YYYY');
        }
        case 'date': {
            return moment(formDate).format('DD-MM-YYYY HH:mm:ss');
        }

        default: {
            return moment(formDate).format();
        }
    }
}