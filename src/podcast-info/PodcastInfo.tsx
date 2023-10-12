import "./PodcastInfo.css";
import Image1 from "../assets/image-noise-texture-1.png";
import ImageAudio from "../assets/image-audio.png";
import ImageVideo from "../assets/image-video.png";
import Image2 from "../assets/image-noise-texture-2.png";
function PodcastInfo() {
  return (
    <div className="main-container">
      <div className="parent-container">
        <div className="image-container">
          <img src={Image1} alt="Podcast-img" />
        </div>
        <div className="podcast-info-main">
          <div className="podcast-info-child">
            <p className="heading main-heading">
              A Platform for Hosting Both Audio and Video Podcasts
            </p>
            <div className="platform-info-container">
              <div className="audio-container">
                <img src={ImageAudio} alt="Audio-img" />
                <p className="info-text-big">Audio</p>
                <p className="info-text-small">
                  Listen to your favourite podcasts and watch videos seamlessly
                  on our platform
                </p>
              </div>
              <div className="video-container">
                <img src={ImageVideo} alt="Video-img" />
                <p className="info-text-big">Video</p>
                <p className="info-text-small">
                  Discover a new way to consume content with our platform's
                  video capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parent-container">
        <div className="info-parent-container">
          <div className="info-container">
            <p className="heading">Key Features</p>
            <p className="info-text-small">
              Enjoy offline listening and curated playlists for a personalized
              experience
            </p>
          </div>
          <div className="info-container">
            <p className="heading">Adjustable Playback Speed</p>
            <p className="info-text-small">
              Listen at your preferred pace with adjustable playback speed
            </p>
          </div>
          <div className="info-container">
            <p className="heading">Discover New Content</p>
            <p className="info-text-small">
              Explore a wide range of podcasts and videos to expand your
              horizons
            </p>
          </div>
        </div>
        <div className="image-container-2">
          <img src={Image2} alt="Podcast-img" />
        </div>
      </div>
    </div>
  );
}

export default PodcastInfo;
