const getApiUrl = (path: string): string => {
    if(process.env.NODE_ENV === 'development') return `http://localhost:5000${path}`
    return `https://aset-website-api.herokuapp.com${path}`
}

export default getApiUrl;
