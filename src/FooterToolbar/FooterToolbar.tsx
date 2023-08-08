import React from 'react'
import style from './FooterToolbar.module.css'



export interface IFooterToolbarComponentProps {
  icon: React.ReactElement;
  label: string;
  onclick: CallableFunction
}

const FooterToolbar = ({ icon, onclick, label }: IFooterToolbarComponentProps) => {
  return (

    <li className={style.li}>
      <span className={style.span}>{label}</span>
      <a href="#"><div className={style.img}>{icon}</div></a>
    </li>
  )
}

export default FooterToolbar