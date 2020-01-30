import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const initialState = {
	title: '',
	diretor: '',
	metascote: '',
	stars: []
};

export const UpdateMovie = props => {
	const [movie, setMovie] = useState(initialState);
	const { id } = useParams();

	useEffect(() => {
		const movieToUpdate = props.movies.find(m => `${m.id}` === id);

		if (movieToUpdate) {
			setMovie(movieToUpdate);
		}
	}, [props.movies, id]);

	const handleChanges = e => {
		e.persist();
		if (e.target.name === 'stars') {
			setMovie({
				...movie,
				stars: [...e.target.value.split(',')]
			});
		} else {
			setMovie({
				...movie,
				[e.target.name]: e.target.value
			});
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		//make a PUT request to edit the item
		axios
			.put(`http://localhost:5000/api/movies/${id}`, movie)
			.then(res => {
				// res.data is the FULL array with the updated item
				// That's not always the case. Sometimes you need to build your
				// own updated array

				props.history.push(`/`);
			})
			.catch(err => console.log(err));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='title'
					name='title'
					value={movie.title}
					onChange={handleChanges}
				/>
				<input
					type='text'
					placeholder='director'
					name='director'
					value={movie.director}
					onChange={handleChanges}
				/>
				<input
					type='text'
					placeholder='metascore'
					name='metascore'
					value={movie.metascore}
					onChange={handleChanges}
				/>
				<input
					type='text'
					placeholder='stars'
					name='stars'
					value={movie.stars}
					onChange={handleChanges}
				/>
				<button>Edit Now</button>
			</form>
		</div>
	);
};
