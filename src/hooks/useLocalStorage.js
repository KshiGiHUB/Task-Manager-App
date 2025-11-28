import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialVal) => {
    const [value, setValue] = useState(()=>{
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialVal
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[value])

  return [value, setValue]
}

export default useLocalStorage