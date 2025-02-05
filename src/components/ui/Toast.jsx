import Swal from "sweetalert2";

export default function Toast(title, icon, background, position ) {

  Swal.mixin({
    toast: true,
    position: position || "top",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    customClass: {
      popup: "custom-toast",
    },
  }).fire({
    icon,
    title: title,
    background,
  });
}
