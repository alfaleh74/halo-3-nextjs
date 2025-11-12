/**
 * Get film image based on film type and map
 * @param {Object} film - Film object with type and map properties
 * @returns {string} - Image filename
 */
export function getFilmImage(film) {
  if (film.type === 'Campaign') {
    return 'c_070.jpg';
  }
  
  // Map-specific images
  const mapImages = {
    'Guardian': 'm_guardian_sm.jpg',
    'Snowbound': 'm_snowbound.jpg',
    'Valhalla': 'm_riverworld.jpg'
  };
  
  return mapImages[film.map] || 'c_070.jpg';
}

