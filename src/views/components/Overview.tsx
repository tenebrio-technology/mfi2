import * as Yup from 'yup';
import { Navbar, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ReactNode, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, FormDialog, ITableEntry, Table } from '../../components';
import { FormikHelpers, FormikValues } from 'formik';
import { IServiceResponse } from '../../model';

interface Props {
  title: string;
  schema: Yup.AnyObject;
  sections?: ReactNode[];
  onAdd: (values: any) => Promise<IServiceResponse>;
  onDelete: (id: number) => Promise<IServiceResponse>;
  fetch: () => Promise<IServiceResponse>;
}

export const Overview: React.FC<Props> = ({ title, schema, onAdd, fetch, sections, onDelete }) => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [data, setData] = useState<ITableEntry[]>([]);
  const [fetched, setFetched] = useState(false);

  async function add(values: FormikValues, formik: FormikHelpers<FormikValues>) {
    const result = await onAdd(values);
    console.log("result:", result); 
    if (result.success) {
      setData([...(data ? data : []), result.payload]);      
      setShowAddDialog(false);
      if (result.message) toast.success(result.message);
      return;
    }

    formik.setStatus(result.errors);
    formik.setSubmitting(false);
  }

  async function del(id: number) {
    const result = await onDelete(id);
    console.log("result:", result); 
    if(!result.success) {
      if (result.message) toast.error(result.message); 
    } else {
      if (result.message) toast.success(result.message); 
      setData(data.filter(row => row.id !== id));
    }
  }

  useEffect(() => {
    if (!fetched) {
      (async () => {
        const response = await fetch();
        if(!response.success) toast.error(response.message || "Error fetching data."); 
        setData(response.payload);
        setFetched(true);
      })();
    }
  }, []);

  return (
    <Container fluid className='main-section'>
      <Navbar className='justify-content-between p-2 position-sticky title'>
        <Navbar.Brand>
          <h1>{title}</h1>
        </Navbar.Brand>
        <Button size='sm' onClick={() => setShowAddDialog(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Navbar>


      <Modal show={showAddDialog}>
        <Modal.Header>Add {title}</Modal.Header>
          <Form schema={schema} onSubmit={add} InputWrapper={Modal.Body} ButtonWrapper={Modal.Footer} onCancel={() => setShowAddDialog(false)}/>
      </Modal> 

      <Row>
        {sections &&
          sections.map((section, idx) => (
            <Col key={'section-' + idx} size={2}>
              {section}
            </Col>
          ))}
      </Row>
      <Row>
        <Col>
          <Table schema={schema} data={data} onDelete={del} />
        </Col>
      </Row>
    </Container>
  );
};
