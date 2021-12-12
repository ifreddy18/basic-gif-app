import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem'; 

describe('Tests in component GifGridItem', () => {

    const title = 'This is a title';
    const url = 'http://someUrl.com';
    const wrapper = shallow(
        <GifGridItem title={ title } url={ url } />
    );

    test('Snapshot correcto', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    
    });

    test('Debe tener la imagen igual al url y alt igual al title', () => {

        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    
    });

    test('Debe tener la clase animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        expect( div.hasClass('animate__fadeIn') ).toBe( true );
        
    })
    


});