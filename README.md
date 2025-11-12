# Halo 3 Menu System - Next.js Recreation

A faithful recreation of the iconic Halo 3 menu system, rebuilt with modern web technologies for optimal performance and user experience.

## 🎮 About

This project is an enhanced recreation of the Halo 3 menu interface originally created by [Matthew Isbell](https://github.com/matthew-isbell/halo-3-menus-remake). Building upon his excellent foundation, this version has been modernized and extended using Next.js 15, React 19, and modern web standards to provide a more robust, maintainable, and optimized experience.

## ✨ Features

- **Complete Menu System**: Fully functional Main Menu, Campaign, Multiplayer, Custom Games, Forge, and Theater lobbies
- **Authentic Halo 3 UI**: Faithful recreation of the original 2007 menu design with proper styling and animations
- **Seamless Video Backgrounds**: Optimized video playback with anti-flicker technology for smooth looping
- **Player Roster System**: Classic Halo 3 player list with animated spinners, emblems, and rank badges
- **Responsive Controls**: Keyboard-based navigation designed for PC
- **Dynamic Menu System**: Interactive dropdowns for map selection, game modes, difficulty settings, and more
- **PC-Optimized**: Adapted from Xbox Live to modern online gaming conventions

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Custom CSS with Halo 3-authentic color schemes and animations
- **Image Optimization**: Next.js Image component for optimal loading
- **Architecture**: Component-based with custom hooks for reusability

## 📁 Project Structure

```
halo-3-nextjs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Main menu
│   │   ├── campaign/          # Campaign lobby
│   │   ├── multiplayer/       # Matchmaking lobby
│   │   ├── custom/            # Custom games lobby
│   │   ├── forge/             # Forge lobby
│   │   ├── theater/           # Theater lobby
│   │   └── halo3.css          # Global Halo 3 styles
│   ├── components/            # Reusable UI components
│   │   ├── VideoBackground.js # Optimized video player
│   │   ├── PlayerRoster.js    # Player list component
│   │   ├── SelectionDropdown.js
│   │   ├── SwitchLobbyMenu.js
│   │   ├── ButtonBar.js
│   │   └── ...
│   ├── hooks/                 # Custom React hooks
│   │   ├── useClickOutside.js
│   │   ├── useOnlineCount.js
│   │   └── usePlayerData.js
│   ├── constants/             # App constants
│   ├── lib/                   # Utility functions
│   └── data/                  # Game data (maps, modes, etc.)
├── public/
│   ├── backgrounds/           # Map images and videos
│   ├── ranks/                 # Rank badge images
│   └── emblems/               # Player emblems
└── README.md
```

## 🎯 Enhancements & Optimizations

This version includes significant improvements over the original:

### **Architecture & Code Quality**
- ✅ Fully modular component-based architecture
- ✅ Custom hooks for state management and reusability
- ✅ Consistent codebase with shared components across all pages
- ✅ Type-safe prop handling and validation
- ✅ Organized file structure following Next.js best practices

### **Performance Optimizations**
- ✅ Seamless video looping with anti-flicker technology
- ✅ Hardware-accelerated CSS animations
- ✅ Optimized image loading with Next.js Image component
- ✅ Efficient state management with React hooks
- ✅ Minimized re-renders through proper memoization

### **UI/UX Improvements**
- ✅ Consistent "ONLINE (OPEN PARTY)" network mode across all lobbies
- ✅ Unified "SWITCH LOBBY" dropdown menu for easy navigation
- ✅ "MAIN MENU" option in all lobby screens
- ✅ Authentic Halo 3 player roster with spinning emblems and rank badges
- ✅ Proper brown gradient hover effects on main menu
- ✅ Keyboard controls (E, Q, ESC, Enter, Tab) for PC gaming
- ✅ Removed all Xbox-specific references in favor of PC conventions

### **Visual Fidelity**
- ✅ Accurate Halo 3 color palette and gradients
- ✅ Proper text sizing and spacing matching original menus
- ✅ Authentic button bar styling
- ✅ Spinning disc animations on player roster
- ✅ Classic Halo 3 rank badges (Sergeant, etc.)
- ✅ Detailed emblem system with SVG support

## 🎨 Design Philosophy

This recreation prioritizes authenticity while embracing modern web standards:

- **Pixel-Perfect Styling**: Carefully matched colors, fonts, and spacing to the original Halo 3 menus
- **Smooth Animations**: Hardware-accelerated CSS for 60fps performance
- **Accessibility**: Proper semantic HTML and keyboard navigation
- **Maintainability**: Clean, documented code with reusable components

## 🙏 Credits

- **Original Creator**: [Matthew Isbell](https://github.com/matthew-isbell/halo-3-menus-remake) - For the initial HTML/CSS/JS recreation that inspired this project
- **Game Design**: Bungie Studios - For creating the iconic Halo 3 interface (2007)
- **Assets**: Game assets and designs are property of Microsoft/343 Industries

## 📝 License

This is a fan project created for educational and nostalgic purposes. Halo 3 and all related assets are property of Microsoft Corporation and 343 Industries.

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the menu system.

## 🎮 For Halo 3 Fans

Like [halome.nu](https://halome.nu/), this recreation can be left running on a second monitor for that authentic Halo 3 lobby experience. Unlike other fan sites, this version offers full menu navigation and customization options.

---

**Built with ❤️ by Halo 3 fans, for Halo 3 fans**

*"Finish the Fight" - Master Chief*
