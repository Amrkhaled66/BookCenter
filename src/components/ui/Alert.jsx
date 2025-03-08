import Swal from "sweetalert2";

export default function Alert(title, text, icon, confirmButtonText, html) {
  return Swal.fire({
    title,
    text,
    icon,
    html,
    confirmButtonText,
    customClass: {
      title: "font-cairo font-bold !text-xl ",
      htmlContainer: "font-cairo !font-semibold !text-base ",
      confirmButton:
        "bg-main-color hover:scale-105 font-cairo transition-all duration-300 px-5 py-3  ",
    },
  });
}
