import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Timer from "../Timer/timer";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from 'scrollreveal';

function BookListing({ dataList, handleDelete, data, handleUrlChange, handleBookChange, handleSubmit, edit, handleEdit }) {

  const[show,setShow] = useState(false);
  function handleEditData(index) {
    handleEdit(index);
  }

  const revealRef = useRef(null);

 useEffect(()=>{
  const sr = ScrollReveal({
    distance: '300px',
    duration: 800,
    delay: 500,
    reset: true,
    
  });

  // Apply ScrollReveal to the referenced element
  if (revealRef.current) {
    sr.reveal(revealRef.current,{origin:"right"});
  }
  
 },[]);


  return (
    <section style={{ minHeight: "70vh" }}>
      <div className="d-flex flex-column title-header">
        <div className="d-flex row">
          <div className="svg-icon col-2">
            <dotlottie-player
              src="https://lottie.host/96ed44a6-7d7c-40f2-b5b0-199c6b3e6a3d/WpqvVkU8Hq.json"
              background="transparent"
              speed="1"
              style={{ width: '200px', height: '300px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="d-flex flex-column col-8">
            <h1 className='text-primary fst-italic text-center m-2'  ref={revealRef}>List Your Favourite <span className='text-success'>Books </span>in One Place</h1>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column" id="formHeader">
                <form className='d-flex  p-2 m-2' id="form" onSubmit={handleSubmit}>
                  <input type='url' placeholder='Enter book cover page url' className='form-control text-black-50' value={data.url} onChange={handleUrlChange} />
                  <input type='text' placeholder='Enter book name' className='form-control text-black-50 mx-2' value={data.book} onChange={handleBookChange} />
                  <button type='submit' className='btn btn-success' data-bs-target="#itemsCard" data-bs-toggle="card" onClick={()=>setShow(true)}>{edit !== null ? "Save" : "Enter"}</button>
                </form>
                {show && <div className="sub-heading">
                  <span className="text-success fw-bold fs-3 fst-italic">A</span>rrange The <span className="text-primary fw-bold fs-3 fst-italic">B</span>ooks By <span className="text-danger fw-bold fs-3 fst-italic">D</span>ragging <span className="text-info fw-bold fs-3 fst-italic">A</span>ccording to your <span className="text-secondary fw-bold fs-3 fst-italic">P</span>reference</div>}
              </div>

            </div>
          </div>
          <div className="col-2">
            <dotlottie-player
              src="https://lottie.host/f71e1e64-f33f-4c00-80b7-bfce205ffd9f/5B69pT0tOt.json"
              background="transparent"
              speed="1"
              style={{ width: "150px", height: "100px"}}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        <div className='d-flex flex-wrap mx-5'>
          {dataList.map((item, index) =>
            <Draggable
              key={index}
              axis="both"
              handle=".card">
              <div className='card m-2 p-2' id='itemsCard'>
                <div className="card-header">
                  <img src={item.url} alt='url' className='card-img-top' width={150} height={200} />
                </div>
                <div className="card-body text-center">
                  <div><b>{item.book}</b></div>
                  <Timer />
                </div>
                <div className='card-footer text-center'>
                  <button className='btn btn-warning' onClick={() => handleEditData(index)}>Edit</button>
                  <button className='btn btn-danger mx-2' onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            </Draggable>
          )}
        </div>


      </div>
    </section>
  )
}

BookListing.propTypes = {
  dataList: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
  handleBookChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  edit: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])]).isRequired,
  handleEdit: PropTypes.func.isRequired
}

export default BookListing;
