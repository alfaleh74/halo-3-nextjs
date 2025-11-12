'use client';

import { useState, useRef, useCallback } from "react";
import { gameTypes, multiplayerMaps } from "../data/halo3-data";
import { VideoBackground, PageLogo, SelectionDropdown, SwitchLobbyMenu, PlayerRoster, BottomHint } from "@/components";
import { useClickOutside, usePlayerData } from "@/hooks";
import { VIDEO_SOURCES } from "@/constants";

export default function Custom() {
  const [lobbyListOpen, setLobbyListOpen] = useState(false);
  const [gameTypeSelectOpen, setGameTypeSelectOpen] = useState(false);
  const [mapSelectOpen, setMapSelectOpen] = useState(false);
  const [selectedGameType, setSelectedGameType] = useState(gameTypes[0]); // Slayer
  const [selectedMap, setSelectedMap] = useState(multiplayerMaps[1]); // Valhalla

  const { players, maxPlayers } = usePlayerData();

  const lobbyListRef = useRef(null);
  const gameTypeMenuRef = useRef(null);
  const mapMenuRef = useRef(null);

  const handleCloseMenus = useCallback(() => {
    setLobbyListOpen(false);
    setGameTypeSelectOpen(false);
    setMapSelectOpen(false);
  }, []);

  useClickOutside([lobbyListRef, gameTypeMenuRef, mapMenuRef], handleCloseMenus);

  const toggleLobbyList = (e) => {
    e.preventDefault();
    setLobbyListOpen(!lobbyListOpen);
  };

  const toggleGameTypeSelect = (e) => {
    e.preventDefault();
    setGameTypeSelectOpen(!gameTypeSelectOpen);
  };

  const toggleMapSelect = (e) => {
    e.preventDefault();
    setMapSelectOpen(!mapSelectOpen);
  };

  const selectGameType = (gameType) => {
    setSelectedGameType(gameType);
    setGameTypeSelectOpen(false);
  };

  const selectMap = (map) => {
    setSelectedMap(map);
    setMapSelectOpen(false);
  };

  return (
    <div>
      <VideoBackground src={VIDEO_SOURCES.CUSTOM} />

      <ul className="halo3-lobby-menu">
        <li><a href="#lobby" className="no-hover">CUSTOM GAMES LOBBY</a></li>
        <li>
          <a href="#switchlobby" onClick={toggleLobbyList} className={lobbyListOpen ? 'switch-lobby-active' : ''}>
            SWITCH LOBBY
          </a>
        </li>
        <li><a href="#network" className="no-hover">NETWORK: ONLINE (OPEN PARTY)</a></li>
        <li>
          <a href="#gametype" onClick={toggleGameTypeSelect}>
            GAME: {selectedGameType.name.toUpperCase()}
          </a>
        </li>
        <li>
          <a href="#map" onClick={toggleMapSelect}>
            MAP: {selectedMap.name.toUpperCase()}
          </a>
        </li>
        <li><a href="#start">START GAME</a></li>
        <li><a href="#sub1" className="no-hover">Ready</a></li>
        <li><a href="#sub2" className="no-hover">This party is open to friends and recent players</a></li>
        <li>
          <a href="#pageicon" className="no-hover">
            <PageLogo 
              image={selectedMap.image} 
              alt={selectedMap.name} 
              fullSize={true}
            />
          </a>
        </li>
        <li><a href="#gamers" className="no-hover">{selectedGameType.name} on {selectedMap.name}</a></li>
      </ul>

      <SwitchLobbyMenu ref={lobbyListRef} isOpen={lobbyListOpen} />

      <SelectionDropdown
        ref={gameTypeMenuRef}
        isOpen={gameTypeSelectOpen}
        title="SELECT GAME TYPE"
        items={gameTypes}
        selectedId={selectedGameType.id}
        onSelect={selectGameType}
      />

      <SelectionDropdown
        ref={mapMenuRef}
        isOpen={mapSelectOpen}
        title="SELECT MAP"
        items={multiplayerMaps}
        selectedId={selectedMap.id}
        onSelect={selectMap}
      />

      <PlayerRoster players={players} maxPlayers={maxPlayers} />
      <BottomHint />
    </div>
  );
}
