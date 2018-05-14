import React, { Component } from 'react';


class News extends Component {



  render() {
    return (
      <div className="News">
      <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Rokkitt" rel="stylesheet" />
        <h1 className="tag">Andrew Cotton</h1>
        <div className="inter">
          <div className="firstP">
          < img src={require('./img/andrew3.jpg')} className="andy"/>
            <p className="response">
              <strong>You first scoped out the wave in 2013 and returned in 2015. Did it take two years to set up all the logistics?</strong> Taking a boat and a crew out to sea isn’t a task to be taken lightly. The North Atlantic, especially the Irish coast, is pretty treacherous and weather conditions can change quite quickly. Luckily Matt Knight’s a really experienced captain and all the surfers we had with us were super experienced surfers and waterman.
            </p>
            <p className="response">
              It was his [Matt Knight's] enthusiasm that helped the project come along. He said that he’d actually be willing to commit his boat to it and there’s not many boat people who’d actually want to do that. You’re taking his boat into some pretty gnarly conditions, usually at times when most people would be heading for shelter. Usually, when a big storm comes every boat that size would be heading towards a quiet bay or harbour, and he’s there taking it out into some pretty hectic situations.
            </p>
          </div>
          <div className="secondP">
          < img src={require('./img/andrew1.jpg')} className="andy"/>
            <h2 className="quotes">
            "I think you can get some pretty serious waves out there if the conditions come together and the swell direction is right."</h2>
            <p className="response">
              In Beneath the Surface we saw you riding 30fters, but what do you think the full potential of this spot could be in the right conditions? Obviously that was a small day as there wasn’t much swell. You could easily get double that size. The biggest we ever saw it was the day we didn’t surf it back in 2013 – that was probably in the 50ft area. I think you can get some pretty serious waves out there if the conditions come together and the swell direction is right.
            </p>
            <h2 className="quotes">At the end of the day I’m a surfer, I just want to go surf waves.</h2>
            <p className="response">
            Did you ever doubt the potential of the wave during the winter – especially after the disappointment of the lack of swell on your second trip out there? The second strike was obviously pretty bad. At that point I was kind of over it, I was like ‘What’s the point in putting this effort in?’ At the end of the day I’m a surfer, I just want to go surf waves. I’d been watching on the internet and everyone had been getting waves in other places and I was like ‘What’s the point? What am I doing this for?’
            </p>
          </div>
          <div className="thirdP">
            < img src={require('./img/andrew2.jpg')} className="andy"/>

            <h2 className="quotes">To be a pro surfer you have to be good at competition surfing and good in small waves, and I wasn’t very good at either.</h2>
            <p className="response">
              You started surfing at a young age, when did you branch down the big wave   route? Yeah I started at seven. It’s always been the dream, it’s just taken a long time to get here! I was working at a surfboard factory and we used to travel as a team most winters and I just found that I was generally better in bigger waves. It’s weird because at home if you wanted to be a pro surfer you have to be good at competition surfing and good in small waves, and I wasn’t very good at either. But I felt like I was out performing others when the waves got bigger – you chase stuff that you enjoy and feel that you're good at, so it was a natural thing.
            </p>

          </div>
      </div>
      </div>
    );
  }
}

export default News;
