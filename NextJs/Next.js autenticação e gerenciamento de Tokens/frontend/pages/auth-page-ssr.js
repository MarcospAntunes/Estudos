import Link from 'next/link';
import { withSession } from '../src/services/auth/session';

function AuthPageSSR(props) {
    return (
        <div>
            <h1>
                Auth Page SSR
            </h1>
            <Link href="/logout">Logout</Link>
            <Link href="/auth-page-static">Auth-page-Static</Link>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    )
}

export default AuthPageSSR;

// Decorator Pattern

export const getServerSideProps = withSession((ctx) => {
    return {
        props: {
            session: ctx.req.session
        }
    }
});

// export async function getServerSideProps(ctx) {
//     try {
//         const session = await authService.getSession(ctx)
    
//         return {
//             props: {
//                 token: session
//             }
//         }
//     } catch(err) {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: '/?error=unauthorized',
//             }
//         }
//     }
// }