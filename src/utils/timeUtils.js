import moment from 'moment';


export function formatDate(date, format) {
    switch (format) {
        case 'shortDate': {
            return moment(date, 'DD-MM-YYYY').format('DD-MM-YYYY');
        }
        case 'date': {
            return moment(date).format('DD-MM-YYYY HH:mm:ss');
        }

        default: {
            return moment(date).format();
        }
    }
}