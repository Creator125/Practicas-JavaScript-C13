import Swal from "sweetalert2";

const ShowAlert = (props) => {
   Swal.fire({
    position: props.position,
    icon: props.type,
    title: props.title,
    text: props.text,
    timer: props.timer,
  });
}
export default ShowAlert;