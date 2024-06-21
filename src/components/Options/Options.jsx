import clsx from "clsx"
import css from "./Options.module.css"

export default function Options ({title, onUpdate}) {
    return (
        <button className={clsx(css["buttonOptions"])} onClick={onUpdate}>{title}</button>
    )
}