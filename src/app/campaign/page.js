'use client';

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { campaigns, difficulties } from "../data/halo3-data";
import { VideoBackground, PageLogo, SelectionDropdown, SwitchLobbyMenu, ButtonBar, ControllerButton, PlayerRoster, BottomHint } from "@/components";
import { useClickOutside, usePlayerData } from "@/hooks";
import { VIDEO_SOURCES, STANDARD_BUTTONS, CAMPAIGN_EDIT_BUTTON } from "@/constants";

export default function Campaign() {
  const [lobbyListOpen, setLobbyListOpen] = useState(false);
  const [missionSelectOpen, setMissionSelectOpen] = useState(false);
  const [difficultySelectOpen, setDifficultySelectOpen] = useState(false);
  
  const [selectedMission, setSelectedMission] = useState(campaigns[1]); // Sierra 117
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulties[1]); // Normal

  const { players, maxPlayers } = usePlayerData();

  const lobbyListRef = useRef(null);
  const missionSelectRef = useRef(null);
  const difficultySelectRef = useRef(null);

  const handleCloseMenus = useCallback(() => {
        setLobbyListOpen(false);
        setMissionSelectOpen(false);
        setDifficultySelectOpen(false);
  }, []);

  useClickOutside([lobbyListRef, missionSelectRef, difficultySelectRef], handleCloseMenus);

  const toggleLobbyList = (e) => {
    e.preventDefault();
    setLobbyListOpen(!lobbyListOpen);
  };

  const toggleMissionSelect = (e) => {
    e.preventDefault();
    setMissionSelectOpen(!missionSelectOpen);
  };

  const toggleDifficultySelect = (e) => {
    e.preventDefault();
    setDifficultySelectOpen(!difficultySelectOpen);
  };

  const selectMission = (mission) => {
    setSelectedMission(mission);
    setMissionSelectOpen(false);
  };

  const selectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setDifficultySelectOpen(false);
  };

  return (
    <div>
      <VideoBackground src={VIDEO_SOURCES.CAMPAIGN} />

      <div id="contentWrapper" className={`content-wrapper ${lobbyListOpen ? 'blurred' : ''}`}>
        <ul className="halo3-lobby-menu">
          <li><a href="#lobby" className="no-hover">CAMPAIGN LOBBY</a></li>
          <li>
            <a href="#switchlobby" onClick={toggleLobbyList} className={lobbyListOpen ? 'switch-lobby-active' : ''}>
              SWITCH LOBBY
            </a>
          </li>
          <li><a href="#network" className="no-hover">NETWORK: ONLINE (OPEN PARTY)</a></li>
          <li>
            <a href="#mission" onClick={toggleMissionSelect}>
              MISSION: {selectedMission.name.toUpperCase()}
            </a>
          </li>
          <li>
            <a href="#difficulty" onClick={toggleDifficultySelect}>
              DIFFICULTY: {selectedDifficulty.name.toUpperCase()}
            </a>
          </li>
          <li><a href="#start">START GAME</a></li>
          <li>
            <a href="#campsettings" className="no-hover">
              <ControllerButton keyName={CAMPAIGN_EDIT_BUTTON.key} label={CAMPAIGN_EDIT_BUTTON.label} />
            </a>
          </li>
          <li><a href="#sub1" className="no-hover">Ready</a></li>
          <li><a href="#sub2" className="no-hover">This party is open to friends and recent players</a></li>
          <li>
            <a href="#pageicon" className="no-hover">
              <PageLogo 
                image={selectedMission.image} 
                  alt={selectedMission.name}
                fullSize={false}
                />
            </a>
          </li>
          <li><a href="#desc" className="no-hover">{selectedMission.name} on {selectedDifficulty.name}</a></li>
          <li><a href="#desc2" className="no-hover">at Mission Start</a></li>
          <li>
            <a href="#buttons" className="no-hover">
              <ButtonBar buttons={STANDARD_BUTTONS} />
            </a>
          </li>
        </ul>
      </div>

      <SwitchLobbyMenu ref={lobbyListRef} isOpen={lobbyListOpen} />

      <SelectionDropdown
        ref={missionSelectRef}
        isOpen={missionSelectOpen}
        title="SELECT MISSION"
        items={campaigns}
        selectedId={selectedMission.id}
        onSelect={selectMission}
      />

      <SelectionDropdown
        ref={difficultySelectRef}
        isOpen={difficultySelectOpen}
        title="SELECT DIFFICULTY"
        items={difficulties}
        selectedId={selectedDifficulty.id}
        onSelect={selectDifficulty}
      />

      <PlayerRoster players={players} maxPlayers={maxPlayers} />
      <BottomHint />
    </div>
  );
}
