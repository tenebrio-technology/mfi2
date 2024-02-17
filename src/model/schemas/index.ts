export * from "./Location"; 
export * from "./habitat.schema"; 

// Adds our custom schema into the meta property of fyup fields 
declare module 'yup' {
  export interface CustomSchemaMetadata {
    type: string,
    autocomplete: string
  }
}

