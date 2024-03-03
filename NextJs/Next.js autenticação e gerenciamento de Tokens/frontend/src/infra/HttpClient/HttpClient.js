// Arquitetura Hexagonal
// Ports & Adapters

import { tokenService } from "../../services/auth/tokenService";
import nookies from 'nookies'

export async function HttpClient(fetchUrl, fetchOptions = {}) {
    return fetch(fetchUrl, {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers || {},
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null
    })
        .then(async (res) => {
            return {
                ok: res.ok,
                status: res.status,
                statusText: res.statusText,
                body: await res.json()
            }
        })
        .then(async (res) => {
            if(fetchOptions.refresh && res.status === 401) {
                const isServer = Boolean(fetchOptions?.ctx);
                const currentRefreshToken = fetchOptions?.ctx?.req?.cookies["REFRESH_TOKEN_NAME"];

                const refreshResponse = await HttpClient('http://localhost:3000/api/refresh', {
                    method: isServer ? "PUT" : "GET",
                    body: isServer ? { refresh_token: currentRefreshToken } : undefined
                })

                try {
                    const newAccessToken = refreshResponse.body.data.access_token;
                    const newRefreshToken = refreshResponse.body.data.refresh_token;
    
                    if(isServer) {
                        nookies.set(fetchOptions?.ctx, 'REFRESH_TOKEN_NAME', newRefreshToken, {
                            httpOnly: true,
                            sameSite: 'lax',
                            path: '/'
                        })
                    }
    
                    tokenService.save(newAccessToken);
    
                    const retryResponse = await HttpClient(fetchUrl, {
                        ...fetchOptions,
                        headers: {
                            'Authorization': `Bearer ${newAccessToken}`
                        },
                        refresh: false,
                    })
    
                    return retryResponse;
                }catch(err) {
                    console.log(err)
                }   
            }
            return res
        })
}