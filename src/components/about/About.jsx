import ProImage from '../../images/pro-img.jpeg';

const About = () => {
    return (
        <div className="primary">
            <h1 className='font4em margin05em textAlignCenter'>About Tukiso</h1>

            <div className="flexCenter marginBottom2em">
                <img src={ProImage} alt="Profile Image" className='round width250px' />
            </div>

            <div className="textAlignCenter marginAuto width80 marginBottom2em">
                <p>I am a resilient, hard working man who loves learning new technology stacks in order to continuously improve my development skills.</p>
                <p>I am skilled and work with the following technologies on a daily basis:
                    Azure DevOps, MEAN Stack, Node-red, Jira, MongoDB, Neutrinos Studio and a few other technologies.</p>
                <p>I am self-motivated, well organized and possess superb communication skills and sound business awareness. I am more than able to work on my own initiative within a vibrant team, and to
                    liaise directly with clients.</p>
                <p>When I am not working with clients, I teach underpriviledged youth how to code. So far I have successfully taken two people who initially had no prior programming or even computer skills and taught them how to design and develop applications and websites using MEAN Stack in the space of 8 months.
                    They were successfully interviewed and are now interns in Neutrinos.</p>
            </div>
        </div>
    )
}

export default About;