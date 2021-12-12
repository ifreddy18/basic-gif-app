import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en custom hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Black Clover') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('debe de retornar un arreglo de imagenes y loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Black Clover') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);

    })
    
    
})
