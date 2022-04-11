import styles from '../styles/Home.module.css'
import { IoIosSearch as SearchIcon  } from "react-icons/io"

const SearchInput = () => {
    return (
      <div className={styles.searchInput}>
        <input type="text" placeholder="busque por um fii"/>
        <SearchIcon className={styles.searchIcon}/>
      </div>
    )
}
  
export default SearchInput;
