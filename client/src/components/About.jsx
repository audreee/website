import React from 'react';

let About = ({aboutIsVisible, isMobile}) => {
  let renderContent = () => (
    <div className={!isMobile && 'slideFromLeft'}>
      <div className="about-text-background">
        <div className="about-text">
          <h5>Audree Steinberg</h5>
          <h5 className="yellow">software engineer</h5>
          <p>After graduating from UC Berkeley with a B.A. in Political Science and minor in English, I moved to Japan. While learning Japanese and adventuring the countryside, I taught English in local public schools. I then moved to Tokyo to work at a finance & administration firm. During the covid-19 pandemic, I took Harvard's Intro to Computer Science online and was hooked. I graduated from Hack Reactor in 2021. When I'm not coding, you can find me out for a run or hanging in a local coffee shop.</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="about-wrapper">
      {isMobile ?
        renderContent()
      : aboutIsVisible ? renderContent() : null}
    </div>
  )
}

export default About;