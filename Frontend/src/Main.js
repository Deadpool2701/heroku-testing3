import styles from './styles/Main.module.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
    var [status,setStatus] = useState([]);

    function send(event){
        event.preventDefault();
        const element = document.querySelector('#check');
        axios.post('https://heroku-deployment-react-flask.herokuapp.com/api', { message: element.value } ).then (res => {
            axios.get('https://heroku-deployment-react-flask.herokuapp.com/api').then(result => {
                setStatus(result.data);
                console.log(result.data)
            });
        });
    }

    return (
        <div className={styles.Body}>
        <form className={styles.Form}>
            <h1 className={styles.Header}>hEroku-deployment-next-flask</h1>
            <input type="text" id="check" /><br/><br/>
            <button className={styles.Button} onClick={send}>Send it</button>
            <ul>
                {status.map(item => <li key={status.indexOf(item)}>{item.message}</li>)}
            </ul>
        </form>
        </div>
    );
}
export default App;