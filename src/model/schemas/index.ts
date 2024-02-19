import * as Yup from 'yup';

export * from './Location';
export * from './habitat.schema';
export * from './monitor.schema'; 
export * from './login.schema';

// Adds our custom schema into the meta property of fyup fields
declare module 'yup' {
  export interface CustomSchemaMetadata {
    type?: string;
    autocomplete?: string;
    autocreate?: boolean;
  }
}

export interface FieldDefinition extends Yup.CustomSchemaMetadata {
  name: string;
  label?: string;
}

/**
 * Takes a yup schema and
 * @param schema
 * @returns
 */

export const getMeta = (schema: Yup.AnyObject): any => {
  return Object.entries(schema.describe().fields).reduce<
    Record<string, Yup.CustomSchemaMetadata | undefined>
  >((x, [s, v]) => {
    x[s] = (v as Yup.SchemaDescription).meta;
    return x;
  }, {});
};

export const getFields = (schema: Yup.AnyObject): FieldDefinition[] =>
  Object.entries(schema.describe().fields as Yup.SchemaDescription).map(([key, value]) => ({
    name: key,
    label: value.label,
    ...value.meta,
  }));
