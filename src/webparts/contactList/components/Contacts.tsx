import * as React from 'react';
import styles from './ContactList.module.scss';

export const ContactDetail = (props) => {
    
    return (
        <div className={styles.contact}><p className={styles.contactName}> {props.data.ContactName}</p>
            <div className="row">
                <div className="col-sm-3"><img width={"75px"} height={"75px"} src={props.data.Image} /></div>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-12"><span className={styles.contactTitle}>Company: </span><span className={styles.contactValue}>{props.data.Company} </span></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"><span className={styles.contactTitle}>Designation: </span><span className={styles.contactValue}>{props.data.Designation} </span></div>

                    </div>
                    <div className="row">
                        <div className="col-sm-12"><span className={styles.contactTitle}>Age: </span><span className={styles.contactValue}>{props.data.Age} </span></div>

                    </div>
                    <div className="row">
                        <div className="col-sm-12"><span className={styles.contactTitle}>Location: </span><span className={styles.contactValue}>{props.data.Location} </span></div>

                    </div>
                    <div className="row">
                        <div className="col-sm-7"></div>
                        <div className="col-sm-2"><button type="button" >
                            <i className="glyphicon glyphicon-pencil"></i>
                        </button></div>
                        <div className="col-sm-3"><button type="button" >
                            <i className="glyphicon  glyphicon-remove"></i>
                        </button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default ContactDetail;