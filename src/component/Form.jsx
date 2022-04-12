import { useState } from "react"; //jika tidak ada ini maka tidak bisa jalan. biasanya set otomatis

const Form = () => {
    const [gambar, setGambar] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('') 

    const simpan = () => {
        setGambar('')
        setTitle('')
        setContent('')
    }
// membuat logic diatas return
//function dibawah retur
    return (
        <div className="container border p-4">
            <h2>Input Data Card</h2>
            <label htmlFor="gambar">
                {gambar}
                <input type="text" className="form-control" placeholder="gambar" id="gambar" value={gambar} 
                onChange={(e)=>setGambar(e.target.value)}/> 
            </label> 

            <label htmlFor="title">
                {title} 
                <input type="text" className="form-control" placeholder="title" id="title" value={title}  
                onChange={(e)=>setTitle(e.target.value)}/>
            </label>

            <label htmlFor="content">
                {content}
                <input type="text" className="form-control" placeholder="content" id="content" value={content}  
                onChange={(e)=>setContent(e.target.value)}/>
            </label>

            <div className="d-flex flex-row mt-4">
                <button className="btn btn-primary"
                        onClick={simpan}
                >Simpan</button>
            </div>
        </div>
    );
}

export default Form;