import Image from "next/image";

/**
 * ControllerButton Component
 * Renders a keyboard key or controller icon with label
 * Supports both 'icon' (for controller) and 'keyName' (for keyboard) props
 */
export default function ControllerButton({ icon, keyName, label }) {
  // If key is provided, render keyboard key text; otherwise use icon image
  if (keyName) {
    return (
      <>
        <span className="halo3-keyboard-key">{keyName}</span>
        <span>{label}</span>
      </>
    );
  }

  // Fallback to icon if provided
  if (icon) {
    return (
      <>
        <Image 
          src={`/controllericons/${icon}.png`} 
          alt={label} 
          width={40} 
          height={40} 
          className="halo3-controller-icon" 
        />
        <span>{label}</span>
      </>
    );
  }

  return <span>{label}</span>;
}

