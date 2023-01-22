import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "../common/ShimmerUI";
const AgentInfo = () => {
  const { name } = useParams();
  const [agent, setAgent] = useState();
  useEffect(() => {
    getAgentInfo();
  }, []);

  async function getAgentInfo() {
    const data = await fetch("https://valorant-api.com/v1/agents/" + name);
    const json = await data?.json();

    setAgent(json?.data);
  }

  return !agent ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="agentInfo">
        <h1 className="agentName">{agent?.displayName}</h1>
        <img className="agentLargeImage" src={agent?.fullPortrait} />
        <h1 className="agentDescription">{agent?.description}</h1>
        <div className="abilities">
          {agent.abilities.map((ability) => (
            <>
              <div className="abilityvalue">
                <>
                  <h1>{ability.displayName}</h1>
               
                  <img className="abilityvalueimg" src={ability.displayIcon} />
                 
                </>
                <h3 >{ability.description}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AgentInfo;
