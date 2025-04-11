import  { useState } from 'react'

const useChangePhoneUtils = () => {
    const[showerror,setShowerror] = useState(false)
    const handleShowError =() =>{
        setShowerror(true)
    }
  return {
    showerror,
    handleShowError
  }
}

export default useChangePhoneUtils
