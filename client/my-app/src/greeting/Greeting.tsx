

import * as React from 'react';
import Container from '@mui/material/Container/Container';
import { Link } from 'react-router-dom';
import { greetingStyles } from './greetingStyles';


export default function Greeting() {

  const classes = greetingStyles()

  
  return (
    <div className={classes.bg1} >
      <div className={classes.content1}>
        <div className={classes.textContent}>
          <div className={classes.title}>Добро пожаловать!</div>
          <div className={classes.text}>Спасибо, что выбрали нас, желаем Вам приятного использования сервисом Ipluse</div>
        </div>

        <Link className={classes.link} to={'/main'}><button className={classes.btn}>Начать работу</button></Link>
      </div>

    </div>
  )
}
