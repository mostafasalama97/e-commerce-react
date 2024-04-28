import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from '@routes/AppRouter';
import "@styles/globsl.css"
import { Provider } from 'react-redux';
import { store } from './store';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
