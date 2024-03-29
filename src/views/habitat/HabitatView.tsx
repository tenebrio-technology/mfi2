import { FormikValues } from 'formik';
import { Overview } from '..';
import { HabitatValues, habitatSchema } from '../../model';
import { services } from '../../services';

import { Faq } from './components/Faq';

interface Props {}

/**
 * Creates the overview page for the Habitats section.
 */
export const HabitatView: React.FC<Props> = () => {
  async function add(values: FormikValues) {
    return await services.habitat.add(values as HabitatValues);
  }

  async function del(id: number) {
    return await services.habitat.del(id);
  }

  async function fetch() {
    return await services.habitat.fetch();
  }

  return (
    <Overview
      title='Habitats'
      schema={habitatSchema}
      onAdd={add}
      onDelete={del}
      fetch={fetch}
      sections={[<Faq />]}
    />
  );
};
