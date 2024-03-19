export const AUTH_KEY='X-AUTH-TOKEN'
export function getAuth(){
    return localStorage.getItem(AUTH_KEY)
}

export function setAuth(value:string){
    localStorage.setItem(AUTH_KEY,value)
}

export function removeAuth(){
    localStorage.removeItem(AUTH_KEY)
}