import React from "react";
import "./do-post.css";
export class DoPost extends React.Component {
  render() {
    return (
      <>
 <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand navtitle" href="#">Helping Hands</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto mr-5">
              <a className="nav-item nav-link" href="#">Settings</a>
              <a className="nav-item nav-link" href="#">About-Us</a>
              <a className="nav-item nav-link" href="#">Contact-Us</a>
            </div>
          </div>
        </nav>
       </div>   

    <h1 className="text-sm-center  maintitle">Request Help</h1>
    <div className="reqpost"> 
        <div id="imageUpload" >
            <p className="title">fill out all information</p>
            
          <div id="upload_frame">  
            <label className="filebutton">
   
           <img id="upload_image" src="assets/do-post/upload.png" height="75px" width="75px"></img>
           <span><input type="file" id="myfile" name="myfile"></input></span>
           </label>
         </div>
         </div>
         
             <p className="title">select location</p>  
             <input type="text" placeholder="Enter address" className="form-control needy_address" />
             <p className="title">select need tags</p>
            <div id="tags_selected">
              <p id="notice" ></p>
             <div className="row">
                <div className="col">
                  <button className="tag_Unclicked" id="Food" >Food</button>
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
                 <button className="tag_Unclicked" id="medical_help" >Medical Help</button>
               </div>
            </div>
            <div className="row">
             <div className="col">
               <button className="tag_Unclicked" id="financial_help" >Fancial Help</button>
             </div>
              
            </div>
                
            <div className="row">
               <button className="btn btn-primary"  id="donebutton">Done</button>
            </div>
                 
            
             
         
            </div>
   
     
             <p className="title">Description</p>
             <textarea name="Description"  id="description"  placeholder="Any Extra information ex.You will find them near xyz shop or xyz area"></textarea>
            
            <div className="row">
                <button className= "btn btn-primary" id="postbtn">Post</button>    
            </div>
          </div>
        
    
 

      </>
    );
  }
}
