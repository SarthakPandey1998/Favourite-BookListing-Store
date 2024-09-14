import PropTypes from "prop-types";
import Draggable from "react-draggable";
import EmojiPicker from 'emoji-picker-react';

function BookListing({ dataList, handleDelete, data, handleUrlChange, handleBookChange, handleSubmit, edit, handleEdit }) {


  function handleEditData(index) {
    handleEdit(index);
  }
  return (
    <section style={{ minHeight: "70vh" }}>
      <div>
        <h1 className='text-primary text-center fst-italic m-2'>List Your Favourite <span className='text-success'>Books </span>in One Place</h1>
        <div className="d-flex justify-content-center">
          <form className='d-flex w-50 p-2 m-2' onSubmit={handleSubmit}>
            <input type='url' placeholder='Enter book cover page url' className='form-control text-black-50' value={data.url} onChange={handleUrlChange} />
            <input type='text' placeholder='Enter book name' className='form-control text-black-50 mx-2' value={data.book} onChange={handleBookChange} />
            <button type='submit' className='btn btn-success' data-bs-target="#itemsCard" data-bs-toggle="card">{edit !== null ? "Save" : "Enter"}</button>
          </form>
        </div>
        <div className="text-center"><span className="text-success fw-bold fs-3 fst-italic">A</span>rrange The <span className="text-primary fw-bold fs-3 fst-italic">B</span>ooks By <span className="text-danger fw-bold fs-3 fst-italic">D</span>ragging <span className="text-info fw-bold fs-3 fst-italic">A</span>ccording to your <span className="text-secondary fw-bold fs-3 fst-italic">P</span>reference</div>
        <EmojiPicker open={true}/>
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
                  <div>Book Name: <b>{item.book}</b></div>
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
