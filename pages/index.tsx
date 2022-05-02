import type { NextPage } from 'next';
import Head from 'next/head';
import LinkPage from 'next/link';
import styles from '../styles/Home.module.css';
import { BsCalendar2Week as CalendarIcon, BsFillNodeMinusFill  } from "react-icons/bs"
import { BiBuildingHouse as FiisIcon  } from "react-icons/bi"

import Logo from '../components/logo';
import SearchInput from '../components/searchInput';
import Anchor from '../components/anchor';
import Indicators from '../components/indicators';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sr. Barriga FIIs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Logo />          
          <div className={styles.mainMenu}>
            <Anchor href="#" linkIcon={CalendarIcon} linkText="agenda dividendos" />
            <Anchor href="/allfiis" linkIcon={FiisIcon}  linkText="todos FIIs" />
            <SearchInput />
          </div>
        </div>

        <section className={styles.content}>
        <section className={styles.contentFiis}>
            <h3>MXRF<span>MAXI RENDA FDO INV IMOB - FII</span></h3>   
            <div className={styles.indicatorsFii}>
            </div>
          </section>
          <section className={styles.topFiis}>
            <h3>#top FIIs!</h3>
            <div className={styles.indicatorsFii}>
              <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
              <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            </div>
          </section>
          <section className={styles.downFiis}>
            <h3>#down FIIs!</h3> 
            <div className={styles.indicatorsFii}>
            <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={1} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            <Indicators numberItem={2} ticker="galg11" value={84.58} gain="+1,54%" />
            </div>           
          </section>
        </section>
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
