import "./assets/scss/index.scss";
import "./libs/i18n"
import {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
