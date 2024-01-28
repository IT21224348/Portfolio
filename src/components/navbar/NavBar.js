import './navbar.css'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'




export default function NavBar() {

 
    const scrollToHome = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const scrollToHomeBtn = document.getElementById('scrollToHome');
        const scrollToRoadmapBtn = document.getElementById('scrollToRoadmap');
        const scrollToSkillsBtn = document.getElementById('scrollToSkills');
        const scrollToProjectsBtn = document.getElementById('scrollToProjects');
        const scrollToServicesBtn = document.getElementById('scrollToServices')
        const scrollToContactBtn = document.getElementById('scrollToContact');
        const scrollToCertificateBtn = document.getElementById('scrollToCertificate');

        const handleScroll = () => {
            if (window.scrollY > 20) {
                scrollToHomeBtn.style.display = 'block';
            } else {
                scrollToHomeBtn.style.display = 'block';
            }
        };
        

        const scrollToHome = (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };


        const scrollToSection = ( position) => {
            // e.preventDefault();
            window.scrollTo({ top: position, behavior: 'smooth' });
        };

        window.addEventListener('scroll', handleScroll);

        scrollToHomeBtn.addEventListener('click', scrollToHome);
        scrollToRoadmapBtn.addEventListener('click', () => scrollToSection(800));
        scrollToSkillsBtn.addEventListener('click', () => scrollToSection(1700));
        scrollToProjectsBtn.addEventListener('click', () => scrollToSection(2500));
        scrollToServicesBtn.addEventListener('click', () => scrollToSection(4000));
        scrollToCertificateBtn.addEventListener('click',()=>scrollToSection(4800))
        scrollToContactBtn.addEventListener('click', () => scrollToSection(5230));
       

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div className="navbar">
            
                <div className="nav-list">
                    <ul className='page-links'>
                        <li className="nav-link" exact={true} activeClassName='active' to='/Home' id='scrollToHome'>
                            <p className="link-clicks">Home</p>
                            {/* <NavLink className="link-clicks" exact={true} activeClassName='active' to='/Home' id='scrollToHome'>Home</NavLink> */}
                        </li>
                        <li className="nav-link">
                        <p className="link-clicks" exact={true} activeClassName='active' to='/Skills' id='scrollToRoadmap'>Roadmap</p>
                            {/* <a className="link-clicks" href="/Roadmap" id='scrollToRoadmap'>Roadmap</a> */}
                        </li>
                        <li className="nav-link">
                        <p className="link-clicks" exact={true} activeClassName='active' to='/Home' id='scrollToSkills'>Skills</p>
                            {/* <a className="link-clicks" href="/Skills" id='scrollToSkills'>Skills</a> */}
                        </li>
                        <li className="nav-link">
                        <p className="link-clicks" exact={true} activeClassName='active' to='/Projects' id='scrollToProjects'>Projects</p>
                            {/* <a className="link-clicks" href="/Projects" id='scrollToProjects'>Projects</a> */}
                        </li>
                        <li className="nav-link">
                        <p className="link-clicks" exact={true} activeClassName='active' to='/Services' id='scrollToServices'>Services</p>
                            {/* <a className="link-clicks" href="/Services" id='scrollToServices'>Services</a> */}
                        </li>

                        <li className="nav-link">
                        <p className="link-clicks" exact={true} activeClassName='active' to='/Certificate' id='scrollToCertificate'>Certificate</p>
                            {/* <a className="link-clicks" href="/Contact" id='scrollToContact'>Contact</a> */}
                        </li>

                        <li className="nav-link">
                        <p className="link-clicks" exact={true} activeClassName='active' to='/Contact' id='scrollToContact'>Contact</p>
                            {/* <a className="link-clicks" href="/Contact" id='scrollToContact'>Contact</a> */}
                        </li>
                        
                       

                    </ul>
                    <ul className='contact-links'>
                        <li className="nav-link">
                            <a className="link-clicks" href="https://github.com/IT21224348" >Github</a>
                        </li>
                        <li className="nav-link">
                            <a className="link-clicks" href="https://www.linkedin.com/in/ravindu-sulakkana-947898287/" >Linkedin</a>
                        </li>

                        <li className="nav-link" >
                            <a className="link-clicks" href= {require("../CV/Ravindu Sulakkana.pdf")}download="Ravindu Sulakkana.pdf" >Download CV ?</a>
                        </li>
                    </ul>
                </div>
            <FloatBtn scrollToHome={scrollToHome}/>
        </div>
    )
}

function FloatBtn({scrollToHome}) {
    return (
        <div className='floatingBtn' onClick={scrollToHome}>
            <FontAwesomeIcon className='ficon' icon={faArrowAltCircleUp} style={{ color: 'skyblue' }} />
        </div>
    )
}