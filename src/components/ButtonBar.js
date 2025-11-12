import ControllerButton from './ControllerButton';

/**
 * ButtonBar Component
 * Renders a horizontal bar of keyboard keys or controller buttons with labels
 */
export default function ButtonBar({ buttons }) {
  return (
    <span className="halo3-button-bar">
      {buttons.map((button, index) => (
        <ControllerButton 
          key={index}
          icon={button.icon}
          keyName={button.key}
          label={button.label}
        />
      ))}
    </span>
  );
}

