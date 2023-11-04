import classes from "./PodcastTreasure.module.css";

const PodcastTreasure = () => {
  return (
    <div className={classes.podcast_treasure}>
      <div className={classes.main_container}>
        <div className={classes.main_container_content}>
          <p className={classes.unlock_treasure}>Unlock Podcast Treasures</p>
          <p className={classes.unlock_tresure_content}>
            Delve into a vast audio landscape as we guide you through
            captivating stories
          </p>
        </div>
        <div>
          <button className={classes.create_account_button}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastTreasure;
