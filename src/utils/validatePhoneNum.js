export default function validatePhoneNum(num) {
  
  num = num.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/ /g, "");

  return num;
}
