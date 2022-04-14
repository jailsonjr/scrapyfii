import styles from '../styles/Home.module.css'
interface indicatorsProps {
    numberItem: Number,
    ticker: String,
    value: Number,
    gain_today: String,
    gain_7d: String
  }
  

const Indicators = (props: indicatorsProps) => {
    return (
      <section className={styles.fiiDayWrapper}>   
        <section className={styles.fiiDayContent}>   
            <span>{ props.numberItem }</span>
            <span>{ props.ticker }</span>
            <span>r$ { props.value }</span>
            <span>{ props.gain_today }</span>
            <span>{ props.gain_7d }</span>
        </section>
      </section>
    )
}
  
export default Indicators;
