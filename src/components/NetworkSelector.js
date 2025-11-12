'use client';

import { forwardRef } from 'react';

/**
 * NetworkSelector Component
 * Full-screen overlay for selecting network mode (Online, System Link, Local)
 */
const NetworkSelector = forwardRef(({ 
  isOpen,
  onlineMenuOpen,
  systemLinkMenuOpen,
  onOnlineToggle,
  onSystemLinkToggle,
  onNetworkSelect
}, ref) => {
  return (
    <div ref={ref} className={`halo3-network-select ${isOpen ? 'active' : ''}`}>
      <ul>
        <li>
          <a href="#selectNetwork" className="no-hover">SELECT NETWORK MODE</a>
        </li>
        <li>
          <a href="#selectLive" onClick={onOnlineToggle}>ONLINE</a>
          <div className={`halo3-option-box ${onlineMenuOpen ? 'active' : ''}`}>
            <a href="#openParty" onClick={(e) => { 
              e.preventDefault(); 
              onNetworkSelect('Online', 'Open Party'); 
            }}>
              OPEN PARTY
            </a>
            <a href="#friendsOnly" onClick={(e) => { 
              e.preventDefault(); 
              onNetworkSelect('Online', 'Friends Only'); 
            }}>
              FRIENDS ONLY
            </a>
            <a href="#inviteOnly" onClick={(e) => { 
              e.preventDefault(); 
              onNetworkSelect('Online', 'Invite Only'); 
            }}>
              INVITE ONLY
            </a>
          </div>
        </li>
        <li>
          <a href="#selectLink" onClick={onSystemLinkToggle}>SYSTEM LINK</a>
          <div className={`halo3-option-box ${systemLinkMenuOpen ? 'active' : ''}`}>
            <a href="#hostGame" onClick={(e) => { 
              e.preventDefault(); 
              onNetworkSelect('System Link', 'Host Game'); 
            }}>
              HOST GAME
            </a>
            <a href="#findGame" onClick={(e) => { 
              e.preventDefault(); 
              onNetworkSelect('System Link', 'Find Game'); 
            }}>
              FIND GAME...
            </a>
          </div>
        </li>
        <li>
          <a href="#selectLocal" onClick={(e) => { 
            e.preventDefault(); 
            onNetworkSelect('Local'); 
          }}>
            LOCAL
          </a>
        </li>
      </ul>
    </div>
  );
});

NetworkSelector.displayName = 'NetworkSelector';

export default NetworkSelector;

