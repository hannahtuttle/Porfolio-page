import React from 'react'

import profile from './profilePhoto.jpg'

console.log(profile)

const About = () => {

    return (
        <div>
            <img src={profile} width={300}/>
            <p>I am a Full Stack Web Devepment Student at Lambda School. (Mission Statement here!) </p>
        </div>
    )
}

export default About