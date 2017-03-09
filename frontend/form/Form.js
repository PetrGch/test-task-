import Modal from './modal/Modalwindow';
import { connect } from 'react-redux';
import { filterUser } from '../redux/action';

class Form extends React.Component {
    render() {
        let props = this.props;
        let inputValue;

        return (
            <div className="add-form ">
                <form onSubmit={e => {e.preventDefault()}} className="row">
                    <div className="col-lg-8">
                        <input
                            onChange={() => {
                                props.dispatch(filterUser(inputValue.value));
                            }}
                            ref={node => {inputValue = node}}
                            className="add-form__filter"
                            type="text"
                            placeholder="Фильтер"/>
                    </div>
                    <div className="col-lg-4 text-right">
                        <button
                            className="add-form__button btn btn-default"
                            type="submit"
                            data-toggle="modal"
                            data-target="#myModal"
                        >
                            Добавить
                        </button>
                    </div>
                </form>

                <div className="modal-container ">
                    <div className="modal" id="myModal" role="dialog">
                        <Modal/>
                    </div>
                </div>
            </div>
        );
    }
}

Form = connect()(Form);

export default Form;