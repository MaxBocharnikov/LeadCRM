export default class LeadService {

     leadList = [
        {
            id: 1,
            date: '01-01-2019',
            fio: 'Иванов Иван',
            phone: '123456789',
            source: 'some source',
            status: 'Не обработан',
            supervisor: 'Прунькин Михаил',
            responsible: 'Виктория Сарко'
        },
        {
            id: 2,
            date: '03-01-2019',
            fio: 'Петров Петр',
            phone: '123456789',
            source: 'some source',
            status: 'Не обработан',
            supervisor: 'Прунькин Михаил',
            responsible: 'Виктория Сарко'
        },
        {
            id: 3,
            date: '05-01-2019',
            fio: 'Сидоров Сидр',
            phone: '123456789',
            source: 'some source',
            status: 'Не обработан',
            supervisor: 'Прунькин Михаил',
            responsible: 'Виктория Сарко'
        }
    ];

    getLeadList = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.leadList);
            }, 1500)
        });
    };

    getLeadById = (id) => {
        return new Promise((resolve) => {
            const foundLead = this.leadList.find(it => it.id === id);
            setTimeout(() => {
                resolve(foundLead);
            }, 1500)
        });
    };
}