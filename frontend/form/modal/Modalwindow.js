export default class Modal extends React.Component {
    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <label htmlFor="name">
                            ФИО<sup>*</sup>
                            <input type="text" name="name" required="required"/>
                        </label>
                        <br/>
                        <label htmlFor="phone" required="required">
                            Телефон<sup>*</sup>
                            <input type="text" required="required"/>
                        </label>
                        <br/>
                        label
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        );
    }
}