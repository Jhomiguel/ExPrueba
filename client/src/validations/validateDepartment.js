export default function validateDepartment(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Department Name is required";
  }
  if (!values.description) {
    errors.description = "Department Description is required";
  }

  return errors;
}
