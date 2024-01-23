import './App.css';
import { IconMail, IconBrandFacebook, IconBrandDeviantart, IconBrandGithubFilled, IconBrandInstagram } from '@tabler/icons-react';
import AboutMe from './components/AboutMe/AboutMe';
import Avatar from './components/Avatar/Avatar';
import Footer from './components/Footer/Footer';
import MyInfo from './components/MyInfo/MyInfo';
import SocialNetworks from './components/SocialNetworks/SocialNetworks';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <Avatar photo="../img/Creator125_old.png"/>
        <div className='info'>
          <MyInfo name="Obed Córdoba" position="Desarrollador Junior" work="Game Develope"/>
          <SocialNetworks icon={<IconMail/>} name="Email"/>
          <AboutMe title="About" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
          <AboutMe title="Interest" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
          <Footer content={<div><IconBrandFacebook/>  <IconBrandDeviantart /> <IconBrandGithubFilled /> <IconBrandInstagram /></div>}/>
        </div>
      </div>
    </div>
  );
}

export default App;
