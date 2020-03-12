import React from "react";
import "../../../css/PdfToImg.scss";
import axios from "axios";

class PdfToImg extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null
    };
  }

  handleFile = e => {
    let file = e.target.files[0];
    this.setState({ file: file });
    console.log(file);
  };

  handleUpload = e => {
    let file = this.state.file;
    let formData = new FormData();
    formData.append("file", file);
    console.log(file);

    axios({
      url: "http://elearningapi.appskeeper.com/pdf",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    }).then(
      res => {
        console.log("The value is", res);
      },
      err => {
        console.log("The file is not uploaded", err);
      }
    );
  };

  render() {
    return (
      <>
        <div className="pdf-to-img-container">
          <input
            className="inpt-field"
            name="pdf"
            type="file"
            accept="application/pdf"
            onChange={e => this.handleFile(e)}
          />
          <button onClick={e => this.handleUpload(e)}>Upload</button>
        </div>
      </>
    );
  }
}

export default PdfToImg;
