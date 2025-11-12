import Link from "next/link";
import Image from "next/image";
import { VideoBackground } from "@/components";
import { VIDEO_SOURCES } from "@/constants";

export default function Home() {
  return (
    <div>
      <VideoBackground src={VIDEO_SOURCES.MAIN_MENU} />

      <ul className="halo3-menu">
        <li>
          <a href="#start" className="no-hover">START SOLO GAME</a>
        </li>
        <li>
          <Link href="/campaign">CAMPAIGN</Link>
        </li>
        <li>
          <Link href="/multiplayer">MATCHMAKING</Link>
        </li>
        <li>
          <Link href="/custom">CUSTOM GAMES</Link>
        </li>
        <li>
          <Link href="/forge">FORGE</Link>
        </li>
        <li>
          <Link href="/theater">THEATER</Link>
        </li>
      </ul>

      <div className="halo3-logo">
        <Image 
          src="/backgrounds/halo3_logo_ui.png" 
          alt="Halo 3 Logo" 
          width={800}
          height={400}
          priority
        />
      </div>

      <div className="halo3-bungie-logo">
        <Image 
          src="/backgrounds/bungielogo.png" 
          alt="Bungie Logo"
          width={250}
          height={100}
        />
      </div>
    </div>
  );
}
