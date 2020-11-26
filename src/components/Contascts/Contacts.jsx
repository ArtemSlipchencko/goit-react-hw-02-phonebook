import React, { Component } from 'react';
import './Contacts.css';

class Contacts extends Component {

    render() {
        
        const {contacts, deleteContact} = this.props;
        
        return (
        <>
            <ul>

                {
                    contacts.map(el => {
                        return (
                            <li key={el.id}>{el.name}: {el.number} <button type="button" onClick={() => deleteContact(el.id)}>Delete</button></li>
                        )
                    })
                }

            </ul>
        </>
    )}

};

export default Contacts;