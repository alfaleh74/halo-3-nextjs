import Image from "next/image";

/**
 * PageLogo Component
 * Renders the mission/map image in the lobby menu
 */
export default function PageLogo({ image, alt, fullSize = false }) {
  return (
    <div className={fullSize ? "halo3-page-logo-full" : "halo3-page-logo"}>
      <Image 
        src={`/backgrounds/${image}`}
        alt={alt}
        width={680}
        height={fullSize ? 400 : 250}
      />
    </div>
  );
}

