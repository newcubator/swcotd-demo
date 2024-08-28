export const getRelated = (url: string) => {
    return fetch(url).then(response => response.json());
};
