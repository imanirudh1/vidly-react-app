import React, { Component } from 'react'
import {getMovies} from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'
import _ from 'lodash'
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import {Paginate} from './util/paginate'
import MoviesTable from './common/moviesTable';
export default class movies extends Component {
    state={
        movies:[],
        pageSize:4,
        currentPage:1,
        genres:[],
        selectedGenre:0,
        sortColumn:{path:'title',order:'asc'}
    };
    componentDidMount(){
         const genres=[{_id:"",name:"All Genre"},...getGenres()]
        this.setState({movies:getMovies(),
            genres})
    }
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
    handelGenres=(genre)=>{
        console.log(genre)
         this.setState({selectedGenre:genre,currentPage:1})    
    }
    handelSort=(path)=>{
        const sortColumn={...this.state.sortColumn}
        if(sortColumn.path===path)
        sortColumn.order=sortColumn.order==='asc'?'desc':'asc';
        else{
            sortColumn.path=path;
            sortColumn.order='asc'
        }
        this.setState({sortColumn})

    }
    render() {
        const {length:count}=this.state.movies;
        const {movies:allMovies,pageSize,currentPage,selectedGenre,sortColumn}=this.state

        if (count ===0) return <p>There are no movies in the database</p>
        const filtered=selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id )
        : allMovies;

       const sorted= _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

        const movies=Paginate(sorted,currentPage,pageSize)

        return (
            <div className='row m-4'>
                <div className="col-3 m-2">
                <ListGroup 
                items={this.state.genres}
                 onItemSelect={this.handelGenres}
                selecteditem={this.state.selectedGenre} 
                />
                </div>
                <div className="col">
                <p>Showing {filtered.length} movies in the database.</p>
                <MoviesTable 
                movies={movies}
                onDelete={this.handelDelete}
                onLike={this.handelLiked}
                onSort={this.handelSort}
                />
                <Pagination itemCount={filtered.length} pageSize={pageSize} onPageChange={this.handelpageChange} currentPage={currentPage} /></div>
                </div>
        )}
}
