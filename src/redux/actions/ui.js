import { types } from "../types/types"


export const openModal = () =>({
   type: types.uiOpenModal
})

export const closeModal = () =>({
    type: types.uiCloseModal
})

export const showFormLogin = () =>({
    type: types.uiShowFormLogin
})

export const showFormRegister = () =>({
    type: types.uiShowFormRegister
})

export const showAlertScreen = (isLoading) => ({
    type: types.uiShowAlertScreen,
    payload: isLoading
})
