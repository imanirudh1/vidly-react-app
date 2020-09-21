import React from 'react'
import Like from '../common/like';
const MoviesTable = (props) => {
    const {movies,onDelete,onLike,onSort}=props
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={()=>onSort('title')}>Title</th>
                    <th onClick={()=>onSort('genre.name')}>Genre</th>
                    <th onClick={()=>onSort('stock')}>Stock</th>
                    <th onClick={()=>onSort('rate')}>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie)=>(
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like onClick={()=>onLike(movie)} liked={movie.liked} /></td>
                    <td><button className="btn btn-danger btn-sm" onClick={()=>
                        onDelete(movie)
                    }>Delete</button></td>
                </tr>  
                ))}
                
            </tbody>
        </table>
    )
}

export default MoviesTable