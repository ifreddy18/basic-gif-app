import { getFetchGifs } from "../../helpers/getFetchGifs";


describe('Pruebas en getFetchGifs', () => {

    const category = 'Black clover';

    // Por defecto traera 10 de One Piece por problemas de conexion 
    // a internet en el momento que se escribio este codigo.
    // Esta condicionado a que traiga el array de data si no realiza
    // el fetch correctamente.
    test('Debe de traer 10 elementos', async() => {
       
        const gifs = await getFetchGifs( category );

        expect( gifs.length ).toBe(10);

    });

    test('Debe de traer 0 elementos si no se manda la categoria', async() => {
       
        const gifs = await getFetchGifs('');

        expect( gifs.length ).toBe(0);

    });
    


});