import { useEffect, useState } from "react";
import AgentCard from "./AgentCard";
import NoResults from "../common/NoResults";
import ShimmerUI from "../common/ShimmerUI";
import { Link } from "react-router-dom";

const searchHandler = (googleText, agentList) => {
  return agentList.filter((agent) =>
    agent?.displayName?.toLowerCase().includes(googleText.toLowerCase())
  );
};

const AgentsBody = () => {
  const [agentList, setAgentlist] = useState();
  const [filteredAgent, setFilteredAgent] = useState();
  const [googleText, setGoogleText] = useState("");

  useEffect(() => {
    getAgentsDetails();
  }, []);

  async function getAgentsDetails() {
    const data = await fetch(
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
    );
    const json = await data.json();

    setAgentlist(json?.data);
    setFilteredAgent(json?.data);
  }
 

  return (!agentList)? (
    <ShimmerUI />
  ) : (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search agent"
          value={googleText}
          onChange={(e) => {
            setGoogleText(e.target.value);
          }}
          className="searchinput"
        />
        <button
          className="greenButton"
          onClick={() => {
            const data = searchHandler(googleText, agentList);
            setFilteredAgent(data);
          }}
        >
          go...
        </button>
        {filteredAgent.length != agentList.length ? (
          <button
            className="clearButton greenButton"
            onClick={() => {
              setFilteredAgent(agentList);
            }}
          >
            show All
          </button>
        ) : null}
      </div>

      <div className="cardlist">
        {filteredAgent?.length === 0 ? (
          <NoResults />
        ) : (
          filteredAgent.map((agent) => (
           
              <AgentCard {...agent}   key={agent.uuid}/>
            
          ))
        )}
      </div>
    </>
  );
};

export default AgentsBody;
