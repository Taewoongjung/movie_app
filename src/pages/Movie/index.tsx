import React from "react";
import PropTypes from "prop-types";
import {Movie, MovieGenres, MovieGenresLI, MoviePoster, MovieTitle, MovieYear} from './style';

const Index = ({year, title, summary, poster, genres}: any) => {
    return (
        <Movie>
            <MoviePoster src={poster} alt={title} title={title} />
            <div className="movie_data">
                <MovieTitle>{title}</MovieTitle>
                <MovieYear>{year}</MovieYear>
                <MovieGenres>
                    {genres.map((genre: any, index: any) => (
                        <MovieGenresLI key={index}>
                            {genre}
                        </MovieGenresLI>
                    ))}
                </MovieGenres>
                <p className="movie_summary">{summary.slice(0, 250)}...</p>
            </div>
        </Movie>
    );
}

Index.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Index;