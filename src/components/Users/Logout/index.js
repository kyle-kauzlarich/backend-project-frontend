import './index.css';
import axios from 'axios';

function handleLogout() {
    axios
    .get('https://lambda-notes-backend-kyle.herokuapp.com/logout')
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) });
}


export default handleLogout;