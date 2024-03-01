import { authService } from "./authService";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function withSession(func) {
    return async(ctx) => {
        try {
            const session = await authService.getSession(ctx);
            const modifiedCtx = {
                ...ctx,
                req: {
                    ...ctx.req,
                    session
                }
            }
        
            return func(modifiedCtx)
        } catch(err) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/?error=unauthorized',
                }
            }
        }
    }
}

function useSession() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        authService.getSession()
            .then((res) => {
                setSession(res)
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);
    
    return {
        data: session,
        error,
        loading
    }

};

function withSessionHOC(Component) {
    return function Wrapper(props) {
        const session = useSession();
        const router = useRouter();
        
        if(!session.loading && !session.error) {
            router.push('/?error=401')
        }

        const modifiedProps = {
            ...props,
            session: session.data.session
        }
        return (
            <Component {...modifiedProps}/>
        )
    }
}


export {withSession, withSessionHOC};