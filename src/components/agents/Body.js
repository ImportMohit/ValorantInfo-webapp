import { useEffect, useState } from "react";
import AgentCard from "./AgentCard";
import NoResults from "../common/NoResults";
import ShimmerUI from "../common/ShimmerUI";

const searchHandler = (googleText, agentList) => {
  return agentList.filter((agent) =>
    agent?.displayName?.toLowerCase().includes(googleText.toLowerCase())
  );
};

const AgentsBody = () => {
  const [agentList, setAgentlist] = useState([]);
  const [filteredAgent, setFilteredAgent] = useState([]);
  const [googleText, setGoogleText] = useState("");

  useEffect(() => {
    getAgentDetails();
  }, []);

  async function getAgentDetails() {
    const data = await fetch(
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
    );
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    const json = await data.json();
  
   setAgentlist(json?.data);
    setFilteredAgent(json?.data);
  }
  //early return
  if (null == agentList) return null;

  return agentList.length === 0 ? (
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
        {(filteredAgent.length!=agentList.length)?(
          <button
          className="clearButton greenButton"
          onClick={() => { 
            setFilteredAgent(agentList);
          }}
        >
        show All
        </button>
         ):null
         }
      </div>
      
         
      
       <div className="agentlist">
       
        {(filteredAgent?.length===0)?(
        <NoResults />
        ):filteredAgent.map((agent) => (
          <AgentCard {...agent} key={agent.displayName} />
        ))}
      </div>
    </>
  );
};

export default AgentsBody;
