import styles from '../styles/Home.module.css'
import { IconType } from "react-icons"
import React from 'react'
import Link from 'next/link'

interface linkProps {
  linkText: string,
  linkIcon: IconType,
  href: string
}

const Anchor = (props: linkProps) => {
    return (
      <Link href={props.href}>
        <a className={styles.link}>
          <props.linkIcon className={styles.calendarIcon}/>
          <span>{ props.linkText }</span>        
        </a>
      </Link>
    )
}
  
export default Anchor;
