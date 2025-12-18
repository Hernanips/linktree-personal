type LinkButtonProps = {
  label: string;
  href: string;
};

function LinkButton(props: LinkButtonProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="
        block w-full px-6 py-4 text-center font-semibold rounded-xl
        transition-all duration-300 ease-in-out

        bg-white/10 dark:bg-white/5 
        hover:bg-white/20 dark:hover:bg-white/10
        backdrop-blur-md

        text-neutral-800 dark:text-neutral-100
        shadow-lg shadow-black/5
        
        border border-white/20 dark:border-white/10
        hover:border-white/40 dark:hover:border-white/20
        
        hover:-translate-y-0.5
        active:scale-[0.98]
        active:translate-y-0
      "
    >
      {props.label}
    </a>
  );
}

export default LinkButton;
