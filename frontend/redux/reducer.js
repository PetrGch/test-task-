import { combineReducers } from 'redux';
import { ADD_USER, SORT_LIST, FILTER_USER, sortType } from './action';
import { setToStorage } from '../_utils/storage';

const { SORT_BY_NAME } = sortType;

const addUser = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            let data = {
                name:   action.name,
                phone:  action.phone,
                email:  action.email
            };
            setToStorage(data);

            return [
                ...state,
                data
            ];
        default:
            return state;
    }
};

function sortedList(state = SORT_BY_NAME, action) {
    switch (action.type) {
        case SORT_LIST:
            return action.sortBy;
        default:
            return state
    }
}

function filteredList(state = '', action) {
    switch (action.type) {
        case FILTER_USER:
            return action.filterBy;
        default:
            return state;
    }
}

const userApp = combineReducers({
   addUser,
   sortedList,
   filteredList
});

export default userApp;