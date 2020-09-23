export default function validateEmployee(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name field is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name field is required";
  }
  if (!values.salary) {
    errors.salary = "Salary field is required";
  }
  if (!values.department) {
    errors.email = "Department field is required";
  }

  return errors;
}
