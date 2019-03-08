import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

//Redux initial state


//Creating a store. The devtools extension is by default like that. That's just for the browser
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;