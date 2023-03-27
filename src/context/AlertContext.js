import { createContext, useContext, useState } from 'react';

const AlertContext = createContext(undefined)
const AlertProvider = ({children}) => {
  const [state, setState] = useState({isOpen: false})
  const [result, setResult] = useState({});
    return(
      <AlertContext.Provider value={
        {
          ...state,
          ...result,
          onOpen: () => setState({isOpen: true}),
          onClose: () => setState({isOpen: false}),
          onResult: (r) => setResult(r),
        }
      }>
        {children}
      </AlertContext.Provider>
    )
}

export default AlertProvider;
export const useAlertContext = () => useContext(AlertContext);