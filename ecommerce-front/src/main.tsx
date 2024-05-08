import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from '@routes/AppRouter';
import "@styles/globsl.css"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store';
import { store } from './store';
import "./services/axios-global.js";
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
        </PersistGate>
    </Provider>
)
