import React, {useState} from 'react'
const Hello = ({name}) => {

  const [innerName, setName] = useState(name)
  return (
    <>
      <div className="hello">hello {innerName}</div>
      <div className="hello">hello {innerName}</div>
      <div className="unique" />
      <button data-testid="button" onClick={() => {setName('Awesome')}}>改变</button>
    </>
  )
}
export default Hello