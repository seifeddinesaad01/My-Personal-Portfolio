import React, { useEffect, useState } from 'react'
import "./About.css";
import InfoCard from '../../components/InfoCard/InfoCard';
import { educationInfo, sectionTwoInfo } from '../../data/constants';
import Spinner from '../../components/Spinner/Spinner';
const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulating loading time with setTimeout. Replace this with your actual loading logic.

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ?
                <Spinner />
                :
                <div className="about__container">
                    <div className="about__top">
                        <h1>About Me</h1>
                        <p>👋 Hey there, I'm Seif Eddine Saad,
                            a front-end developer who thrives on turning designs into immersive digital experiences.
                        </p>
                        <p>🎨 With a knack for design and a love for clean code, I specialize in creating visually stunning and user-friendly websites.
                        </p>
                        <p>💡 I'm all about pushing the boundaries of what's possible on the web, leveraging the latest technologies to craft seamless interactions.
                        </p>
                        <p>🌐 Let's collaborate and bring your ideas to life. Drop me a line at saadseif304@gmail.com and let's build something amazing together!
                        </p>
                    </div>
                    <div className="about__bottom">
                        <h1>Work Experience</h1>
                        {sectionTwoInfo?.map((info) => {
                            return <InfoCard data={info} />
                        })}
                        <h1>Education</h1>
                        {educationInfo?.map((info) => {
                            return <InfoCard data={info} />
                        })}
                    </div>

                </div>
            }

        </>)
}

export default About