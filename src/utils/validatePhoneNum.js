export default function validatePhoneNum(num) {
  const phoneRegex = /^01[0125][0-9]{8}$/;
  if (!phoneRegex.test(num)) return false;
  return num
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    .replace(/ /g, "");
}
