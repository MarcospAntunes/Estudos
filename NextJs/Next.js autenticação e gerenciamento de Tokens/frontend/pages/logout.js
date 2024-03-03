import { Suspense } from 'react';
import { HttpClient } from '../src/infra/HttpClient/HttpClient';
import { tokenService } from '../src/services/auth/tokenService';
import { useRouter } from 'next/router';

export default async function LogoutPage() {
    
    await HttpClient('/api/refresh', {
        method: "DELETE"
    });

    try {
        const router = useRouter();
        tokenService.delete();
        router.push('/');
    } catch(err) {
        console.log(err)
    }

    return(
        <Suspense fallback={<p>Loading..</p>}>
            <h1>Você será redirecionado em instantes...</h1>
        </Suspense>
    )
}