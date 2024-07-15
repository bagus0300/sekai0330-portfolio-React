import { Container } from '@mui/material';
import React, { useContext } from 'react';
import service from '../../../assets/lottie/service.json';
import { ThemeContext } from '../../../contexts/theme-context';
import { serviceData } from '../../../data/serviceData';
import AnimationLottie from '../../helper/animation-lottie';
import ExperienceCard from './service-card';
import './service.css';

function Service() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="experience" id="experience">
                <div className="experience-body">
                     <div className="experience-description">
                        <h1 style={{ color: theme.primary }}>Main Services</h1>
                        {serviceData.map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear} />
                        ))}
                    </div>
                    <div className="experience-image">
                        <AnimationLottie animationPath={service} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Service
