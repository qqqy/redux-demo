import { createStore } from 'redux';
import reducer from './reducer';

// createStore is a function from redux. It takes in a function called a reducer. 
export default createStore(reducer);