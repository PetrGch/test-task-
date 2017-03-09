import { Router, browserHistory } from 'react-router'
import router from './router';
import 'jquery';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './index.css';

ReactDOM.render(
    <Router routes={router} history={browserHistory}/>,
    document.getElementById('root')
);