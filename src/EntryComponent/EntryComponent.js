import './EntryComponent.css'
function EntryComponent({ title, content, author}) {
    return (
        <div className='row card text-center text-white bg-success mt-2 pt-2 pb-4'>
            <div className="card-header"><h1 >{title}</h1></div>            
            <p>{content}</p>
            <small>{author}</small>
        </div>
    )
}

export default EntryComponent;