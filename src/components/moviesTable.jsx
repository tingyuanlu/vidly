import React, { Component } from "react";
import Like from "./common/like";
import auth from "../services/authService";
import Table from "./common/table";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];
  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        className="btn btn-danger"
        onClick={() => this.props.onDelete(movie)}
      >
        Delete
      </button>
    ),
  };
  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      //   <table className="table">
      //     <TableHeader
      //       columns={this.columns}
      //       onSort={onSort}
      //       sortColumn={sortColumn}
      //     />
      //     <TableBody data={movies} columns={this.columns} />
      //     {/* <tbody>
      //       {movies.map((movie) => (
      //         <tr key={movie._id}>
      //           <td>{movie.title}</td>
      //           <td>{movie.genre.name}</td>
      //           <td>{movie.numberInStock}</td>
      //           <td>{movie.dailyRentalRate}</td>
      //           <td>
      //             <Like liked={movie.liked} onClick={() => onLike(movie)} />
      //           </td>
      //           <td>
      //             <button
      //               className="btn btn-danger"
      //               onClick={() => onDelete(movie)}
      //             >
      //               Delete
      //             </button>
      //           </td>
      //         </tr>
      //       ))}
      //     </tbody> */}
      //   </table>
    );
  }
}

export default MoviesTable;
