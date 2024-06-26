import { createRoot } from 'react-dom/client';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// google-fonts
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

// map
// import 'mapbox-gl/dist/mapbox-gl.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';

import './index.css';

// project import
import App from './App';
// import { ConfigProvider } from 'contexts/ConfigContext';
// map
import reportWebVitals from './reportWebVitals';
// import { KeycloakProvider } from 'contexts/KeycContext';
const container = document.getElementById('root');
// Redux
import store from './redux/store';
import { Provider } from 'react-redux';
const root = createRoot(container);
// ==============================|| MAIN - REACT DOM RENDER ||============================== //

root.render(
  // <ConfigProvider>
  <Provider store={store}>
    <App />
  </Provider>
  // </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
