import Bubbles from '../../images/bubble.png';

const Intro = () => {
    return (
        <div className="container intro">
            <div className="zIndex10 textAlignCenter">
                <h1 className='font3em'>Hello There, My name is <i className='secondaryDark'>Tukiso Mateka</i>.</h1>
                <h1 className='font3em'>I'm a full-stack web developer.</h1>
                <button className='secondaryButton marginTop1em font1_5em'>View my work</button>
            </div>
            <div className="bubbles">
                <img src={Bubbles} alt="Bubble" />
                <img src={Bubbles} alt="Bubble" />
                <img src={Bubbles} alt="Bubble" />
                <img src={Bubbles} alt="Bubble" />
                <img src={Bubbles} alt="Bubble" />
                <img src={Bubbles} alt="Bubble" />
                <img src={Bubbles} alt="Bubble" />
            </div>
        </div>
    )
}

export default Intro;