import ReactDOM from 'react-dom/client';

import { setupTelegramMock } from '@shared/mocks';

import './index.scss';

import App from './app';

setupTelegramMock();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
