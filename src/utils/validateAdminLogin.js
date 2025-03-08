export default function ({ email, password }) {
  if (!email || !password) return false;

  let data = {};
  const errors = {};

  if (!email) {
    errors.email = "يوجد خطأ في الايميل او كلمة السر";
  }

  data = {
    email,
    password,
  };

  return { data, errors };
}
