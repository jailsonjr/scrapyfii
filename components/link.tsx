import styles from '../styles/Home.module.css'
import { IconType } from "react-icons"

interface linkProps {
  linkText: String,
  linkIcon: IconType
}

const Link = (props: linkProps) => {
    return (
      <a href='#' className={styles.link}>
        <props.linkIcon className={styles.calendarIcon}/>
        <span>{ props.linkText }</span>        
      </a>
    )
}
  
export default Link;
