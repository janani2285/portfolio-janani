import React from "react";
import image from "../images/janani.jpg"

function AboutMeContent(){
    return (
        <div>
        <div className="container mt-5 pb-5 pt-3 container-style">
            <div className="row">
                <div className="col">
                    <header>
                        <h1 className="header-font border-bottom border-secondary">About Me</h1>
                    </header>
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                    <img src={image} alt="Profile Picture"
                        className="img-thumbnail img-fluid float-left mr-3" />
                    <p>
                        Hey there! Welcome to my website. My name is Janani. I live in Sabre Springs with my family
                        which includes my husband and my son. I am from India, and moved to San Diego in 2014. I am a
                        B.E graduate in Computer Science and Engineering. I was a Java developer working for an
                        IT firm in India. Right now, I am a stay at home mother. I took a career break to raise my son.
                        I considered a career change when i wanted to come back to the workforce.
                        I worked as a pre-school teacher for few months. That is when I realized how much I miss coding
                        and debugging. I wanted to pursue my developer profession again. I realized the technology field
                        has changed drastically. So I started to self-learn new skills and joined bootcamp to get
                        employer-ready.</p>
                    <p>I enjoy cooking and like to listen to music. I like to play badminton during my free
                        time. I am
                        interested in Math and programming. I like to
                        work on puzzles and logical problems. I love to assist and help others in whichever way
                        I can.
                    </p>
                </div>


            </div>
        </div>
    </div>
    )
}
export default AboutMeContent