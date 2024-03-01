// Arquitetura Hexagonal
// Ports & Adapters

import { tokenService } from "../../services/auth/tokenService";

export async function HttpClient(fetchUrl, fetchOptions) {
    return fetch(fetchUrl, {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
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
                const refreshResponse = await HttpClient('http://localhost:3000/api/refresh', {
                    method: "GET"
                })

                const newAccessToken = refreshResponse.body.data.access_token;
                const newRefreshToken = refreshResponse.body.data.refresh_token;

                tokenService.save(newAccessToken);

                const retryResponse = await HttpClient(fetchUrl, {
                    ...fetchOptions,
                    headers: {
                        'Authorization': `Bearer ${newAccessToken}`
                    },
                    refresh: false,
                })
            }
            
            return res
        })
}