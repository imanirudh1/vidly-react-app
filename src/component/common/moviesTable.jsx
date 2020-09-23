import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import movies from '../movies';
import Like from './like';
import Table from './table';



class MoviesTable extends Component {
    
    
    columns=[
        {
            path: 'title', lable: 'Title',
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title} </Link>
        },
        {path:'genre.name',lable:'Genre'},
        {path:'numberInStock',lable:'Stock'},
        {path:'dailyRentalRate',lable:'Rate'},
        {key:'liked',content:movie => (<Like liked={movies.liked} onClick={()=>this.props.onLike(movie)} />)},
        {key:'del',content:movie => (<button onClick={()=>this.props.onDelete(movie)} className='btn btn-danger btn-sm'>Delete</button>)}
    ]

    render() { 
        const {movies,onSort,sortColumn}=this.props
        return ( 
            <Table movies={movies} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />
         );
    }
}
 
export default MoviesTable;
