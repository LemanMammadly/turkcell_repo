import React from 'react'
import {useTheme} from '../contexts/ThemeContext'
import {useLang} from '../contexts/LangContext'

const Footer = () => {
    const {lang}=useLang()
    const {theme,toggleTheme}=useTheme()
  return (
    <div>
        <hr />
        <h2>Active theme: {theme}</h2>
        <button onClick={toggleTheme}>Change theme </button>

        <hr />

        <h2>Active lang : {lang}</h2>
    </div>
  )
}

export default Footer