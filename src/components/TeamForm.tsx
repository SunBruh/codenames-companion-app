import { FormEvent, useRef, useState } from "react";
import Team from "../models/Team";

import "./TeamForm.css";

interface Props {
  setTeam1: ({}: Team) => void;
  setTeam2: ({}: Team) => void;
  newGameList: () => void;
  setStartClicked: (value: boolean) => void;
}

const TeamForm = ({
  setTeam1,
  setTeam2,
  newGameList,
  setStartClicked,
}: Props) => {
  const [teamName1, setTeamName1] = useState("");
  const [color1, setColor1] = useState("");
  const [teamName2, setTeamName2] = useState("");
  const [color2, setColor2] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTeamName1("");
    setTeamName2("");
    setTeam1({ teamName: teamName1, teamColor: color1, teamScore: 0 });
    setTeam2({ teamName: teamName2, teamColor: color2, teamScore: 0 });
    newGameList();
    setStartClicked(false);
  };

  return (
    <form className="TeamForm" onSubmit={submitHandler}>
      <div className="team-div">
        <label htmlFor="teamName">Team 1 Name:</label>
        <input
          type="text"
          name="teamName"
          id="teamName"
          value={teamName1}
          onChange={(e) => setTeamName1(e.target.value)}
        />
        <select
          name="color"
          id="color"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        >
          <option value="" disabled hidden>
            Choose a Color
          </option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div className="team-div">
        <label htmlFor="teamName">Team 2 Name:</label>
        <input
          type="text"
          name="teamName"
          id="teamName"
          value={teamName2}
          onChange={(e) => setTeamName2(e.target.value)}
        />

        <select
          name="color"
          id="color"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        >
          <option value="" disabled hidden>
            Choose a Color
          </option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
      </div>
      <button>Create Teams</button>
    </form>
  );
};

export default TeamForm;
