'use client';

import { useState, useRef, useCallback } from "react";
import { playlists, multiplayerMaps } from "../data/halo3-data";
import { VideoBackground, PageLogo, SelectionDropdown, SwitchLobbyMenu, ButtonBar, PlayerRoster, BottomHint } from "@/components";
import { useClickOutside, useOnlineCount, usePlayerData } from "@/hooks";
import { VIDEO_SOURCES, STANDARD_BUTTONS } from "@/constants";

export default function Multiplayer() {
  const [lobbyListOpen, setLobbyListOpen] = useState(false);
  const [playlistSelectOpen, setPlaylistSelectOpen] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0]); // Social Slayer
  const [selectedMap] = useState(multiplayerMaps[0]); // Guardian
  
  const onlineCount = useOnlineCount();
  const { players, maxPlayers } = usePlayerData();

  const lobbyListRef = useRef(null);
  const playlistSelectRef = useRef(null);

  const handleCloseMenus = useCallback(() => {
    setLobbyListOpen(false);
    setPlaylistSelectOpen(false);
  }, []);

  useClickOutside([lobbyListRef, playlistSelectRef], handleCloseMenus);

  const toggleLobbyList = (e) => {
    e.preventDefault();
    setLobbyListOpen(!lobbyListOpen);
  };

  const togglePlaylistSelect = (e) => {
    e.preventDefault();
    setPlaylistSelectOpen(!playlistSelectOpen);
  };

  const selectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
    setPlaylistSelectOpen(false);
  };

  const renderPlaylistLabel = (playlist) => (
    <>
      {playlist.name.toUpperCase()} 
      <span style={{ color: '#8094B4', marginLeft: '10px', fontSize: '14px' }}>
        [{playlist.type === 'ranked' ? 'Ranked' : 'Social'}]
      </span>
    </>
  );

  return (
    <div>
      <VideoBackground src={VIDEO_SOURCES.MULTIPLAYER} />

      <div className={`content-wrapper ${lobbyListOpen ? 'blurred' : ''}`}>
        <ul className="halo3-lobby-menu">
          <li><a href="#lobby" className="no-hover">MATCHMAKING LOBBY</a></li>
          <li>
            <a href="#switchlobby" onClick={toggleLobbyList} className={lobbyListOpen ? 'switch-lobby-active' : ''}>
              SWITCH LOBBY
            </a>
          </li>
          <li><a href="#network" className="no-hover">NETWORK: ONLINE (OPEN PARTY)</a></li>
          <li>
            <a href="#playlist" onClick={togglePlaylistSelect}>
              PLAYLIST: {selectedPlaylist.name.toUpperCase()}
            </a>
          </li>
          <li><a href="#start">START MATCHMAKING</a></li>
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
          <li><a href="#gamers" className="no-hover">{onlineCount.toLocaleString()} Gamers Online</a></li>
          <li>
            <a href="#buttons" className="no-hover halo3-bottom-bar">
              <ButtonBar buttons={STANDARD_BUTTONS} />
            </a>
          </li>
        </ul>
      </div>

      <SwitchLobbyMenu ref={lobbyListRef} isOpen={lobbyListOpen} />

      <SelectionDropdown
        ref={playlistSelectRef}
        isOpen={playlistSelectOpen}
        title="SELECT PLAYLIST"
        items={playlists}
        selectedId={selectedPlaylist.id}
        onSelect={selectPlaylist}
        renderLabel={renderPlaylistLabel}
      />

      <PlayerRoster players={players} maxPlayers={maxPlayers} />
      <BottomHint />
    </div>
  );
}
