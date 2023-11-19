import classes from "./PodcastInfo.module.css";

import Image1 from "../../../../assets/image-noise-texture-1.png";
import ImageAudio from "../../../../assets/image-audio.png";
import ImageVideo from "../../../../assets/image-video.png";
import Image2 from "../../../../assets/image-noise-texture-2.png";

function PodcastInfo() {
  return (
    <div className={classes.main_container}>
      <div className={classes.parent_container}>
        <div className={classes.image_container}>
          <img src={Image1} alt="Podcast-img" />
        </div>
        <div className={classes.podcast_info_main}>
          <div className={classes.podcast_info_child}>
            <p className={`${classes.heading} ${classes.main_heading}`}>
              A Platform for Hosting Both Audio and Video Podcasts
            </p>
            <div className={classes.platform_info_container}>
              <div className={classes.audio_container}>
                <img src={ImageAudio} alt="Audio-img" />
                <p className={classes.info_text_big}>Audio</p>
                <p className={classes.info_text_small}>
                  Listen to your favourite podcasts and watch videos seamlessly
                  on our platform
                </p>
              </div>
              <div className={classes.video_container}>
                <img src={ImageVideo} alt="Video-img" />
                <p className={classes.info_text_big}>Video</p>
                <p className={classes.info_text_small}>
                  Discover a new way to consume content with our platform's
                  video capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.parent_container}>
        <div className={classes.info_parent_container}>
          <div className={classes.info_container}>
            <p className={classes.heading}>Key Features</p>
            <p className={classes.info_text_small}>
              Enjoy offline listening and curated playlists for a personalized
              experience
            </p>
          </div>
          <div className={classes.info_container}>
            <p className={classes.heading}>Adjustable Playback Speed</p>
            <p className={classes.info_text_small}>
              Listen at your preferred pace with adjustable playback speed
            </p>
          </div>
          <div className={classes.info_container}>
            <p className={classes.heading}>Discover New Content</p>
            <p className={classes.info_text_small}>
              Explore a wide range of podcasts and videos to expand your
              horizons
            </p>
          </div>
        </div>
        <div className={classes.image_container_2}>
          <img src={Image2} alt="Podcast-img" />
        </div>
      </div>
    </div>
  );
}

export default PodcastInfo;
