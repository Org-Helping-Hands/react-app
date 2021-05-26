import React from "react";
import { Link } from "react-router-dom";
import styles from "./detailed-post.module.css";

export class DetailedPost extends React.Component{

  state = {
     Urls:[
       {URL:"assets/detailed-post/poor1.jpg"},
       {URL:"assets/detailed-post/poor2.jpg"},
       {URL:"assets/detailed-post/poor3.jpg"},
     ],
  };
 
render() {
    return (
      <>
          <div> 
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className={`navbar-brand ${styles.navtitle}`} href="#">
              Helping Hands
            </a>
            <button
              className={"navbar-toggler"}
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className={`navbar-nav ml-auto ${styles.navitems}`}>
                <a className="nav-item nav-link" href="#">
                  Settings
                </a>
                <a className="nav-item nav-link" href="#">
                  About-Us
                </a>
                <a className="nav-item nav-link" href="#">
                  Contact-Us
                </a>
              </div>
            </div>
          </nav>
        </div>

      <h1 className={styles.mainTitle}> Needy people near you</h1>
<div className={styles.detail_post}>

<div className={styles.post_info}>
         <div className={styles.poster_info}>
        
           
            <div className="row">
            <div className="col-3 col-sm-2 col-md-1" >
            <img className={styles.profile_pic}  src="assets/detailed-post/profile-pic.png"></img>  
           </div>
           <div className="col-9 col-sm-10  col-md-11 ">
               <h3 className={styles.username}>
                   Posted by Siddhesh surve
               </h3>
               <p className={styles.username}>2 minutues walk</p>

           </div>
            </div>
         </div>
         <div className={styles.post_description_box}>
         <div className="row ">
                <h4 className={styles.post_description}>Need food and water and shelter will also help. Also it will be niceif you donate your old clothes.</h4>
            </div>
         </div>
        </div>
        <div >
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {
            this.state.Urls.map((ele , i)=>(

              <div className={`carousel-item ${i==0 ?'active': '' }`}>
              <img className={`d-block w-100 ${styles.help_img}`} src={ele.URL} alt="First slide"/>
              </div>
            ))
          }
          
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

   </div>

  <div className={styles.mapbox}></div>        
      
      
  <div className={`text-right ${styles.buttons}`}>
            <button type="button"  className={styles.share_btn}><img src="assets/detailed-post/shareIcon.png" height="30px" width="30px"></img></button>
            <button type="button"  className={`btn btn-success ${styles.help_btn}`}>help</button>
        </div>
      
</div>


</>
    );
  }
}
