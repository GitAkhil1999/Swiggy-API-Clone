import { useEffect, useState } from "react"

const useOnline = ()=>{

    const [isOnline, setOnline] = useState(true)

    const handleOnline = ()=>{
        setOnline(true)
    }
    const handleOffline = ()=>{
        setOnline(false)
    }

    useEffect(()=>{
        addEventListener('online', handleOnline)
        addEventListener('offline', handleOffline)
    },[])

    return isOnline
}

export default useOnline