// Halo 3 Game Data - Accurate to the original game

export const campaigns = [
  { id: 'arrival', name: 'Arrival', difficulty: 'Normal', image: 'c_005_sm.jpg' },
  { id: 'sierra117', name: 'Sierra 117', difficulty: 'Normal', image: 'c_010_sm.jpg' },
  { id: 'crowsnest', name: "Crow's Nest", difficulty: 'Normal', image: 'c_020_sm.jpg' },
  { id: 'tsavo', name: 'Tsavo Highway', difficulty: 'Normal', image: 'c_030.jpg' },
  { id: 'storm', name: 'The Storm', difficulty: 'Normal', image: 'c_040.jpg' },
  { id: 'floodgate', name: 'Floodgate', difficulty: 'Normal', image: 'c_050.jpg' },
  { id: 'ark', name: 'The Ark', difficulty: 'Normal', image: 'c_070.jpg' },
  { id: 'covenant', name: 'The Covenant', difficulty: 'Normal', image: 'c_100.jpg' },
  { id: 'cortana', name: 'Cortana', difficulty: 'Normal', image: 'c_110.jpg' },
  { id: 'halo', name: 'Halo', difficulty: 'Normal', image: 'c_120_sm.jpg' }
];

export const difficulties = [
  { id: 'easy', name: 'Easy', description: 'Your foes cower before your unstoppable onslaught' },
  { id: 'normal', name: 'Normal', description: 'Hordes of aliens vie to destroy you' },
  { id: 'heroic', name: 'Heroic', description: 'Your enemies are numerous and determined to your doom' },
  { id: 'legendary', name: 'Legendary', description: 'You face opponents who have never known defeat' }
];

export const multiplayerMaps = [
  { id: 'guardian', name: 'Guardian', image: 'm_guardian_sm.jpg' },
  { id: 'valhalla', name: 'Valhalla', image: 'm_riverworld.jpg' },
  { id: 'highground', name: 'High Ground', image: 'm_zanzibar.jpg' },
  { id: 'snowbound', name: 'Snowbound', image: 'm_snowbound.jpg' },
  { id: 'narrows', name: 'The Narrows', image: 'm_chill_sm.jpg' },
  { id: 'construct', name: 'Construct', image: 'm_construct_sm.jpg' },
  { id: 'lastresort', name: 'Last Resort', image: 'm_salvation.jpg' },
  { id: 'sandtrap', name: 'Sandtrap', image: 'm_cyberdyne_sm.jpg' },
  { id: 'epitaph', name: 'Epitaph', image: 'm_shrine_sm.jpg' },
  { id: 'isolation', name: 'Isolation', image: 'm_isolation_sm.jpg' }
];

export const playlists = [
  { id: 'social_slayer', name: 'Social Slayer', type: 'social', players: '4-16' },
  { id: 'lone_wolves', name: 'Lone Wolves', type: 'ranked', players: '6-8' },
  { id: 'team_slayer', name: 'Team Slayer', type: 'ranked', players: '4-8' },
  { id: 'team_doubles', name: 'Team Doubles', type: 'ranked', players: '2-4' },
  { id: 'swat', name: 'SWAT', type: 'ranked', players: '4-16' },
  { id: 'team_snipers', name: 'Team Snipers', type: 'ranked', players: '4-16' },
  { id: 'big_team_battle', name: 'Big Team Battle', type: 'social', players: '12-16' },
  { id: 'multi_team', name: 'Multi Team', type: 'social', players: '9-16' },
  { id: 'rumble_pit', name: 'Rumble Pit', type: 'social', players: '4-8' }
];

export const gameTypes = [
  { id: 'slayer', name: 'Slayer', description: 'Kill enemy players' },
  { id: 'ctf', name: 'Capture the Flag', description: 'Steal the enemy flag and return it to your base' },
  { id: 'assault', name: 'Assault', description: 'Arm the bomb at the enemy base' },
  { id: 'oddball', name: 'Oddball', description: 'Hold the ball to earn points' },
  { id: 'koth', name: 'King of the Hill', description: 'Control the hill to earn points' },
  { id: 'vip', name: 'VIP', description: 'Protect your VIP while killing the enemy VIP' },
  { id: 'territories', name: 'Territories', description: 'Capture and hold territories' },
  { id: 'juggernaut', name: 'Juggernaut', description: 'Kill the Juggernaut to become the Juggernaut' },
  { id: 'infection', name: 'Infection', description: 'Survive the zombie infection' }
];

export const networkModes = [
  { 
    id: 'online', 
    name: 'Online',
    options: [
      { id: 'open', name: 'Open Party', description: 'Anyone can join' },
      { id: 'friends', name: 'Friends Only', description: 'Only friends can join' },
      { id: 'invite', name: 'Invite Only', description: 'Requires invitation' }
    ]
  },
  { 
    id: 'system_link', 
    name: 'System Link',
    options: [
      { id: 'host', name: 'Host Game', description: 'Host a local network game' },
      { id: 'find', name: 'Find Game...', description: 'Join a local network game' }
    ]
  },
  { 
    id: 'local', 
    name: 'Local',
    options: []
  }
];

export const forgeObjects = [
  { id: 'weapons', name: 'Weapons', count: 47 },
  { id: 'vehicles', name: 'Vehicles', count: 14 },
  { id: 'equipment', name: 'Equipment', count: 8 },
  { id: 'scenery', name: 'Scenery', count: 156 },
  { id: 'teleporters', name: 'Teleporters', count: 2 },
  { id: 'spawning', name: 'Spawning', count: 23 }
];

export const mockFilms = [
  { id: 1, name: 'Triple Kill Spree', map: 'Guardian', type: 'Multiplayer', duration: '12:34' },
  { id: 2, name: 'Legendary Finish', map: 'The Covenant', type: 'Campaign', duration: '45:12' },
  { id: 3, name: 'Infection Victory', map: 'Snowbound', type: 'Multiplayer', duration: '8:45' },
  { id: 4, name: 'BTB Carnage', map: 'Valhalla', type: 'Multiplayer', duration: '15:23' }
];

export function getRandomOnlineCount() {
  return Math.floor(Math.random() * (5000 - 1000) + 1000);
}

