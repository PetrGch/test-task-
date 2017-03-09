import { connect } from 'react-redux';
import { addUser } from '../../redux/action';

class Modal extends React.Component {
    render() {
        const props = this.props;
        let name;
        let phone;
        let email;

        return (
            <div className="add-modal modal-dialog modal-sm">
                <div className="add-modal__content modal-content">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (!name.value.trim() || !phone.value.trim()) {
                            return;
                        }

                        props.dispatch(addUser(name.value, phone.value, email.value));
                        name.value = '';
                        phone.value = '';
                        email.value = '';
                    }}>
                        <div className="modal-input modal-body">
                            <label className="modal-input__item_label" htmlFor="name">
                                ФИО<sup>*</sup>:
                            </label>
                            <input type="text" ref={node => {name = node}} className="modal-input__item_input" name="name" required="required"/>
                            <br/>
                            <label className="modal-input__item_label" htmlFor="phone">
                                Телефон<sup>*</sup>:
                            </label>
                            <input type="text" ref={node => {phone = node}} className="modal-input__item_input" name="phone" required="required"/>
                            <br/>
                            <label className="modal-input__item_label" htmlFor="email">
                                email<sup>*</sup>:
                            </label>
                            <input type="email" ref={node => {email = node}} className="modal-input__item_input" name="email"/>
                        </div>
                        <div className="modal-button modal-footer">
                            <button type="button"
                                    className="modal-button__item btn btn-default"
                                    data-dismiss="modal"
                            >Отмена</button>
                            <button type="submit"
                                    className="modal-button__item btn btn-default"
                            >Добавить</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Modal = connect()(Modal);

export default Modal;