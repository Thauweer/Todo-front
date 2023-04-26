import { useEffect, useRef } from 'react'

const useOutside = <T extends HTMLElement>(handler: () => void) => {
  const ref = useRef<T>(null)
  
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler()    
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })
  
  return ref
}

export default useOutside