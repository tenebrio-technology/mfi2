

import { FormikHelpers, FormikValues } from "formik";
import { Overview } from ".."; 
import { Form } from "../../components"; 
import { HabitatValues, habitatSchema } from "../../model";
import { services } from "../../services"; 




async function addHabitat(values: HabitatValues, formik: FormikHelpers<HabitatValues>) {

    const result = await services.habitat.add(values); 
    if(!result.success) {
      formik.setStatus(result.message); 
      formik.setSubmitting(false); 
    }
}

const addHabitatForm = <Form onSubmit={addHabitat} 
                             schema={habitatSchema} />;

interface Props { 
}

/**
 * 
 * Creates the overview page for the Habitats section. 
 */
export const HabitatView: React.FC<Props> = () => {

  async function add(values: FormikValues) {
    return await services.habitat.add(values as HabitatValues); 
  }

  async function fetch() { 
    return await services.habitat.fetch(); 
  }

  return <Overview title="Habitats" 
                   schema={habitatSchema}
                   onAdd={add}
                   fetch={fetch}/> 
}