import Swal from "sweetalert2";

export default function Alert(title, text, icon, confirmButtonText) {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    customClass: {
      title: "font-cairo font-bold !text-xl ",
      htmlContainer: "font-cairo !font-semibold !text-base ",
      confirmButton: "bg-third-color px-5 py-3  ",
    },
  });
}
