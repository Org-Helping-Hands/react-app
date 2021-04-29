import React from "react";
import "./do-post.css";
export class DoPost extends React.Component {
  render() {
    return (
      <>
       <h1>Request Help</h1>
      <div id="imageUpload" >
         <p className="title">fill out all information</p>
         
         
       <div id="upload_frame">  
         <label className="filebutton">

        <img id="upload_image" src="src\components\publicAssets\upload.png" height="75px" width="75px"/>
        <span><input type="file" id="myfile" name="myfile" multiple accept="image/*" /></span>
        </label>
     </div>
     </div>
          <p className="title">select location</p>  
          <input type="text" placeholder="Enter address" className="needy_address" ></input>
          <p className="title">select need tags</p>
         <div id="tags_selected">
           <p id="notice"></p>
          <div className="row">
             <div className="col">
               <button className="tag_Unclicked" id="Food">Food</button>
             </div>
             <div className="col">
              <button className="tag_Unclicked" id="cloths" >cloths</button>
             </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="tag_Unclicked" id="shelter" >Shelter</button>
            </div>
            <div className="col">
              <button className="tag_Unclicked" id="medical_help">Medical Help</button>
            </div>
         </div>
         <div className="row">
          <div className="col">
            <button className="tag_Unclicked" id="financial_help" >Fancial Help</button>
          </div>
           <div className="row">
              <div className="col offset-6">
                <button className="btn btn-primary done_button" id="donebtn" >Done</button>
              </div>
           </div>
          
       </div>
             
         </div>

  
          <p className="title">Description</p>
          <textarea name="Description" id="description" placeholder="Any Extra information ex.You will find them near xyz shop or xyz area"></textarea>
           
          <br>
          <button id="post_btn" className="btn btn-primary" >Post</button>
          </br>

      </>
    );
  }
}
