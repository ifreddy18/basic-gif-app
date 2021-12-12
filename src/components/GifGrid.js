import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    // Hook que se dispara la primera vez y luego no se dispara hasta que el
    // valor de 'category' cambia
    // useEffect(() => {
    //     getFetchGifs( category ).then( setImages );        
    // }, [ category ]); 
    
    return (
        <>
            <h2>{ category }</h2>
               
            { 
                loading && 
                <p className="animate__animated animate__flash">
                    Cargando...
                </p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    );

};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};