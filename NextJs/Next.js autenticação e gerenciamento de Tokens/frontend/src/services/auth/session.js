import { authService } from "./authService";

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

export default withSession;