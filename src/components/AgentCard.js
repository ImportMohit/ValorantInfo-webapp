import ReactAudioPlayer from "react-audio-player";
//agent card
const AgentCard = (props) => {
    const background={
      backgroundImage:"url(" + props.background + ")", 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    console.log("https://media.valorant-api.com/sounds/"+ props.voiceLine.mediaList[0].id +".wav")
    return (
      <div className="agentcard" style ={background}>
        <img src={props.bustPortrait}  alt="icon" />
        <h2>{props.displayName}</h2>
        <h3>{props.abilities.map(printAbility)}</h3>
        <ReactAudioPlayer
        className="agentsoundbar"
        controlsList="nodownload noplaybackrate"
  src={"https://media.valorant-api.com/sounds/"+ props.voiceLine.mediaList[0].id +".wav"}
  autoPlay
  controls
/>
        <h4> Role : {props.role.displayName}</h4>
      </div>
    );
  };
const  printAbility=(ability)=>{
  if(ability.slot==="Ultimate")
    return ability.displayName;
  return null;
}


  export default AgentCard;