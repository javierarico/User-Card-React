import React from 'react';
import ReactDOM from 'react-dom';
import profilePic from './images/javiera.jpeg'

const stylesProfilePic = {
  width:'150px',
  height: '150px',
  borderRadius: '150px',
};

const imgProfile = <img src={profilePic} style={stylesProfilePic} alt='user profile pic'/>;
const title = <h1 style={{fontSize: '120%', fontFamily: 'Rubik, sans-serif'}}>Javiera Rico <i className='fa-solid fa-circle-check' style={{color: '#72dbd3'}}></i></h1>;
//const verifiedIcon
const txt = <p style={{fontSize: '80%', fontFamily: 'Rubik, sans-serif'}}>Front End Web Developer, Argentina</p>;

const header = (
  <div className='headerWrapper'>
    {imgProfile}
    {title}
    {txt}
  </div>
);

const skillsTxt = <h4 style={{fontSize: '90%', fontFamily: 'Rubik, sans-serif'}}>SKILLS</h4>;
const techs = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'React', 'NodeJS', 'GSAP', 'Git', 'GitHub', 'NPM', 'Google Web Designer', 'Photoshop'];

const buttonStyles = {
  border: 'none',
  backgroundColor: '#72dbd3',
  padding: '.7%',
  fontSize: '70%',
  color: '#ffffff',
  borderRadius: '5px',
  fontFamily: 'Rubik, sans-serif',
}

const techsFormatted = techs.map((tech)=><button key={tech} style={buttonStyles}>{tech}</button>)
const joined = <p style={{fontSize: '80%', fontFamily: 'Rubik, sans-serif'}}><i className='fa-regular fa-clock'></i>  Joined On Aug 30, 2020</p>;

const techsWrapperStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 100px)',
  gridAutoRows: '40px',
  gridAutoColumns: '1fr',
  gridAutoFlow: 'dense',
  gap: '10px 1%',
}

const main = (
  <div className='mainWrapper'>
    {skillsTxt}
    <div className='techsWrapper' style={techsWrapperStyles}>
      {techsFormatted}
    </div>
    {joined}
  </div>
);

const app = (
  <div className='appWrapper' style={{padding: '3% 2%'}}>
    {header}
    {main}
  </div>
)

const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);