'use client';

import { useState, useRef, useCallback } from "react";
import { mockFilms } from "../data/halo3-data";
import { VideoBackground, PageLogo, SelectionDropdown, SwitchLobbyMenu, PlayerRoster, BottomHint } from "@/components";
import { useClickOutside, usePlayerData } from "@/hooks";
import { VIDEO_SOURCES } from "@/constants";
import { getFilmImage } from "@/lib/imageHelpers";

export default function Theater() {
  const [lobbyListOpen, setLobbyListOpen] = useState(false);
  const [filmSelectOpen, setFilmSelectOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(mockFilms[0]);

  const { players, maxPlayers } = usePlayerData();

  const lobbyListRef = useRef(null);
  const filmMenuRef = useRef(null);

  const handleCloseMenus = useCallback(() => {
    setLobbyListOpen(false);
        setFilmSelectOpen(false);
  }, []);
  
  useClickOutside([lobbyListRef, filmMenuRef], handleCloseMenus);

  const toggleLobbyList = (e) => {
    e.preventDefault();
    setLobbyListOpen(!lobbyListOpen);
  };

  const toggleFilmSelect = (e) => {
    e.preventDefault();
    setFilmSelectOpen(!filmSelectOpen);
  };

  const selectFilm = (film) => {
    setSelectedFilm(film);
    setFilmSelectOpen(false);
  };

  const renderFilmLabel = (film) => (
    <>
      {film.name.toUpperCase()}
      <span style={{ color: '#8094B4', marginLeft: '10px', fontSize: '14px' }}>
        [{film.type}]
      </span>
    </>
  );

  return (
    <div>
      <VideoBackground src={VIDEO_SOURCES.THEATER} />

      <ul className="halo3-lobby-menu">
        <li><a href="#lobby" className="no-hover">THEATER LOBBY</a></li>
        <li>
          <a href="#switchlobby" onClick={toggleLobbyList} className={lobbyListOpen ? 'switch-lobby-active' : ''}>
            SWITCH LOBBY
          </a>
        </li>
        <li><a href="#network" className="no-hover">NETWORK: ONLINE (OPEN PARTY)</a></li>
        <li>
          <a href="#film" onClick={toggleFilmSelect}>
            FILM: {selectedFilm.name.toUpperCase()}
          </a>
        </li>
        <li><a href="#start">START FILM</a></li>
        <li><a href="#sub1" className="no-hover">Ready</a></li>
        <li><a href="#sub2" className="no-hover">This party is open to friends and recent players</a></li>
        <li>
          <a href="#pageicon" className="no-hover">
            <PageLogo 
              image={getFilmImage(selectedFilm)} 
                alt={selectedFilm.name}
              fullSize={true}
              />
          </a>
        </li>
        <li><a href="#gamers" className="no-hover">{selectedFilm.map} - {selectedFilm.duration}</a></li>
      </ul>

      <SwitchLobbyMenu ref={lobbyListRef} isOpen={lobbyListOpen} />

      <SelectionDropdown
        ref={filmMenuRef}
        isOpen={filmSelectOpen}
        title="SELECT FILM"
        items={mockFilms}
        selectedId={selectedFilm.id}
        onSelect={selectFilm}
        renderLabel={renderFilmLabel}
      />

      <PlayerRoster players={players} maxPlayers={maxPlayers} />
      <BottomHint />
    </div>
  );
}
