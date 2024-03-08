import { cmsSections } from "../../components/cmsSections";
import { getCMSContent } from "./cmsProvider"

export function CMSSectionRender({ pageName }) {
    const sections = getCMSContent(`${pageName}.pageContent.screenSampleSectionGroup`);
    console.log(sections)
    return sections.map((props) => {
        const Component = cmsSections[`${props.componentName}`]
        console.log(cmsSections[`${props.componentName}`])

        if(!Component) return null
        
        return (
            <Component key={props.id} {...props} />
        )
    })
}