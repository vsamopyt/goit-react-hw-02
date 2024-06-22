import clsx from 'clsx';
import css from './Description.module.css';
export default function Description({ title, text }) {
  return (
    <div className={clsx(css['descriptionContainer'])}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
