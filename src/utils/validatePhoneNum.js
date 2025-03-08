export default function validatePhoneNum(phone) {
  const phoneRegex = /^01[0125][0-9]{8}$/;

  return phoneRegex.test(phone);
}
