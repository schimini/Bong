import { h, render } from 'preact';
import App from './pages/options/app';
import browser from 'webextension-polyfill';

render(<App />, document.body);
