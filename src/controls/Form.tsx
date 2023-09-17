
import { FormikConfig, useFormik } from "formik";
import { Form as BootstrapForm, Button, Spinner, Alert } from "react-bootstrap"; 

import { FC } from "react";

export type InputType = "text" | "password"; 

export interface InputCfg { 
  type?: InputType, 
  autoComplete?: string
}

export interface InputsCfg { 
  [key:string]: InputCfg; 
}

export interface FormProps extends FormikConfig<any> { 
  className: string;
  submitting: boolean;
  error?: string | null;  
  inputCfg?: InputsCfg; 
}

export const Form: FC<FormProps> = (props) => {

  const formik = useFormik(props); 

  return <BootstrapForm className={props.className} onSubmit={formik.handleSubmit}>

          { props.error && ! props.submitting && 
            <Alert variant="danger">{props.error}</Alert>
          }
          { Object.keys(props.initialValues).map((field:string) => 
            <BootstrapForm.Group key={field+"Group"} className="mb-2">
              <BootstrapForm.Label>{field}</BootstrapForm.Label>
              <BootstrapForm.Control name={field}
                                    type={(props.inputCfg?.[field].type) ? props.inputCfg[field].type : "text"}
                                    autoComplete={props.inputCfg?.[field].autoComplete}
                                    className={formik.touched[field] ? formik.errors[field] ? "is-invalid" : "is-valid" : ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values[field]}
                                    />
              <div id="validationServerUsernameFeedback" className="invalid-feedback">{formik.errors[field]?.toString()}</div>
            </BootstrapForm.Group>
          )}
            <BootstrapForm.Group className="d-flex justify-content-end">
              <Button disabled={!formik.isValid || props.submitting } type="submit">Sign in
              { props.submitting && 
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="ms-2"
              /> 
              }</Button>
            </BootstrapForm.Group>

        </BootstrapForm>    


}
