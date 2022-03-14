import { useState } from 'react'

function EntryFormComponent({ postNewEntry }) {
    const [ tittle, setTitle ] = useState()
    const [ author, setAuthor ] = useState()
    const [ content, setContent ] = useState()

    return (
        <div className='row card text-center mt-2'>
            <div className='mt-2'>
                <label>Title:</label>
                <input type="text" value={tittle} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='mt-2'>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label>Content:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
            </div>

            <button className='btn btn-primary btn-sm mt-1' onClick={() => postNewEntry({ tittle, author, content })}>Post Entry!!!</button>
        </div>
    )
}

export default EntryFormComponent