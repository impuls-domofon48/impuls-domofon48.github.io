import { defineRule } from "vee-validate";
defineRule("required", (value) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});
defineRule("email", (value) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "This field must be a valid email";
  }
  return true;
});
defineRule("password", (value) => {
  if (
    //^ начало строки
    //(?=.*[a-z]) - минимум 1 строчная буква
    //(?=.*[A-Z]) - минимум 1 прописная буква
    //(?=.*[0-9]) - минимум 1 цифра
    //(?=.*[!@#$%^&*]) - минимум 1 спецсимвол из предоставленных
    //(?=.{8,}) - длина пароля минимум 8
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      value
    )
  ) {
    return "Required minimum 1 special symbol like !,@,#,$,%,^,&,*; minimum 1 upper case character, minimum 1 lower case character and minimum 8 elements";
  }
  return true;
});
defineRule("confirmed", (value, [target]) => {
  if (value === target) {
    return true;
  }
  return "Passwords should match";
});
defineRule("nickname", (value) => {
  if (value.length < 6) {
    return "Minimal length 6 characters";
  }
  return true;
});
