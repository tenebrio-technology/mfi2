import { FormikValues } from 'formik';
import { Overview } from '..';
import { MonitorValues, monitorSchema } from '../../model';
import { services } from '../../services';

interface Props {}

/**
 * Creates the overview page for the Habitats section.
 */
export const MonitorView: React.FC<Props> = () => {
  async function add(values: FormikValues) {
   return await services.monitor.add(values as MonitorValues);
  }

  async function del(id: number) {
    return await services.monitor.del(id);
  }

  async function fetch() {
    return await services.monitor.fetch();
  }

  return (
    <Overview
      title='Monitors'
      schema={monitorSchema}
      onAdd={add}
      onDelete={del}
      fetch={fetch}
    />
  );
};
