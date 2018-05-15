import React, { Component } from 'react';


class Home extends Component {



  render() {
    return (
      <div className="Home">
< img src={require('./img/surfc.jpg')} className="surfCanary"/>
<div className="welcomeInfo">
  <h1 className="surfT">  Surf Coaching</h1>
  <p className="homeText"> Unlike conventional surf schools, this isn’t about standing up. At Surf Simply we identify the many specific skills behind the sport and then break down the mechanisms, making surfing accessible to everyone. Our team of 7 ISA and ILSF qualified coaches are surf geeks who work with just 12 guests each week, replacing ambiguous surf lingo with clear, concise, systemized coaching. We don’t teach you how to surf. We teach you how to teach yourself how to surf, or surf better through a combination of video feedback, theory lessons and in-water coaching. </p>
  </div>
  <div className ="welcomeInfo">
    <h1> “The best surfer out there is the one having the most fun.”</h1>
    < img src={require('./img/phil.jpg')} className="oldSurfer"/>
    <h2>Phil Edwards</h2>
  </div>
  <div className="welcomeInfo">
    <h1></h1>
    < img src={require('./img/surfer-lady.jpg')} className="lady-surfer"/>
    <p className="homeText">For years, women have strived to be included in big wave competitions, while organizers argued that heavy waves like the notorious Mavericks or Jaws are just too dangerous for chicks. It’s a man’s world, but there are some ladies out there that are proving themselves fit to take over the stage and kick some ass!</p>
  </div>




</div>


    );
  }
}

export default Home;
