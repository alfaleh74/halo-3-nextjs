import { useState } from 'react';

/**
 * Custom hook for managing player roster data
 * @param {number} maxPlayers - Maximum number of players allowed
 * @returns {Object} Player data and management functions
 */
export function usePlayerData(maxPlayers = 16) {
  const [players] = useState([
    {
      name: "Master Chief",
      emblem: "/emblems/default-emblem.svg",
      rank: "Sergeant",
      rankBadge: "/ranks/Sergeant.webp",
      isLeader: true
    }
  ]);

  return {
    players,
    maxPlayers
  };
}

