import axios from "axios";
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { closeModal, showFormLogin } from "./ui";




export const startLogin = (email, password) =>{
    return ( dispatch ) =>{
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", {email, password})
             .then(res => {
                localStorage.setItem('token', res.data.data.token)
                dispatch(login({
                    id: res.data.data.user.id,
                    name: `${res.data.data.user.firstName} ${res.data.data.user.lastName}`
                }))
                dispatch(closeModal())
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
             })
             .catch(() => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              }))
    }
}

export const startRegister = (firstName, lastName, email, password, phone, role) =>{
    console.log(firstName, lastName, email, password, phone, role)
    return(dispatch) =>{
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users", { firstName, lastName, email, password, phone, role })
             .then(() => {
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                      confirmButton: 'btn btn-success',
                      cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                  })
                  
                  swalWithBootstrapButtons.fire({
                    title: 'User created successfully!',
                    text: "Want to login?",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Login!',
                    cancelButtonText: 'Not in this time!',
                    reverseButtons: true
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(showFormLogin())
                    } else if (
                      /* Read more about handling dismissals below */
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Enter our store whenever you like :)',
                        'error'
                      )
                    }
                  })
             })
    }
}


const login = ( user ) =>({
    type: types.authLogin,
    payload: user
})

export const startLogout = () =>{
    return ( dispatch ) => {
        localStorage.clear();
        dispatch(logout())
    }
}

const logout = () =>({
    type: types.authLogout
})

