import classes from './PreviewModal.module.css';

import Card from './Card';

import nft from '../images/image-equilibrium.jpg';
import view from '../images/icon-view.svg';
import eth from '../images/icon-ethereum.svg';
import clock from '../images/icon-clock.svg';
import avatar from '../images/image-avatar.png';

const PreviewModal = () => {
  return (
    <Card>
      <div className={classes.previewModal__nft}>
        <div class={classes.previewModal__nftOverlay}></div>
        <img src={view} alt="view" className={classes.previewModal__nftView} />
        <img src={nft} className={classes.previewModal__img} alt="equilibrium" />
      </div>

      <h1><a href="#">Equilibrium #3429</a></h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>

      <div className={classes.previewModal__details}>
        <div className={classes.previewModal__details__eth}>
          <img src={eth} alt="ethereum" />
          <div className={classes.previewModal__details__ethText}>0.041ETH</div>
        </div>

        <div className={classes.previewModal__details__clock}>
          <img src={clock} alt="clock" />
          <div className={classes.previewModal__details__clockText}>3 days left</div>
        </div>
      </div>

      <hr />

      <div className={classes.previewModal__creation}>
        <div className={classes.previewModal__creation__author}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={classes.previewModal__creation__text}>Creation of <a href="#">Jules Wyvern</a></div>
      </div>



    </Card >
  )
}

export default PreviewModal;