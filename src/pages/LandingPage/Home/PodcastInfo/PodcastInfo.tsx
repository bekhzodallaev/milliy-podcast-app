import classes from "./PodcastInfo.module.css";

import Image1 from "../../../../assets/LandingPageAssets/HomePage/PodcastInfoAssets/image-noise-texture-1.png";
import ImageAudio from "../../../../assets/LandingPageAssets/HomePage/PodcastInfoAssets/image-audio.png";
import ImageVideo from "../../../../assets/LandingPageAssets/HomePage/PodcastInfoAssets/image-video.png";
import Image2 from "../../../../assets/LandingPageAssets/HomePage/PodcastInfoAssets/image-noise-texture-2.png";
import { useTranslation } from "react-i18next";

function PodcastInfo() {
  const { t } = useTranslation();
  return (
    <div className={classes.main_container}>
      <div className={classes.parent_container}>
        <div className={classes.image_container}>
          <img src={Image1} alt="Podcast-img" />
        </div>
        <div className={classes.podcast_info_main}>
          <div className={classes.podcast_info_child}>
            <p className={`${classes.heading} ${classes.main_heading}`}>
              {t("podcastInfo.f1heading")}
            </p>
            <div className={classes.platform_info_container}>
              <div className={classes.audio_container}>
                <img src={ImageAudio} alt="Audio-img" />
                <p className={classes.info_text_big}>Audio</p>
                <p className={classes.info_text_small}>
                  {t("podcastInfo.info-text-audio")}
                </p>
              </div>
              <div className={classes.video_container}>
                <img src={ImageVideo} alt="Video-img" />
                <p className={classes.info_text_big}>Video</p>
                <p className={classes.info_text_small}>
                  {t("podcastInfo.info-text-video")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.parent_container}>
        <div className={classes.info_parent_container}>
          <div className={classes.info_container}>
            <p className={classes.heading}>{t("podcastInfo.s2heading")}</p>
            <p className={classes.info_text_small}>
              {t("podcastInfo.info-text1")}
            </p>
          </div>
          <div className={classes.info_container}>
            <p className={classes.heading}>{t("podcastInfo.t3heading")}</p>
            <p className={classes.info_text_small}>
              {t("podcastInfo.info-text2")}
            </p>
          </div>
          <div className={classes.info_container}>
            <p className={classes.heading}>{t("podcastInfo.f4heading")}</p>
            <p className={classes.info_text_small}>
              {t("podcastInfo.info-text3")}
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
