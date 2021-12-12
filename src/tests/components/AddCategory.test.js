import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    // wrapper se deja aqui para tener la ayuda de VSCode
    let wrapper = shallow(
        <AddCategory setCategories={ setCategories } />
    );

    beforeEach( () => {
        jest.clearAllMocks(); // Limpia todas las simulaciones
        wrapper = shallow(
            <AddCategory setCategories={ setCategories } />
        );
    });

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const event = { target: { value: 'Hola mundo' } };

        input.simulate('change', event);

        // Parrafo creado para fines de pruebas
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( event.target.value );

    })

    // No debe postear la informacion porque para este punto de las pruebas
    // no se ha ingresado ningun valor en el inputValue por lo que no pasa
    // la prueba condicional de la funcion handleSubmit en el componente
    test('No debe de postear la informacion onSubmit', () => {
        
        const event = { preventDefault: () => {} };

        wrapper.find('form').simulate('submit', event);

        expect( setCategories ).not.toHaveBeenCalled();

    })


    test('Debe llamar al SetCategories y limpiar la caja de texto', () => {
        
        const inputEvent = { target: { value: 'Hola mundo' } };
        const formEvent = { preventDefault: () => {} };

        wrapper.find('input').simulate('change', inputEvent);
        wrapper.find('form').simulate('submit', formEvent);

        expect( setCategories ).toHaveBeenCalled();
        // expect( setCategories ).toHaveBeenCalledTimes(1); 

        // La linea de abajo es para verificar que el parametro que reciba el
        // setCategories sea una funcion
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        
        expect( wrapper.find('input').prop('value') ).toBe('');

    })
    
    
    

});