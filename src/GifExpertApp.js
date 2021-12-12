import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['One Piece']);
    const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
			<hr />

            {/* <button onClick={ handleAdd }>Add category</button> */}

            <ol>
                {
                    // categories.map( category => <li key={ category }>{ category }</li>)
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
		</>
	);
};

export default GifExpertApp;