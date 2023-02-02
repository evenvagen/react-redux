import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
import CompaniesReducer from './reducers/companiesReducer';
 
const rootReducer = combineReducers({
  count: CountReducer,
  companies: CompaniesReducer,
});
 
export const store = createStore(rootReducer);