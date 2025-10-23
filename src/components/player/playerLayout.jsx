import "./player-styles/player-styles.css";
import prev from "./player-icons/prev.svg";
import pause from "./player-icons/pause.svg";
import next from "./player-icons/next.svg";
import shuffle from "./player-icons/shuffle.svg";
import repeat from "./player-icons/repeat.svg";
import like from "./player-icons/like.svg";
import follow from "./player-icons/follow.svg";
import volume from "./player-icons/volume.svg";
import { useHoverController } from "../../scripts/useHoverController";
import { useRef, useState } from "react";
export default function Player() {
  const [isHovered, setIsHovered] = useState(null);
  const volumeRef = useRef(null);
  const [isControllerActive, setControllerActive] = useState(false);
  useHoverController(volumeRef, setIsHovered, isControllerActive);
  const toggleController = () => {
    setControllerActive(!isControllerActive);
  };


  
  return (
    <section className="player">
      <div className="player-container">
        <div className="player-controls-elements">
          <div className="elemtns-btn">
            <button className="control-btn-element prev">
              <img src={prev} alt="" />
            </button>
            <button className="control-btn-element pause-play">
              <span className="btn-ico pause-play">
                <img src={pause} alt="" />
              </span>
            </button>
            <button className="control-btn-element next">
              <span className="element-ico">
                <img src={next} alt="" />
              </span>
            </button>
            <div className="shuffle-element">
              <button className="control-btn-element next">
                <span className="element-ico">
                  <img src={shuffle} alt="" />
                </span>
              </button>
            </div>
            <div className="repeat-element">
              <button className="control-btn-element next">
                <span className="element-ico">
                  <img src={repeat} alt="" />
                </span>
              </button>{" "}
            </div>
          </div>
          <div className="container-track-time">
            <div className="time-track-start">
              <span className="start">0:00</span>
            </div>
            <input type="range" className="track-lenght" />
            <div className="time-track-start">
              <span className="start end">1:42</span>
            </div>
            <ul className="volume-contaier">
              <button
                className="control-btn-element volume"
                onMouseEnter={toggleController}
                onMouseLeave={toggleController}
              >
                <span className="element-ico ">
                  <img src={volume} alt="" />
                </span>
              </button>
              <div
                className={isHovered ? "active-volume-popup" : "volume-popup"}
                ref={volumeRef}
              >
                <ul className="popup-controler">
                  <li className="contoroler">
                    <input type="range" className="controler-track-volume" />
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="artist-track-info-elements">
            <div className="cover-element">
              <span className="track-cover"></span>
            </div>
            <div className="info-elements">
              <span className="artist-name">
                <a href="" className="name-url-item">
                  никнейм артиста
                </a>
              </span>
              <span className="artist-trackname">
                <a href="" className="name-url-item track-url">
                  навзвание песни
                </a>
              </span>
            </div>
            <div className="user-elements">
              <div className="like-follow-elements">
                <button className="control-btn-element">
                  <span className="ico-element like">
                    <img src={like} alt="" />
                  </span>
                </button>
                <button className="control-btn-element">
                  <span className="like-ico follow">
                    <img src={follow} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
