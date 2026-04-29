import './Projects.css'
import portfolio1Img from '../images/portfolio1.jpg'
import PolyBridge from '../images/polybridge_video.mp4'

export default function Projects() {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-wrapper">
                <div className='project-item'>
                    <div className='title-container'>Porfolio Project 1</div>
                    <div className='inner-container'>
                        <div className='description-box'>
                            <p>html과 css, javascript를 이용해 만든 포트폴리오 사이트입니다.</p>
                            <p>이 포트폴리오 사이트는 React를 이용하여 만들었습니다.</p>
                        </div>
                        <img
                            src={portfolio1Img}
                            className='portfolio-img'
                        />

                        <a
                            href="https://portfolio-with-javascript-features.vercel.app/#home"
                            className='project1-url'
                        >
                            Visit Website !
                        </a>
                    </div>
                    <div className='title-container'>PolyBridge Project</div>
                    <div className='inner-container'>
                        <p>다리의 빈 곳을 원하는 자제로 채워넣는 게임입니다.</p>
                        <video src={PolyBridge}
                            className="polyBridge"
                            autoPlay
                            loop
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}