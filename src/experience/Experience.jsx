import React from 'react';
import './experience.css';
import { FaReact, FaCss3, FaHtml5, FaPython, FaGithub, FaBootstrap, FaMobileAlt } from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { SiSpeedtest } from 'react-icons/si';
import { MdOutlineReportProblem } from 'react-icons/md';
import { AiOutlineApi } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

const Experience = () => {
  return (
    <section id='experience'>
        <div className="experience__container">
        <div className='experience__container-icons'>
        <div><FaReact /> React JS</div>
        <div><FaCss3 /> CSS</div>
        <div><FaHtml5 /> HTML</div>
        <div><FaPython /> Python</div>
        <div><FaGithub /> Git Version Control</div>
        <div><DiJqueryLogo /> jQuery</div>
        <div><FaBootstrap /> Bootstrap</div>
        <div><FaMobileAlt /> Responsive Mobile Design</div>
        <div><SiSpeedtest /> Testing & Debugging</div>
        <div><MdOutlineReportProblem /> Problem Solving Skills</div>
        <div><AiOutlineApi /> API</div>
        <div><CgWebsite /> Dom Manipulation</div>
      </div>
    </div>
    </section>
  )
}

export default Experience