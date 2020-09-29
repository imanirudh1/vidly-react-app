import React, { Component } from 'react'
import {getMovies,deleteMovie} from '../services/movieService'
import {getGenres} from '../services/genreService'
import _ from 'lodash'
import {toast} from 'react-toastify'
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import {Paginate} from './util/paginate'
import MoviesTable from './common/moviesTable';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox';
export default class movies extends Component {
 
    state={
        movies:[],
        pageSize:4,
        currentPage:1,
        genres:[],
        selectedGenre:null,
      sortColumn: { path: 'title', order: 'asc' },
        searchQueryValue:''
    };
  async componentDidMount() {
      const {data} =await getGenres()
    const genres = [{ _id: "", name: "All Genre" }, ...data]
    const {data:movies}=await getMovies()
        this.setState({movies,
            genres})
    }
  handelDelete = async movie => {
      const originalMovies=this.state.movies
        const movies=this.state.movies.filter(m => m._id!==movie._id)
    this.setState({ movies })
    try {
      await deleteMovie(movie._id)
    }
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error('This movie has already deleted')
        this.setState({movies:originalMovies})
      }
    }
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
         this.setState({selectedGenre:genre,currentPage:1,searchQueryValue:''})    
    }
    handelSort=(sortColumn)=>{
        
        this.setState({sortColumn })

  }
  searchQuery = (query) => {
    this.setState({ currentPage: 1, selectedGenre:null,searchQueryValue:query });
  }  
    getPageData=()=>{
      const { movies: allMovies, pageSize, currentPage, selectedGenre, sortColumn,searchQueryValue } = this.state
      let filtered = allMovies
      if (searchQueryValue)
        filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQueryValue.toLowerCase()));
      else if (selectedGenre && selectedGenre._id)
        filtered = allMovies.filter(m => m.genre._id === selectedGenre._id); 
       

       const sorted= _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

        const movies=Paginate(sorted,currentPage,pageSize)
        return {totalCount:filtered.length,data:movies}
    }
  render() {
       const { user } = this.props;
        const {length:count}=this.state.movies;
        const {pageSize,currentPage,sortColumn}=this.state

      if (count === 0) return <p>There are no movies in the database</p>
      
            const {totalCount,data}=this.getPageData()
        return (
          <div className="row m-4">
            <div className="col-3 m-2">
              <ListGroup
                items={this.state.genres}
                onItemSelect={this.handelGenres}
                selecteditem={this.state.selectedGenre}
              />
            </div>
            <div className="col">
             {user && <Link
                to="movies/new"
                style={{ marginBottom: 20 }}
                className="btn btn-primary"
              >
                New Movie
              </Link>}
              <p>Showing {totalCount} movies in the database.</p>
              <SearchBox value={this.state.searchQueryValue} onChange={this.searchQuery} />
              <MoviesTable
                movies={data}  
                sortColumn={sortColumn}
                onDelete={this.handelDelete}
                onLike={this.handelLiked}
                onSort={this.handelSort}
              />
              <Pagination
                itemCount={totalCount}
                pageSize={pageSize}
                onPageChange={this.handelpageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        );}
}
