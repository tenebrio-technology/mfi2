
import * as Yup from "yup"; 
import { Navbar, Button, Modal } from "react-bootstrap"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react"; 

import "./overview.scss"; 
import { Form, Table } from "../../components";
import { FormikHelpers, FormikValues } from "formik";
import { ApiResult } from "../../services";

interface Props { 
  title: string; 
  schema: Yup.AnyObject;
  onAdd: (values: any) => Promise<ApiResult>; 
  fetch: () => Promise<ApiResult>; 
}

export const Overview: React.FC<Props> = ({title, schema, onAdd, fetch}) => {

  const [showAddDialog, setShowAddDialog] = useState(false); 
  const [data, setData] = useState(null); 
  
  async function add(values: FormikValues, formik: FormikHelpers<FormikValues>) {

    const result = await onAdd(values); 

    if(result.success) {
      setShowAddDialog(false); 
      return; 
    }

    formik.setStatus(result.message); 
    formik.setSubmitting(false); 
    
  }

  useEffect(() => {

    if(!data) {
      (async () => { 
        const data = await fetch(); 
        console.log(data); 
    })(); 
    }
  }, []);

  return (

    <>
    <Navbar className="justify-content-between p-2">
      <Navbar.Brand><h1>{title}</h1></Navbar.Brand>
      <Button size="sm"><FontAwesomeIcon icon={faPlus} onClick={() => setShowAddDialog(true)}/></Button>
    </Navbar>

    <Modal show={showAddDialog}>
      <Modal.Header>Add {title}</Modal.Header>
      <Modal.Body>
        <Form schema={schema} onSubmit={add}/>
      </Modal.Body>
    </Modal>

    <Table schema={schema} data={data}/>
    </>
  );
}

