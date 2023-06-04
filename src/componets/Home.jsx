import React from 'react'

const Home = () => {
  return (
    <>
    <main>
    <div className="container px-4 py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <h1 className='text-center m-2'>Courses</h1>
        <div className="card col-3 m-3" style={{width: '18rem'}}>
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card col-3 m-3" style={{width: '18rem'}}>
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card col-3 m-3" style={{width: '18rem'}}>
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div className="b-example-divider"></div>
  
    <div className="container px-4 py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <h1 className='text-center m-2'>Classes</h1>
        <div className="card col-3 m-3" style={{width: '18rem'}}>
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card col-3 m-3" style={{width: '18rem'}}>
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card col-3 m-3" style={{width: '18rem'}}>
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div className="container px-4 py-5">
      <div className="row d-flex justify-content-center align-items-center">
      <h1 className='text-center m-2'>Virtual Space</h1>
        <div className="card mb-3">
          <img src="./src/assets/VO.webp" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Virtual Space </h5>
            <p className="card-text">Creat Rooms and Join your frinds and colleagues any where </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  </>
  )
}

export default Home