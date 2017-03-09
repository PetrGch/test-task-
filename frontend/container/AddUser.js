import { connect } from 'react-redux';
import Table from '../table/Table';

const mapStateToProps = (state) => {
    return {
        data:           state.addUser,
        sortType:       state.sortedList,
        filterList:     state.filteredList
    }
};

const AddUser = connect(
    mapStateToProps
)(Table);

export default AddUser;