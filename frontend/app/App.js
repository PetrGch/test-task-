import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userApp from '../redux/reducer';
import Form from '../form/Form';
import AddUser from '../container/AddUser';

let store = createStore(userApp);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app row">
                    <Form/>
                    <AddUser/>
                </div>
            </Provider>
        );
    }
}