import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');// Simula ejecucion y resp de useFetchGifs

describe('Pruebas en <GifGrid />', () => {

    const category = 'Black Clover';

    test('Se debe mostrar el componene correctamente', () => {
        // Simulacion de del return del custom hook useFetchGifs
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imagenes de useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier-imagen.jpeg',
            title: 'Este es el titulo'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    
    })
    

});