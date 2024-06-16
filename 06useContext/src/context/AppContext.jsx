import { createContext } from "react"

export const AppContext = createContext()

const ContextProvider = (props)=>{
    const phone = "8081911734"
    const name = "Ashish"

    return(
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider