import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class MusicPage extends Component {
  render() {
    return (
      <div>
        <h2>Best Musicss</h2>
        <div class="embed-responsive-16by9">
          <iframe
            width="1120px"
            height="630px"
            src="https://www.youtube.com/embed/jgpJVI3tDbY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default MusicPage;
