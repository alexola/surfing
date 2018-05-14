import React, { Component } from 'react';


class Gallery extends Component {



  render() {
    return (
      <div className="Gallery">
      <div className="content">
        <h1 className ="gmainTitle">PHOTOS</h1>
        <h2 className="gtitle">Liquid Portraits</h2>
          <div className="imgInfo">< img src={require('./img/peak.jpg')} className="gimage" />
            <h3 className="ginfo">"Photographers and artists have always been fascinated by the mysterious powers of the ocean. Translating that power from life to photography is not as easy as it seems, but there's one man who knows exactly how to get it right…"</h3></div>
      <div className="imgInfo">
        <h2 className="gtitle">Surfin with Dylan & Ryan</h2>
        < img src={require('./img/dylan.jpg')} className="gimage" />
          <h3 className="ginfo">Gain inspiration from others, but execute your own ideas – we're all beautiful and unique humans and the things we create should be the same. This is what I consider to be critically important: if in doubt, don't go out – a photo isn't worth dying for.
          </h3>
        </div>
      <div className="imgInfo">
        <h2 className="gtitle"> Ryan's Underwater Gear </h2>
          < img src={require('./img/ray.jpg')} className="gimage" />
         <h3 className="ginfo">
          Ray feels more at home floating in saltwater with his camera than anywhere on land. Freezing the ephemeral relationship between water and light is what drives and inspires him to clamber out of bed in the dark each morning to celebrate the sun rising over the sea.
        </h3>
      </div>  
        </div>
      </div>
    );
  }
}

export default Gallery;
