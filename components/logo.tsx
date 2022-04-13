import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BarrigaLogoSVG from '../images/barriga.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoImageWrapper}>
        <Image src={BarrigaLogoSVG} alt="Sr Barriga FII Logo" layout="fixed" objectFit="contain" width={53} height={75} className={styles.logoImage}/>
      </div>
      <div className={styles.texts}>
        <h1 className={styles.appname}>sr. barriga</h1>
        <span className={styles.subtitle}>fundos imobiliarios</span>
        <span className={styles.phrase}>pague o aluguel!</span>
      </div>
    </div>
  )
}

export default Logo;
