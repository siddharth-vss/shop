import React, { useState, useEffect } from 'react'
import '../App.css'
import Navbar from './navbar'
const Journal = (props) => {

  const [journal, setJournal] = useState([])
  const [form, setForm] = useState({})


  const hendeler = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value })

  }

  const FormHandeler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/staf/journals', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    if(response.status===200){
      props.showAlert("journal Created Successfully", "success");
      setForm({});
   
    }else{
      props.showAlert("Enter Correct credintial", "danger");
    }
    await itemseter();

  }

  const itemseter = async () => {
    const response = await fetch('http://localhost:5000/staf/journal', {
      method: 'Get'
    })
    const journal = await response.json();
    setJournal(journal);
    console.log(journal);
  }
  const deleteNote = async (id) => {
    const response = await fetch(`http://localhost:5000/staf/deljournals/${id}`, {
    method: 'DELETE'
    })
    const json = await response.json();
    console.log(json); 
    if(response.status===200){
      props.showAlert("Journal deleted Successfully", "success");
   
    }else{
      props.showAlert("Journal didn't found", "danger");
    }
    await itemseter();

    
  }
  useEffect(() => {
    itemseter();
    console.log(journal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar showAlert={props.showAlert}/>
      <br /><br />
   
      {journal.map((journal, index) => {

        return <div className="col"  key={index}>
                  <div className='date'>{journal.date}</div>
                    <div className="col">
                      <div className="card mb-4 rounded-3 shadow-sm">
                       <div className="card-header py-3 text-bg-warning d-flex justify-content-between" >
                         <h4 className="my-0 fw-normal incen"><b>{journal.Title}</b></h4>
                         <i class="fa-solid fa-trash-can close " onClick={()=>deleteNote(journal._id)} style={{color:" #ff0000"}}></i>
                       </div>
                       <div className="card-body bgy">
                           {journal.Textarea}
                       </div>
                      </div>
                  </div>
               </div>

      })}




      {/*
      
    <!-- else-->
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal incen"><b>No Record Found</b></h4>
          </div>
          
        </div>
      </div>
*/}
      <form onSubmit={FormHandeler} className="row g-3 bg-light rounded-2 p-auto m-auto ">
        <div className="col-md-6">

          <label htmlFor="inputEmail4" className="form-label">Enter the Title</label>
          <input type="text" className="form-control" id="Title" name="Title" placeholder="Title" onChange={hendeler}  />
        </div>
        <div >
          <textarea className="form-control textarea" placeholder="Leave a comment here" id="text" onChange={hendeler} name="Textarea" ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>


        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <div className="col-md-12"></div>

      </form >

    </>
  )
}

export default Journal
