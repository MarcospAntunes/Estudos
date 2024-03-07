import { createContext, useContext } from "react";
import get from 'lodash/get'

const CmsContext = createContext({
    cmsContent: {}
});

export const getCMSContent = (path = '') => {
    const cmsContent = useContext(CmsContext).cmsContent;
    if(path === '') return cmsContent;

    const output = get(cmsContent, path);

    if(!output) throw new Error("Não foi possível encontrar a chave: ", path, "Reveja sua query e tente novamente.")
  return output
}

export default function CmsProvider({ cmsContent, children }) {
    return(
        <CmsContext.Provider value={{ cmsContent }}>
            {children}
        </CmsContext.Provider>
    )
}