import './styles.css'

export function Card(props) {
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <br></br>
            <small>{props.time}</small>
        </div>
    )   
}