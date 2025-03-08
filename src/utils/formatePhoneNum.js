export default function formatPhoneNum(num) {
  
  num = num?.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/ /g, "");

  return num;
}
