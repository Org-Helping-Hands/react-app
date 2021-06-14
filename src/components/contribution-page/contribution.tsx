import { group } from "node:console";
import React from "react";
import { Link,useHistory } from "react-router-dom";
import styles from "./contribution.module.css";


export function Contribution() {
    const history = useHistory();
        return (
          <>
              <div className={styles.arrow}>
          <img
            src="/assets/find-needy/arrow.jpg"
            alt=""
            height="31px"
            width="31px"
            onClick={() => history.goBack()}
          />
        </div>
            <h3 className={styles.title}>Your Contribution</h3>
            
           
           
<div className={styles.contributionBox}>
<div className={`row ${styles.buttons_group} ${styles.row}`}>
<button className={`col-6 `}> Your Posts</button>
<button className="col-6"> Your Helps</button>
</div>

<div className={styles.posts}>

<div className={` row ${styles.postBox}`}>
<div className="col-3 col-sm-2 col-md-1" >
<img className={styles.profile_pic} height="60px" width="60px"  src="assets/detailed-post/profile-pic.png"></img>  
</div>
<div className="col-9 col-sm-10  col-md-11 ">
 <h3 className={styles.name}>
     Posted by Siddhesh surve
 </h3>
 <p className={styles.tags}>Food ,water</p>

</div>
</div>
<div className={`- row ${styles.postBox}`}>
<div className="col-3 col-sm-2 col-md-1" >
<img className={styles.profile_pic} height="60px" width="60px"  src="assets/detailed-post/profile-pic.png"></img>  
</div>
<div className="col-9 col-sm-10  col-md-11 ">
 <h3 className={styles.name}>
     Posted by Siddhesh surve
 </h3>
 <p className={styles.tags}>Food ,water</p>

</div>
</div>
<div className={` row ${styles.postBox}`}>
<div className="col-3 col-sm-2 col-md-1" >
<img className={styles.profile_pic} height="60px" width="60px"  src="assets/detailed-post/profile-pic.png"></img>  
</div>
<div className="col-9 col-sm-10  col-md-11 ">
 <h3 className={styles.name}>
     Posted by Siddhesh surve
 </h3>
 <p className={styles.tags}>Food ,water</p>

</div>
</div>
<div className={` row ${styles.postBox}`}>
<div className="col-3 col-sm-2 col-md-1" >
<img className={styles.profile_pic} height="60px" width="60px"  src="assets/detailed-post/profile-pic.png"></img>  
</div>
<div className="col-9 col-sm-10  col-md-11 ">
 <h3 className={styles.name}>
     Posted by Siddhesh surve
 </h3>
 <p className={styles.tags}>Food ,water</p>

</div>
</div>
<div className={` row ${styles.postBox}`}>
<div className="col-3 col-sm-2 col-md-1" >
<img className={styles.profile_pic} height="60px" width="60px"  src="assets/detailed-post/profile-pic.png"></img>  
</div>
<div className="col-9 col-sm-10  col-md-11 ">
 <h3 className={styles.name}>
     Posted by Siddhesh surve
 </h3>
 <p className={styles.tags}>Food ,water</p>

</div>
</div>
<div className={` row ${styles.postBox}`}>
<div className="col-3 col-sm-2 col-md-1" >
<img className={styles.profile_pic} height="60px" width="60px"  src="assets/detailed-post/profile-pic.png"></img>  
</div>
<div className="col-9 col-sm-10  col-md-11 ">
 <h3 className={styles.name}>
     Posted by Siddhesh surve
 </h3>
 <p className={styles.tags}>Food ,water</p>

</div>
</div>
</div>

</div>
              
            

          </>
          )
        }
    
