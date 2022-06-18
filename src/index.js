import React from 'react';
import ReactDOM from 'react-dom';
import profilePic from './images/profile-pic-javiera.JPEG'

const stylesProfilePic = {
  width:'150px',
  height: '150px',
  borderRadius: '150px'
};

const imgProfile = <img src={profilePic} style={stylesProfilePic}/>;
const title = <h1>Javiera Rico <i class='fa-solid fa-circle-check' style={{color: '#72dbd3'}}></i></h1>;
//const verifiedIcon
const txt = <p>Web Developer, Argentina</p>;

const header = (
  <div class='headerWrapper'>
    {imgProfile}
    {title}
    {txt}
  </div>
);

const skillsTxt = <h4>SKILLS</h4>;
const techs = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'NodeJS', 'Git', 'GitHub', 'NPM'];

const buttonStyles = {
  border: 'none',
  backgroundColor: '#72dbd3',
  padding: '1%',
  color: '#ffffff',
  borderRadius: '5px'
}

const techsFormatted = techs.map((tech)=><button key={tech} style={buttonStyles}>{tech}</button>)
const joined = <p><i class='fa-regular fa-clock'></i>  Joined On Aug 30, 2020</p>;

const techsWrapperStyles = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1%'
}

const main = (
  <div class='mainWrapper'>
    {skillsTxt}
    <div class='techsWrapper' style={techsWrapperStyles}>
      {techsFormatted}
    </div>
    {joined}
  </div>
);

const app = (
  <div>
    {header}
    {main}
  </div>
)

const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);