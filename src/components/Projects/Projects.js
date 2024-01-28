import React from 'react'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faGithub, faWebflow } from '@fortawesome/free-brands-svg-icons';


export default function Projects() {
  return (
    <div className='projects'>
      <h1 className='title'>PROJECTS</h1>
      <div className='display_area'>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/chat bot.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>Happy Bot</h2>
                <h3 style={{ color: '#42c2ff' }}>Chat Bot</h3>
                <a href="https://github.com/IT21224348/irwa_happybot_WebApp">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>Happy Bot is an AI chatbot for PowerHouse solution, helping users learn about products easily and improving overall user experience and efficency</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />React</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Python</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />MongoDB</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Flask</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Artificial Neural Network</li>
                </ul>
                <br />
                <img alt='gogo_icon' src={require("../Images/HappyBot.jpg")} />

            </div>
        </div>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/Dream Fitness.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>Dream Fitness</h2>
                <h3 style={{ color: '#EB6440' }}>Gym Management System</h3>
                <a href="https://github.com/IT21224348/DreamFitness_Gym_Management_System.io">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>The Dream Fitness web application is an all-encompassing fitness tool that provides users with a diverse array of feature, empowering them to succesfully accomplish their fitness object.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />MongoDB</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />ExpressJs</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />ReactJs</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />NodeJs</li>
                </ul>
                <br />
                <img alt='gogo_icon' src={require("../Images/WhatsApp Image 2024-01-25 at 13.46.53_6b7b3287.jpg")} />

            </div>
        </div>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/Suitcase.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>Suitcase</h2>
                <h3 style={{ color: '#6D67E4' }}>Travel Organizing app</h3>
                <a href="https://github.com/IT21224348/SuitcaseKotlinApp">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>Suitcase is an Android app designed to streamline trip organization. It allows users to create and manage a list of necessary travel items, track purchases, and effortlessly share item details and purchase locations with relatives. This intuitive app simplifies travel preparation, ensuring a hassle-free experience.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Kotlin</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Firebase</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Android Studio</li>
                </ul>
                <br />
                <img style={{ height: '60px', width: '150px' }}  alt='gogo_icon' src={require("../Images/suitcase2.png")} />

            </div>
        </div>
      </div>
      <br />
      <div className='display_area'>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/loadingScreen01.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>HR Analytics</h2>
                <h3 style={{ color: '#1B9C85' }}>Data Scientist job changing prediction</h3>
                <a href="#https://github.com/IT21224348/FDM_Mini_Project_Y3S1">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <a href='https://hranalytics.onrender.com/'>
                    <FontAwesomeIcon className='webpagelink' icon={faAppStore} color='#4d4d4e'/>
                </a>
                <p>Our recruitment efforts were centered on data scientists, with the goal of assessing their commitment to long-term employment following our training courses. This approach plays a strategic role in enhancing cost-effectiveness, improving program quality, and refining candidate classification.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Python</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />React</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Flask</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />CSS</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Google Colab</li>
                </ul>
                <br />
               

            </div>
        </div>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/loadingScreen01.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>AutoRento</h2>
                <h3 style={{ color: '#9BABB8' }}>Vehicle rental system </h3>
                <a href="https://github.com/IT21224348/OOC_project">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>This platform facilitates a seamless process for customers to easily rent vehicles, allowing vehicle 
owners to list their vehicles for rental, providing them with an opportunity to earn additional income. In 
addition to this, we incorporated a feature that enables drivers to register within the system, making them 
available for hire by customer seeking professional driving services</p>
                <hr />
                <ul>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Java</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Servlet</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />MySQL</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Java Script</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />CSS</li>
                </ul>
            
            </div>
        </div>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/loadingScreen01.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>Infinityt</h2>
                <h3 style={{ color: '#B70404' }}>Online Advertising Agency</h3>
                <a href="#link_will_be_uploaded_soon">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>Infinity web site, where advertising meets excellence online. Our elite platform ensures an optimal user 
experience, allowing users to effortlessly post ads, explore customized packages, and provide invaluable 
feedback. Beyond simplification, infinity elevates company efficiency, offering a holistic approach to meet 
your advertising needs.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />HTML</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />CSS</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Java Script</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />PHP</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />MySQL</li>
                </ul>
               
            </div>
        </div>
      </div>
    </div>
  )
}
