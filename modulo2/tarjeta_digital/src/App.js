import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Avatar from './components/Avatar/Avatar';
import MyInfo from './components/MyInfo/MyInfo';
import SocialNetworks from './components/SocialNetworks/SocialNetworks';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <Avatar photo="../img/Creator125_old.png"/>
        <MyInfo name="Obed Córdoba" position="Desarrollador Junior" work="Game Develope"/>
        <SocialNetworks icon="../img/brand-gmail.svg" name="Email"/>
        <AboutMe title="About" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
        <AboutMe title="Interest" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>


      </div>
    </div>
  );
}

export default App;
