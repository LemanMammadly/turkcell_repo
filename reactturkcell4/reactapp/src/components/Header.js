import React,{memo} from 'react'

const Header = ({increment}) => {
    console.log("Header component re-render");
  return (
    <div>Header
        <button onClick={increment}>Arttir</button>
    </div>
  )
}

export default memo(Header)