'use client';

import { useState, useRef, useCallback } from "react";
import { multiplayerMaps } from "../data/halo3-data";
import { VideoBackground, PageLogo, SelectionDropdown, SwitchLobbyMenu, PlayerRoster, ButtonBar, ControllerButton, BottomHint } from "@/components";
import { useClickOutside, usePlayerData } from "@/hooks";
import { VIDEO_SOURCES, STANDARD_BUTTONS } from "@/constants";

export default function Forge() {
  const [lobbyListOpen, setLobbyListOpen] = useState(false);
  const [mapSelectOpen, setMapSelectOpen] = useState(false);
  const [selectedMap, setSelectedMap] = useState(multiplayerMaps[6]); // Last Resort to match the image

  const { players, maxPlayers } = usePlayerData();

  const lobbyListRef = useRef(null);
  const mapMenuRef = useRef(null);

  const handleCloseMenus = useCallback(() => {
    setLobbyListOpen(false);
    setMapSelectOpen(false);
  }, []);

  useClickOutside([lobbyListRef, mapMenuRef], handleCloseMenus);

  const toggleLobbyList = (e) => {
    e.preventDefault();
    setLobbyListOpen(!lobbyListOpen);
  };

  const toggleMapSelect = (e) => {
    e.preventDefault();
    setMapSelectOpen(!mapSelectOpen);
  };

  const selectMap = (map) => {
    setSelectedMap(map);
    setMapSelectOpen(false);
  };

  return (
    <div>
      <VideoBackground src={VIDEO_SOURCES.FORGE} />

      <ul className="halo3-lobby-menu">
        <li><a href="#lobby" className="no-hover">FORGE LOBBY</a></li>
        <li>
          <a href="#switchlobby" onClick={toggleLobbyList} className={lobbyListOpen ? 'switch-lobby-active' : ''}>
            SWITCH LOBBY
          </a>
        </li>
        <li><a href="#network" className="no-hover">NETWORK: ONLINE (OPEN PARTY)</a></li>
        <li>
          <a href="#map" onClick={toggleMapSelect}>
            MAP: {selectedMap.name.toUpperCase()}
          </a>
        </li>
        <li><a href="#start">START FORGE</a></li>
        <li>
          <a href="#forgesettings" className="no-hover">
            <ControllerButton keyName="E" label="Edit Forge Options" />
          </a>
        </li>
        <li><a href="#sub1" className="no-hover">Ready</a></li>
        <li><a href="#sub2" className="no-hover">This party is open to friends</a></li>
        <li>
          <a href="#pageicon" className="no-hover">
            <PageLogo 
              image={selectedMap.image} 
              alt={selectedMap.name} 
              fullSize={true}
            />
          </a>
        </li>
        <li><a href="#gamers" className="no-hover">Edit objects on {selectedMap.name}</a></li>
        <li>
          <a href="#buttons" className="no-hover halo3-bottom-bar">
            <ButtonBar buttons={STANDARD_BUTTONS} />
          </a>
        </li>
      </ul>

      <PlayerRoster players={players} maxPlayers={maxPlayers} />
      <BottomHint />

      <SwitchLobbyMenu ref={lobbyListRef} isOpen={lobbyListOpen} />

      <SelectionDropdown
        ref={mapMenuRef}
        isOpen={mapSelectOpen}
        title="SELECT MAP"
        items={multiplayerMaps}
        selectedId={selectedMap.id}
        onSelect={selectMap}
      />
    </div>
  );
}
