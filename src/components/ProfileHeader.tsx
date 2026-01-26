interface ProfileHeaderProps {
  name: string;
  alias?: string;
  tagline?: string;
  avatarDark: string;
  avatarLight: string;
  className?: string;
}

export default function ProfileHeader({
  name,
  alias,
  tagline,
  avatarDark,
  avatarLight,
  className = "",
}: ProfileHeaderProps) {
  return (
    <header
      className={[
        "text-center px-6 pt-10 pb-8",
        "border-b border-[#f9f9f9]/20",
        className,
      ].join(" ")}
    >
      {/* Avatar */}
      <div className="mb-6 flex justify-center">
        <div
          className="
            h-28 w-28 rounded-full
            flex items-center justify-center
            border-2 border-[#f9f9f9]
            bg-[#0f0f0f] dark:bg-[#f9f9f9]
          "
        >
          {/* Modo claro */}
          <img
            src={avatarDark}
            alt="Profile icon"
            className="h-12 w-12 block dark:hidden"
            draggable={false}
          />

          {/* Modo oscuro */}
          <img
            src={avatarLight}
            alt="Profile icon"
            className="h-12 w-12 hidden dark:block"
            draggable={false}
          />
        </div>
      </div>

      <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight leading-[0.95]">
        {name}
      </h1>

      {alias && (
        <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[#f9f9f9]/70">
          {alias}
        </p>
      )}

      {tagline && (
        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-[#f9f9f9]/70">
          {tagline}
        </p>
      )}
    </header>
  );
}