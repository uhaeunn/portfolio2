import './Projects.css'
import portfolio1Img from '../images/portfolio1.jpg'
import blog1Img from '../images/blog1.jpg'
import blog2Img from '../images/blog2.jpg'
import PolyBridge from '../images/polybridge_video.mp4'

export default function Projects() {
    return (
        <div className="projects-container">
            <h2 className='title'>~ My Projects ~</h2>
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

                        <div className='description-box'>
                            <p>개발과정 및 학습에 관한 블로그는 아래 링크에서 확인하실 수 있습니다!</p>
                            <div className='url-container'>
                                <div className='blog1'>
                                    <img src = {blog1Img} className = 'blog1Img'/>
                                    <a href="https://blog.likelion-yonsei.com/posts/uhaeunn/14기-과제-html-css-vercel-figma-dev-mode"
                                        className='blog1-url'>- html/CSS blog</a>
                                </div>

                                <div className='blog2'>
                                    <img src = {blog2Img} className = 'blog2Img'/>
                                    <a href="https://blog.likelion-yonsei.com/posts/uhaeunn/14-javascript"
                                        className='blog2-rul'>- JavaScript blog</a>
                                </div>
                            </div>
                        </div>
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