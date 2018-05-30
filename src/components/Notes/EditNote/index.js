import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          note: [],
          title: [],
          body: [],
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
          this.setState(() => ({ title: response.data.title, body: response.data.body }));
        })
        .catch(error => {
          console.error(error);
        });
      
    };

    handleAddNote = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      updateGo = (id) => {
        axios
        .put(`https://lambda-notes-backend-kyle.herokuapp.com/editnote/${id}`, {
          "title": this.state.title,
          "body": this.state.body
        })
        .then(response => {
          this.setState(() => ({ title: response.data.title, body: response.data.body }));
        })
        .catch(error => {
          console.error(error);
        });

      };

      handleUpdateNote = () => {
        this.updateGo(this.idHolder()); 
        Location.reload;
      };



    render() {
      return (
        <div className='View__note'>
          <div>
            <h1>View Note:</h1>
            <input
            type='text' 
            className='Create__note-title'
            name='title'
            value={this.state.title}
            onChange={this.handleAddNote}
            /><br/> <br/>
            <textarea
            type='text' 
            className='Create__note-body'
            name='body'
            value={this.state.body}
            onChange={this.handleAddNote}
            ></textarea>
            <Link to={'/viewnotes'}>
            <button 
            className='Create__note-button'
            onClick={this.handleUpdateNote}
            >Update</button>
            </Link>
          </div>
        </div> // container div end
        
      );
    }
  }

  export default EditNote;