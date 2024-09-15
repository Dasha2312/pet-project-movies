import { createContext, useContext, useEffect, useState } from "react";

const siteContext = createContext(null);

function ContextProvider({children}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleMobile() {
      const windowWidth = window.innerWidth;
      if(windowWidth <= 767) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    handleMobile();

    window.addEventListener('resize', handleMobile)

    return() => {
      window.removeEventListener('resize', handleMobile)
    }
  }, [])

  return (
    <siteContext.Provider value={isMobile}>
      {children}
    </siteContext.Provider>
  )
}

function useContextProvider() {
  const context = useContext(siteContext);

  if(context == null) throw new Error("Error Site Context");

  return context;
}

export {ContextProvider, useContextProvider}