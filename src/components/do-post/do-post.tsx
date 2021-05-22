import React from "react";
import styles from "./do-post.module.css";
export class DoPost extends React.Component {
  render() {
    return (
      <>
 <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className={`navbar-brand ${styles.navtitle}`} href="#">Helping Hands</a>
          <button className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className={'navbar-toggler-icon'}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className={`navbar-nav ${styles.navitems}`}>
              <a className="nav-item nav-link" href="#">Settings</a>
              <a className="nav-item nav-link" href="#">About-Us</a>
              <a className="nav-item nav-link" href="#">Contact-Us</a>
            </div>
          </div>
        </nav>
       </div>   

    <h1 className={`text-sm-center  ${styles.maintitle}`}>Request Help</h1>
    <div className={styles.reqpost}> 
        <div >
            <p className={styles.title}>fill out all information</p>
            
          <div className={styles.upload_frame}>  
            <label className={styles.filebutton}>
   
           <img className={styles.upload_image} src="assets/do-post/upload.png" height="75px" width="75px"></img>
           <span><input type="file" id="myfile" name="myfile"></input></span>
           </label>
         </div>
         </div>
         
             <p className={styles.title}>select location</p>  
             <input type="text" placeholder="Enter address" className={`form-control ${styles.needy_address}`} />
             <p className={styles.title}>select need tags</p>
            <div className={styles.tags_selected}>
              <p className={styles.notice} ></p>
             <div className="row">
                <div className="col">
                  <button className={styles.tag_Unclicked} id="Food" >Food</button>
                </div>
                <div className="col">
                 <button className={styles.tag_Unclicked} id="cloths" >cloths</button>
                </div>
             </div>
             <div className="row">
               <div className="col">
                 <button className={styles.tag_Unclicked} id="shelter" >Shelter</button>
               </div>
               <div className="col">
                 <button className={styles.tag_Unclicked} id="medical_help" >Medical Help</button>
               </div>
            </div>
            <div className="row">
             <div className="col">
               <button className={styles.tag_Unclicked} id="financial_help" >Fancial Help</button>
             </div>
              
            </div>
                
            <div className="row">
               <button className={`btn btn-primary ${styles.donebutton}`} >Done</button>
            </div>
                 
            
             
         
            </div>
   
     
             <p className={styles.title}>Description</p>
             <textarea name="Description"  className={styles.description}  placeholder="Any Extra information ex.You will find them near xyz shop or xyz area"></textarea>
            
            <div className="row">
                <button className= {`btn btn-primary ${styles.postbtn}`} >Post</button>    
            </div>
          </div>
        
    
 

      </>
    );
  }
}
