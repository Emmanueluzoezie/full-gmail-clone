import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface IstateContext {
  sidebar:boolean
  setSidebar: Dispatch<SetStateAction<boolean>>
  screenSize: number | undefined, 
  setScreenSize: Dispatch<SetStateAction<number | undefined>>, activeMenu: boolean, 
  setActiveMenu: Dispatch<SetStateAction<boolean>>,
  leftSidebar:boolean,
  setLeftSidebar: Dispatch<SetStateAction<boolean>>,
  moreSidebarItems:boolean,
  setMoreSidebarItems: Dispatch<SetStateAction<boolean>>
  checkbox: boolean,
  setCheckbox: Dispatch<SetStateAction<boolean>>,
  compose: boolean,
  setCompose: Dispatch<SetStateAction<boolean>>,
  composeDropDown: boolean,
  setComposeDropDown: Dispatch<SetStateAction<boolean>>
}

const initialState = {
  sidebar: false,
  setSidebar:  () => false,
  screenSize: 0,
  setScreenSize:  () => 0,
   activeMenu: false, 
   setActiveMenu:  () => false,
   leftSidebar: true,
  setLeftSidebar: () => true,
  moreSidebarItems: false,
  setMoreSidebarItems: () => false,
  checkbox: false,
  setCheckbox: () => false,
  compose: false,
  setCompose: () => false,
  composeDropDown: false,
  setComposeDropDown: () => false
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
  children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({children}) => {
  const [sidebar, setSidebar] = useState<boolean>(false)
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined)
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [leftSidebar, setLeftSidebar] = useState<boolean>(true)
  const [moreSidebarItems, setMoreSidebarItems] = useState<boolean>(true)
  const [checkbox, setCheckbox] = useState<boolean>(false)
  const [compose, setCompose] = useState<boolean>(false)
  const [composeDropDown, setComposeDropDown] = useState<boolean>(false)

  return (
    <StateContext.Provider value={{sidebar, setSidebar, screenSize, setScreenSize, activeMenu, setActiveMenu, leftSidebar, setLeftSidebar, moreSidebarItems, setMoreSidebarItems, checkbox, setCheckbox, compose, setCompose, composeDropDown, setComposeDropDown}}>
      {children}
    </StateContext.Provider>
  )
}

export const useContextState = () => useContext(StateContext)