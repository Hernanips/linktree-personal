import { LINKS } from "./data/links";
import avatarDark from "./assets/avatar-dark.png";
import avatarLight from "./assets/avatar-light.png";

import ProfileHeader from "./components/ProfileHeader";
import LinksSection from "./components/LinksSection";

function App() {
  return (
    <div className="min-h-dvh bg-[#0f0f0f] text-[#f9f9f9] overflow-hidden">
      <div className="mx-auto min-h-dvh w-full max-w-full sm:max-w-lg sm:flex sm:items-center sm:justify-center sm:px-6 sm:py-10">
        <div className="w-full h-dvh overflow-hidden flex flex-col sm:h-auto sm:overflow-visible sm:border sm:border-[#f9f9f9]/20 sm:bg-[#0f0f0f]">
          <main className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 flex flex-col">
              <ProfileHeader
                name="HERNANIPS"
                alias="VICTOR HERNANI"
                tagline="Videojuegos · Apps · Web · Diseño Digital"
                avatarDark={avatarDark}
                avatarLight={avatarLight}
              />

              <LinksSection links={LINKS} className="flex-1 min-h-0" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;