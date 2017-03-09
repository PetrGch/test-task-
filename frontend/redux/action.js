export const ADD_USER = 'ADD_USER';
export const SORT_LIST = 'SORT_LIST';
export const FILTER_USER = 'FILTER_USER';

export const sortType = {
    SORT_BY_NAME: 'SORT_BY_NAME',
    SORT_BY_PHONE: 'SORT_BY_PHONE',
    SORT_BY_EMAIL: 'SORT_BY_EMAIL'
};

export const addUser = (_name, _phone, _email) => {
    return {
        type:   ADD_USER,
        name:   _name,
        phone:  _phone,
        email:  _email
    }
};

export const sortList = (sortBy) =>{
    return {
        type: SORT_LIST,
        sortBy
    }
};

export const filterUser = (filterBy) => {
    return {
        type: FILTER_USER,
        filterBy
    }
};
