import { useState } from 'react';
import './App.css';
import Marquee from './Components/Marquee/marquee';
import Navbar from './Components/Navbar/Navbar';
import BookListing from './Components/BookListing/bookListing';
import Footer from './Components/Footer/Footer';
import BookQuote from './Components/BookQuote/BookQuote';

function App() {
  const [data, setData] = useState({ url: "", book: ""});
  const [dataList, setDataList] = useState([]);
  const[edit,setEdit] = useState(null);


  function handleUrlChange(e) {
    setData({ ...data, url: e.target.value });
  }

  function handleBookChange(e) {
    setData({ ...data, book: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    if(edit!=null){
      var updatedList = dataList.map((item,index)=>index===edit?data:item)
      setDataList(updatedList);
      setEdit(null);
    }
    else{
      data.url && data.book && setDataList([...dataList, data]);
    }
    setData({ url: "", book: "" });
  }
 
  function handleEdit(id){
    const itemToEdit = dataList[id];
    setData(itemToEdit);
    setEdit(id);
    
  }

  function handleDelete(id){
    const bookItem = dataList.filter((item,index)=>id!== index);
    setDataList(bookItem);
  }

  

  return (
    <>
      <div className='bg-secondary-subtle m-0 p-0' style={{ minHeight: "100%" }}>
        <Navbar/>
        <Marquee/>
        <BookListing dataList={dataList} handleDelete={handleDelete} data={data}  handleUrlChange={handleUrlChange} handleBookChange={handleBookChange} handleSubmit={handleSubmit} edit={edit} handleEdit={handleEdit}/>
        <BookQuote/>
        <Footer/>
      </div>
    </>
  )
}

export default App;
