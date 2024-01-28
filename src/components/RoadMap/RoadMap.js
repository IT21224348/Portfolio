import './roadmap.css'
import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCalculator, faComputer, faDatabase, faGraduationCap, faFlag } from '@fortawesome/free-solid-svg-icons'




const RoadMap = () => {
    return (
      <div className='roadmap'>
        <h1 className='title'>ROAD MAP</h1>
        <div className='timeline'>
        <VerticalTimeline>
          {/* first one */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'cyan', color: '#444' }}
            contentArrowStyle={{ borderRight: '7px solid  #e7e7e7' }}
            date="2021 - Done"
            iconStyle={{ background: '#DDE6ED', color: '#444' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h2 className="vertical-timeline-element-title">GCE Ordianry level</h2>
            <h3 className="vertical-timeline-element-subtitle">D.S Senanayake  College Colombo</h3>
            <p>2017</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'cyan', color: '#444' }}
            contentArrowStyle={{ borderRight: '7px solid  #e7e7e7' }}
            date="2021 - Started"
            iconStyle={{ background: '#DDE6ED', color: '#444' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h2 className="vertical-timeline-element-title">GCE Advanced level</h2>
            <h3 className="vertical-timeline-element-subtitle">D.S Senanayake  College Colombo</h3>
            <p>2020</p>
          </VerticalTimelineElement>

          {/* second one */}



          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'cyan', color: '#444' }}
            contentArrowStyle={{ borderRight: '7px solid  #e7e7e7' }}
            date="2021 - Started"
            iconStyle={{ background: '#DDE6ED', color: '#444' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h2 className="vertical-timeline-element-title">BSc ( Hons. ) Information Technology ( SLIIT ) </h2>
            <h3 className="vertical-timeline-element-subtitle">Sri Lanka Institute of Information Technology</h3>
            <p>2021</p>
          </VerticalTimelineElement>
          
          {/* third one */}
          
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'cyan', color: '#444' }}
            contentArrowStyle={{ borderRight: '7px solid  #e7e7e7' }}
            date="2023 - Present"
            iconStyle={{ background: '#DDE6ED', color: '#444' }}
            icon={<FontAwesomeIcon icon={faFlag} />}
          >
            <h2 className="vertical-timeline-element-title">BSc ( Hons. ) Information Technology Specializing in Data Science ( SLIIT ) </h2>
            <h3 className="vertical-timeline-element-subtitle">Sri Lanka Institute of Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">CGPA: 3.32</h4>
            <p>2023</p>
          </VerticalTimelineElement>
      
      {/* Add more VerticalTimelineElement components for each timeline item */}
    </VerticalTimeline> 
        </div>
      </div>
    );
  };
  
  export default RoadMap;