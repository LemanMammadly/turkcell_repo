import React,{useContext} from 'react'
import ChangeLang from './components/ChangeLang'
import ChangeTheme from './components/ChangeTheme'
import Footer from './components/Footer'
import {useTheme} from './contexts/ThemeContext'

const Container = () => {

    const {theme}=useTheme()
  return (
    <div className={`container ${theme}`}>
         <ChangeTheme/>
        <hr />
        <ChangeLang/> 
        <Footer/>
    </div>
  )
}

export default Container