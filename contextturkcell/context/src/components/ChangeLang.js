import React from 'react'
import {useLang} from '../contexts/LangContext'

const ChangeLang = () => {

    const {lang,setLang}=useLang()
  return (
    <div>
        Active Lang:{lang }

        <div>
          <button onClick={()=>setLang("tr")}>TR</button>
          <button onClick={()=>setLang("aze")}>AZE</button> 
          <button onClick={()=>setLang("en")}>EN</button>
        </div>
    </div>
  )
}

export default ChangeLang