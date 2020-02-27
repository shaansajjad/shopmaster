import React from "react";
import "../../css/PdfToImg.scss";
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
    // console.log(e.target.files, "000000");
    // console.log(e.target.files[0], "000000");
    // console.log("The updated State is", this.setState({ file: file }));
    console.log(file);
  };

  handleUpload = e => {
    let file = this.state.file;
    let formData = new FormData();
    // formData.append("pdf", { uri: file, type: "application/pdf" });
    formData.append("file", file);
    console.log(file);
    // formData.append("name", "Sajajd");

    // console.log("Updtaed state is", this.state);

    axios({
      url: "http://elearningapi.appskeeper.com/pdf",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      // formData.append('image',file)
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
