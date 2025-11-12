'use client';

import Link from "next/link";
import { forwardRef } from 'react';

/**
 * SwitchLobbyMenu Component
 * Dropdown menu for switching between game lobbies
 */
const SwitchLobbyMenu = forwardRef(({ isOpen }, ref) => {
  const lobbies = [
    { name: 'MAIN MENU', href: '/' },
    { name: 'CAMPAIGN', href: '/campaign' },
    { name: 'MULTIPLAYER', href: '/multiplayer' },
    { name: 'CUSTOM GAMES', href: '/custom' },
    { name: 'FORGE', href: '/forge' },
    { name: 'THEATER', href: '/theater' }
  ];

  return (
    <div ref={ref} className={`halo3-lobby-list ${isOpen ? 'active' : ''}`}>
      <ul>
        {lobbies.map((lobby) => (
          <li key={lobby.name}>
            <Link href={lobby.href}>{lobby.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

SwitchLobbyMenu.displayName = 'SwitchLobbyMenu';

export default SwitchLobbyMenu;

