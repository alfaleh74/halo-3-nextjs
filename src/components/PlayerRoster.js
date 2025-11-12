'use client';

import Image from "next/image";

/**
 * PlayerRoster Component (Classic Halo 3 style)
 * Right-aligned roster with header and a horizontal red bar entry per player
 */
export default function PlayerRoster({ players, maxPlayers = 16 }) {
  return (
    <div className="halo3-roster">
      <div className="halo3-roster-count">
        {players.length} Player{players.length !== 1 ? "s" : ""} ({maxPlayers} max)
      </div>

      {players.map((player, index) => (
        <div key={index} className="halo3-roster-entry">
          <span className="halo3-roster-spinner" aria-hidden="true" />

          <div className="halo3-roster-bar">
            <div className="halo3-roster-emblem-wrap" aria-hidden="true">
              {player.emblem ? (
                <Image
                  src={player.emblem}
                  alt={`${player.name} emblem`}
                  width={30}
                  height={30}
                />
              ) : (
                <span className="halo3-roster-emblem-placeholder" />
              )}
            </div>

            <span className="halo3-roster-name">{player.name}</span>

            <span className="halo3-roster-device-bg" aria-hidden="true">
              {player.rankBadge && (
                <div className="halo3-roster-rank-badge">
                  <Image
                    src={player.rankBadge}
                    alt={player.rank || "Rank"}
                    width={32}
                    height={32}
                  />
                </div>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

