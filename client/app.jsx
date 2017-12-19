import React from 'react'
import { render } from 'react-dom'
import Routes from './components/routes.jsx'
import './static/public/styles/home.scss'

render(
  <Routes/>,
  document.querySelector('#root')
)