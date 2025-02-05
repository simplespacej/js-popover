import './style.css';
import Popover from './popover';

const button = document.getElementById('popover-button');
new Popover(button, 'Popover title', 'And here\'s some amazing content. It\'s very engaging. Right?');
