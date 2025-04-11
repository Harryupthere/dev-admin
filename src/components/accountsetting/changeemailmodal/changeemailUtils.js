import  { useState } from 'react'

const useChangeEmailUtils = () => {
    const[showerror,setShowerror] = useState(false)
    const handleShowError =() =>{
        setShowerror(true)
    }
  return {
    showerror,
    handleShowError
  }
}

export default useChangeEmailUtils
