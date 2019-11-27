import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // for to use Go Back To Search link 

import { fetchMovie, setLoading } from '../../actions/searchActions';

import Spinner from '../Spinner';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

//Информация о фильме
    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Жанр:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Премьера:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Категория:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Рейтинг:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Режиссер:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Сценаристы:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Актеры:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>О фильме</h3>
              {movie.Plot}
              <hr />
              <Link to="/" className="btn btn-default text-light">
                Вернуться на главную страницу
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

     let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(mapStateToProps,{ fetchMovie, setLoading })(Movie);