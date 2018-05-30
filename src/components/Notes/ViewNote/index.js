import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          note: [],
          notes: [],
        }
    } 
    idHolder = () => {
      let meow = window.location.href;
      meow = meow.split('/');
      meow = meow[meow.length -1];;
      let id = meow;
      return id;
    }
    componentDidMount() {
      this.fetchNote(this.idHolder());
    }
  
    fetchNote = (id) => {
      axios
        .get(`https://lambda-notes-backend-kyle.herokuapp.com/viewnote/${id}`)
        .then(response => {
          this.setState(() => ({ note: response.data }));
        })
        .catch(error => {
          console.error(error);
        });
    };

   SaveDeletion = (id) => {
    axios
    .delete(`https://lambda-notes-backend-kyle.herokuapp.com/deletenote/${id}`)
    .then()
    .catch(error => {
      console.error(error);
    });
   }

    deleteNote = () => {
      this.SaveDeletion(this.idHolder());
      return alert("Note has been Deleted");

    }

    render() {
      return (
        <div className='View__note'>
          <div className='View__note-links'>
            <Link to={'./edit/' + this.idHolder()}><span> edit </span></Link>
            <Link to='/viewnotes'><span
            onClick={this.deleteNote}> delete </span></Link>
          </div>
          <div>
            <h1>View Note:</h1>
            <h1>{this.state.note.title} </h1>
            <p>{this.state.note.body}</p>
          </div>
        </div> // container div end
        
      );
    }
  }

  export default ViewNote;