import React, { useState, useEffect } from "react";
import DisplayContacts from "./DisplayContacts";
import Header from "./head/Header";
import "./style.css";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("records");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function AddContacts() {
  const [records, setRecords] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // form submit event
  const handleAddRecordSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let record = {
      name,
      email,
      mobile,
    };
    setRecords([...records, record]);
    setName("");
    setEmail("");
    setMobile("");
  };

  // delete records from LS
  const deleteRecords = (mobile) => {
    const filterRecords = records.filter((element, index) => {
      return element.mobile !== mobile;
    });
    setRecords(filterRecords);
  };

// Edit records;
const [isEditItem,setIsEditItem]= useState("");

const editRecords = (mobile) =>
{
  
let newEditItem = mobile.find((records)=>
{
	return records.mobile === mobile;
});
	setName(newEditItem.name);
	setEmail(newEditItem.email);
	setMobile(newEditItem.mobile);

setIsEditItem(mobile);
}


  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  return (
    <>
      <Header />
      <div className="heading_txt">
        <h1>Simple ContactList App</h1>
      </div>
      <div className="main">
        <div className="addData">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddRecordSubmit}
          >
            <h3 className="simple_txt">Enter user's details</h3>
            <hr /> <label className="lbl">Name</label>
            <input
              type="text"
              placeholder="Name of Person"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <br></br>
            <label className="lbl">Email</label>
            <input
              type="text"
              placeholder="Email Of Person"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <br></br>
            <label className="lbl">Mobile</label>
            <input
              type="text"
              placeholder="Mobile NO."
              required
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            ></input>
            <br></br>
            <button type="submit" className="btn">
              ADD
            </button>
          </form>
        </div>

        <div className="displayData">
          {records.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mobile</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <DisplayContacts
                      records={records}
                      deleteRecords={deleteRecords}
                      editRecords = {editRecords}
                    />
                  </tbody>
                </table>
              </div>
              <button className="rbtn" onClick={() => setRecords([])}>
                Delete All
              </button>
            </>
          )}
          {records.length < 1 && (
            <div className="rheading">No Records Found !!!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddContacts;
