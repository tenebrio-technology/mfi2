import * as Yup from 'yup';

export interface ILocation {
  id: number;
  name: string;
  organisationId: number;
}

export const addLocationFormSchema = Yup.object().shape({
  name: Yup.string().required('You need to give this location a name'),
  organisationId: Yup.number().required('Location needs to be within an organization'),
});
