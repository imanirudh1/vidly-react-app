import React, { Component } from 'react'
import {getMovies} from '../services/fakeMovieService'
import Like from './common/like';
import listGroup from './common/listGroup';
import Pagination from './common/pagination';
import {Paginate} from './util/paginate'
export default class movies extends Component {
    state={
        movies:getMovies(),
        pageSize:4,
        currentPage:1
    };
    handelDelete= movie=>{
        const movies=this.state.movies.filter(m => m._id!==movie._id)
        this.setState({movies})
    }
    handelLiked=movie=>{
            const movies=[...this.state.movies]
            const index=movies.indexOf(movie)
            movies[index]={...movie}
            movies[index].liked=!movies[index].liked
            this.setState({movies})

    }
    handelpageChange=(page)=>{
        this.setState({currentPage:page})
    }
    render() {
        const {length:count}=this.state.movies;
        const {movies:allMovies,pageSize,currentPage}=this.state

        if (count ===0) return <p>There are no movies in the database</p>

        const movies=Paginate(allMovies,currentPage,pageSize)

        return (
            <React.Fragment>
                <listGroup />
        <p>Showing {count} movies in the database.</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movies)=>(
                  <tr key={movies._id}>
                    <td>{movies.title}</td>
                    <td>{movies.genre.name}</td>
                    <td>{movies.numberInStock}</td>
                    <td>{movies.dailyRentalRate}</td>
                    <td><Like onClick={()=>this.handelLiked(movies)} liked={movies.liked} /></td>
                    <td><button className="btn btn-danger btn-sm" onClick={()=>
                        this.handelDelete(movies)
                    }>Delete</button></td>
                </tr>  
                ))}
                
            </tbody>
        </table>
        <Pagination itemCount={count} pageSize={pageSize} onPageChange={this.handelpageChange} currentPage={currentPage} />
        </React.Fragment>
        )}
}
