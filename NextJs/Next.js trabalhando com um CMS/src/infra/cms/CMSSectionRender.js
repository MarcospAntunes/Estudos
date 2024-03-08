import { cmsSections } from "../../components/cmsSections";
import { getCMSContent } from "./cmsProvider"

export function CMSSectionRender({ pageName }) {
    const sections = getCMSContent(`${pageName}.pageContent.screenSampleSectionGroup`);
    return sections.map((props) => {
        const Component = cmsSections[`${props.componentName}`]
        const isVisible = props.visible === true || props.visible === undefined;

        if(!Component) return null
        if(!isVisible) return null
        
        return (
            <Component key={props.id} {...props} />
        )
    })
}