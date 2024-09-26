import { Provider, useSelector } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';
import Footer from './components/Footer';

function App() {

  return (
      <Provider store={appStore}>
        <ThemedApp />
      </Provider>
  );
}


const ThemedApp = () => {
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);

  return (
    <div className={`App ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
