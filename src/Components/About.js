import React, { Component } from 'react';


class About extends Component {



  render() {
    return (
      <div className="About">
<div className="content">
      <h1 className ="mainTitle"> Lucky you !</h1>
  < img src={require('./img/pjimage.jpg')} className="pjimage"/>
  <h2 className="title">Basic Info</h2>
  <p className="info">Surfing is simply the most enjoyable thing you can do to get fit and stay in shape. You don’t have to do any preparation in order to come to Nosara and have a lot of fun surfing with us though. We teach people from 16 to 70, some of whom do not do a stroke of exercise and it’s not even a problem if you can’t swim either. Having said that, like all sports the better shape you’re in the further you can progress before fitness becomes a limiting factor.</p>

  <h2 class="title"> Skateboarding</h2>
  < img src={require('./img/skateboarding.jpg')} className="imgSkate"/>
  <p className="info">It’s great if you can spend sometime longboarding (on a skateboard), like this. It’s unbelievably helpful for your surfing but you must make sure that you are standing with your back knee dropped in towards your front knee (like you see them exaggerating 29 seconds in on this great little film by Original Skateboards). Getting comfortable with that back knee position really is the key to a good surfing stance. Don’t worry about trying to perform tricks, just cruise along getting comfortable in that counter intuitive stance, with your back knee dropped in. Do make sure that you are wearing wrist guards however as falling heavily on your hand is a common injury.</p>

  <h2 className="title"> Flexibility</h2>
  <p className="info">Flexibility often ends up being a limiting factor in many people’s surfing, especially over
  40s. So a stretching regime is important. Being under (or overly) flexible can also cause injuries. The philosophy behind yoga isn’t for everyone and you need to be skeptical of some of the health claims and physiological mechanisms proposed in yoga classes, but regular yoga is a great way to increase mobility. Seated rotational poses will give you the flexibility in your trunk to help you bring your feet underneath your body, and the flexibility in your legs will come from practicing “Down Dog”, which is great for stretching out the achillies, back of the knees and hamstrings.</p>
  </div>
</div>
    );
  }
}

export default About;
