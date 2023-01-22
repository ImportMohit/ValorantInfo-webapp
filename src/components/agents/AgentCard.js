import ReactAudioPlayer from "react-audio-player";
import audioIcon from "../../images/audio.png";
import { useState} from "react";
import { Link } from "react-router-dom";
//agent card

const AgentCard = (props) => {
  const [element, setElement] = useState();

  const background = {
    backgroundImage: "url(" + props.background + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="displaycard" style={background}>
      <Link to={"/agents/" + props.uuid} className="linkbox"><img src={props.bustPortrait} className="agentImage" alt="icon" /></Link> 
      <h2>{props.displayName}</h2>
      <h3>{props.abilities.map(printAbility)}</h3>
      <img
        src={audioIcon}
        alt="audioIcon"
        className="audioIcon"
        onClick={() => {
          element.audioEl.current.play();
        }}
      />
      <ReactAudioPlayer
        ref={(element) => {
          setElement(element);
        }}
        className="agentsoundbar hideaudio"
        controlsList="nodownload noplaybackrate"
        src={
          "https://media.valorant-api.com/sounds/" +
          props.voiceLine.mediaList[0].id +
          ".wav"
        }
        controls
      />
      <h4> Role : {props.role.displayName}</h4>
    </div>
  );
};
const printAbility = (ability) => {
  if (ability.slot === "Ultimate") return ability.displayName;
  return null;
};

export default AgentCard;
