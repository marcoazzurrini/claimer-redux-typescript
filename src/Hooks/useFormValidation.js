const useFormSubmit = (input, type) => {
  const inputFields = {
    text: /^[a-z\d]{1,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{3,8})?$/
  };

  return inputFields[type] ? inputFields[type].test(input) : true;
};

export default useFormSubmit;
