import styles from '../styles/Home.module.css'
interface indicatorsProps {
    numberItem: Number,
    ticker: String,
    value: Number,
    gain: String
  }
  

const Indicators = (props: indicatorsProps) => {
    return (
      <section className={styles.fiiDayWrapper}>   
        <section className={styles.fiiDayContent}>   
            <span>{ props.numberItem }</span>
            <span>{ props.ticker }</span>
            <span>r$ { props.value }</span>
            <span>{ props.gain }</span>
        </section>
      </section>
    )
}
  
export default Indicators;
