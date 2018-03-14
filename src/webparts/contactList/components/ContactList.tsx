import * as React from 'react';
import styles from './ContactList.module.scss';
import { IContactListProps } from './IContactListProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ContactDetail from './Contacts';
import axios from 'axios';
import * as jQuery from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ContactList extends React.Component<IContactListProps, any> {
  constructor(props) {
    super(props);
    this.state={
        contactList:[]
    }   
}
public componentDidMount() {
  
  console.log("componentDidMount")
  axios.get(`https://netwoveninc.sharepoint.com/sites/debopomademo/_api/web/lists/getbytitle('ContactList')/items?$select=Id,ContactName,Company,Designation,Age,Location,Image`)
  .then((response) => {
      var arrContacts = [];
      console.log("get  data")
      console.log(response.data)
      arrContacts = response.data.value;
     
      this.setState({contactList:arrContacts })
      console.log(arrContacts)
  })
  .catch((error) => {
      console.log(error);
  });
}

  public render(): React.ReactElement<IContactListProps> {
    return (
      <div className="col-sm-12">
      <div className="row">
      </div>
      <div className="row">
          <div className={styles.contactContainer} {..."col-sm-4"}  >
              {this.state.contactList.map((element, index) =>
                   <ContactDetail key={index} data={element} ></ContactDetail>
                )
              }
          </div>
          
      </div>
  </div>
    );
  }
}
