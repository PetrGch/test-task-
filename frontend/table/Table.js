import { connect } from 'react-redux';
import { sortList } from '../redux/action';
import { sortType } from '../redux/action';
import Row from './row/Row';

class Table extends React.Component {
    render() {
        let props = this.props;

        return (
            <div className="table">
                <table className="table">
                    <thead className="table__header">
                    <tr className="table-row">
                        <th><span
                            onClick={() =>
                                {props.dispatch(sortList(sortType.SORT_BY_NAME))}
                            }
                            className="table-row__row"
                        >&#9660;</span>ФИО</th>
                        <th><span
                            onClick={() =>
                            {props.dispatch(sortList(sortType.SORT_BY_PHONE))}
                            }
                            className="table-row__row"
                        >&#9660;</span>Телефон</th>
                        <th><span
                            onClick={() =>
                            {props.dispatch(sortList(sortType.SORT_BY_EMAIL))}
                            }
                            className="table-row__row"
                        >&#9660;</span>email</th>
                    </tr>
                    </thead>

                    <Row
                        data={props.data}
                        sortedList={props.sortType}
                        filterList={props.filterList}
                    />
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    sortType: PropTypes.string.isRequired,
    filterList: PropTypes.string.isRequired
};

Table = connect()(Table);

export default Table;