import {useState,useEffect} from 'react'
import "./App.css";
import { IntlProvider, FormattedMessage} from "react-intl";

const messages = {
  'tr-TR':{
    title:"Merhaba Dunya",
    description:"3 yeni mesajiniz var"
  },
  'en-US':{
    title:"Hello World",
    description:"3 new message"
  }
};

function App() {
  const defaultLocale=navigator.language;
  const [locale,setLocale]=useState(defaultLocale);

  useEffect(()=>{
    localStorage.setItem("locale",locale)
  },[locale])


  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
        <FormattedMessage id="description" />

        </p>
        <br /><br />
        <button onClick={()=>setLocale('tr-TR')}>TR</button>
        <button onClick={()=>setLocale('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
