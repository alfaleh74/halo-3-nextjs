'use client';

import { forwardRef } from 'react';

/**
 * SelectionDropdown Component
 * Generic dropdown menu for selecting items (missions, maps, playlists, etc.)
 */
const SelectionDropdown = forwardRef(({ 
  isOpen, 
  title, 
  items, 
  selectedId, 
  onSelect,
  renderLabel 
}, ref) => {
  return (
    <div ref={ref} className={`halo3-select-menu ${isOpen ? 'active' : ''}`}>
      <ul>
        <li>
          <a href="#select" className="no-hover">{title}</a>
        </li>
        {items.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              onClick={(e) => { 
                e.preventDefault(); 
                onSelect(item); 
              }}
              style={{ 
                backgroundColor: selectedId === item.id ? '#714834' : 'transparent' 
              }}
            >
              {renderLabel ? renderLabel(item) : item.name.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

SelectionDropdown.displayName = 'SelectionDropdown';

export default SelectionDropdown;

