import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../../index'
import {Row, Form, Button, Container, Card, Table, ListGroup, FormText} from 'react-bootstrap'
import {setPerson, setCompany, addPledge, addGuarantor, 
    setFinancies, addIncome, fetchPerson} from '../../api/borrowersApi'
import {observer} from 'mobx-react-lite'

const Mail = observer(() => {

    
    return (
<<<<<<< HEAD
        <>
            
        </>
=======
        <div>
            Mail
        </div>
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
    );
})

export default Mail;