export const encode = data => 
    btoa(
        encodeURIComponent(
            JSON.stringify(
                data
            )
        )
    )
    .replace(/=/gi, '_')

export const decode = data => 
    JSON.parse(
        decodeURIComponent(
            atob(
                data.replace(/_/gi, '=')
            )
        )
    )