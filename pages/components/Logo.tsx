import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
        <Image src="/barriga.png" alt="Sr Barriga FII Logo" width={42} height={40} className={styles.logoImage}/>
        <div className={styles.texts}>
            <h1 className={styles.appname}>sr. barriga</h1>
            <span className={styles.subtitle}>fundos imobiliarios</span>
            <span className={styles.phrase}>pague o aluguel!</span>
        </div>
    </div>
  )
}

export default Logo;
