import ReactDOM, { Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './app/Routes';

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as Element
);
root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);

reportWebVitals(console.log);
