import { getFromStorage } from '../../_utils/storage';
import { connect } from 'react-redux';

function sortByName (a, b) {
    return a.name - b.name;
}

function sortByPhone (a, b) {
    return a.phone - b.phone;
}

function sortByEmail (a, b) {
    return a.email - b.email;
}

function switchSortFunction(sortType) {
    switch (sortType) {
        case 'SORT_BY_NAME':
            return sortByName;
        case 'SORT_BY_PHONE':
            return sortByPhone;
        case 'SORT_BY_EMAIL':
            return sortByEmail;
    }
}

class Row extends React.Component {
    render() {
        let props = this.props;
        let oldData = [];
        let storageData = JSON.parse(getFromStorage());
        let typeOfSortFunctin = switchSortFunction(props.sortedList);

        for (let prop in storageData) {
            if (storageData.hasOwnProperty(prop)) {
                oldData.push(storageData[prop]);
            }
        }

        let result = oldData.sort(typeOfSortFunctin).map((prop, index) => {
            let name = prop.name.toLowerCase();
            let phone = prop.phone.toLowerCase();
            let email = prop.email.toLowerCase();
            let request = props.filterList.toLowerCase();

            if (request === '' || name.indexOf(request) != -1
                || phone.indexOf(request) != -1
                || email.indexOf(request) != -1) {
                return (
                    <tr key={index}>
                        <td>{prop.name}</td>
                        <td>{prop.phone}</td>
                        <td>{prop.email}</td>
                    </tr>
                );
            }
        });

        return (
            <tbody>
                {result}
            </tbody>
        );
    }
}

Row.propTypes = {
    data: PropTypes.array.isRequired,
    sortedList: PropTypes.string.isRequired,
    filterList: PropTypes.string.isRequired
};

Row = connect()(Row);

export default Row