import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const [show, setShow] = useState(true)
  
  useEffect(()=>{
    if (notification && notification !== ''){
      setShow(true)

      const timer = setTimeout(()=>{
        setShow(false)
      },5000)
      
      return () => clearTimeout(timer)
    }
  }, [notification])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: show && notification !== ''? 'block' : 'none'
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification