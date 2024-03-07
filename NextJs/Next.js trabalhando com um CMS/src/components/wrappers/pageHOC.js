import CmsProvider from "../../infra/cms/cmsProvider";

export function pageHOC(Component) {
    return function Wrapper(props) {
        return (
            <CmsProvider cmsContent={props.cmsContent}>
                <Component {...props} />
            </CmsProvider>
        )
    }
}