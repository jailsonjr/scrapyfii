import styles from '../styles/Home.module.css'
import { BsCalendar2Week as CalendarIcon  } from "react-icons/bs"

const Link = () => {
    return (
      <a href='#' className={styles.link}>
        <CalendarIcon className={styles.calendarIcon}/>
        <span>agenda dividendos</span>        
      </a>
    )
}
  
export default Link;
