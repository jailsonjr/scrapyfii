import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BarrigaLogo from '../images/barriga.png';
import BarrigaLogoSVG from '../images/barriga.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
        <Image src={BarrigaLogoSVG} alt="Sr Barriga FII Logo" width={53} height={75} className={styles.logoImage}/>
        <div className={styles.texts}>
            <h1 className={styles.appname}>sr. barriga</h1>
            <span className={styles.subtitle}>fundos imobiliarios</span>
            <span className={styles.phrase}>pague o aluguel!</span>
        </div>
    </div>
  )
}

export default Logo;
