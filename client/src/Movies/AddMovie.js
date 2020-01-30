import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
	const { newMovie, setNewMovie } = useState({
		title: '',
		director: '',
		metascore: '',
		stars: []
	});

	const handleChanges = () => {};

	const handleSubmit = e => {
		e.preventDefaul();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='new title'
				value={newMovie.title}
				onChange={handleChanges}
			/>
			<input
				type='text'
				placeholder='director'
				value={newMovie.title}
				onChange={handleChanges}
			/>
			<input
				type='text'
				placeholder='your score'
				value={newMovie.title}
				onChange={handleChanges}
			/>
			<input
				type='text'
				placeholder='stars'
				value={newMovie.title}
				onChange={handleChanges}
			/>
		</form>
	);
};

export default AddMovie;
