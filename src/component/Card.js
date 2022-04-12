const Card = ({ gambar, title, content }) => {
  return (
    <div className="container mb-4 mt-3 mr-3">
      <div className="row">
        <div className="card" style={{ width: '18rem', marginRight: '3px' }}>
          <img src={gambar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Card;