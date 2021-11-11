import { onePiece } from '../data/query';

export const getFetchGifs = async( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=d3ZJ0gHQzxqgsKVHgVV71i3NEjGuTdUo`;
    
    let dataGif = [];

    try { // Se coloca el try por los problemas de conexion
        const resp = await fetch( url );
        const { data } = await resp.json();
        dataGif = data;
    } catch(error) {
        console.warn(error);
        dataGif = onePiece;
    }
    

    const gifs = dataGif.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};