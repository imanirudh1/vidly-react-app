import React, { Component } from 'react';
class TableHeader extends Component {
    raiseSort=(path)=>{
        const sortColumn={...this.props.sortColumn}
        if(sortColumn.path===path)
        sortColumn.order=sortColumn.order==='asc'?'desc':'asc';
        else{
            sortColumn.path=path;
            sortColumn.order='asc'
        }
        this.props.onSort(sortColumn)
    }
    renderIcon=(col)=>{
        const {sortColumn}=this.props
        if(col!==sortColumn.path) return null
        if (sortColumn.order==='asc') return <i className='fa fa-sort-asc'></i>
        return <i className='fa fa-sort-desc'></i>

    }

    render() { 
        return ( 
            <thead>
                <tr>
                   {this.props.columns.map(col=>(
                       <th className='clickable' onClick={() => this.raiseSort(col.path)} key={col.path || col.key} >{col.lable}{this.renderIcon(col.path)}</th>
                   ))} 
                </tr>
            </thead>
         );
    }
}
 
export default TableHeader;