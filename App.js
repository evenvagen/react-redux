import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import { Companies } from './src/screens/Companies';
import { store } from './src/redux/store';
 
export default function App() {
  return (
    <Provider store={store}>
      <Companies />
    </Provider>
  );
}