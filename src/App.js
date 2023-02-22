import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Plan from "./Plan";

class App extends Component {
  state = {
    items: [],
    text: ''
  }

  HandleChange = (e) => {
    this.setState({text: e.target.value})

  };

  handleAdd = () => {
    if(this.state.text !== "" ) {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text:"" });
    }
  };

  handleDelete = (id) => {
    console.log("Deleted", id);
    const Olditems = [...this.state.items]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return i !== id
    })
    console.log("Newitems", items);
    this.setState({ items: items });
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center">Today's Plan</h1>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Write Plan Here"
                  className="form-control "
                  value={this.state.text}
                  onChange={this.HandleChange}
                />
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 fw-bold " onClick={this.handleAdd}>Add</button>
              </div>
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                {
                    this.state.items.map((value, i) => {
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
