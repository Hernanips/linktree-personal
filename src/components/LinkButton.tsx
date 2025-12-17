type LinkButtonProps = {
    label: string,
    href: string
}

function LinkButton(props: LinkButtonProps) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer" className="block w-full px-6 py-4 text-center font-medium bg-indigo-400 border-indigo-400 hover:bg-indigo-700 hover:border-indigo-700 border rounded-xl transition">{props.label}</a>
    )
}

export default LinkButton