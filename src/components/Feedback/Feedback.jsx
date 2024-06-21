import clsx from "clsx"
import css from "./Feedback.module.css"

export default function Feedback ({title, value}) {
    return (
        <div>
        <span className={clsx(css["valueFeedbck"])}>{title}: </span>
        <span >{value}</span>

        </div>
       
    )
}