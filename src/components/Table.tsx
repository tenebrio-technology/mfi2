import * as Yup from 'yup';
import { Table as BootstrapTable } from 'react-bootstrap';
import { getFields, getMeta } from '../model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Confirm } from '.';

export interface ITableEntry {
  id: number;
  [field: string]: any;
}

interface Props {
  schema: Yup.AnyObject;
  onDelete: (id: number) => void;
  data: ITableEntry[];
}

/**
 * Provides a table based upon the passed schema
 */
export const Table: React.FC<Props> = ({ schema, data, onDelete }) => {
  const fields = getFields(schema);
  console.log("data", data); 
  return (
    <BootstrapTable striped hover className='data-table'>
      <thead>
        <tr className='sticky-table-header'>
          {fields.map( field => (
            <th key={field.name + '-header'}>{field.label}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((row) => (
          <tr key={`row-${row.id}`}>
            {fields.map( field => (
              <td key={`cell-${row.id}-${field}`}>{row[field.name]}</td>
            ))}
            <td className='action-column'>
              <Confirm onClick={() => onDelete(row.id)} className='link'>
                <FontAwesomeIcon icon={faTrash} />
              </Confirm>
            </td>
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};
