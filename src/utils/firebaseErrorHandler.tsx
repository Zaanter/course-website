import { FirebaseError } from "firebase/app";

const firebaseErrorHandler = (e:FirebaseError) => {
    var errorMessage:string;
    switch(e.code){
        case 'auth/invalid-email':
            errorMessage = 'El email ingresado no es válido.'
            break
        case 'auth/weak-password':
            errorMessage = 'La contraseña debe tener al menos 6 caracteres.'
            break
        case 'auth/email-already-in-use':
            errorMessage = 'Este email ya está en uso.'
            break
        case 'auth/wrong-password':
            errorMessage = 'Contraseña incorrecta.'
            break
        case 'auth/user-not-found':
            errorMessage = 'Este email no se encuentra registrado.'
            break
        case 'auth/internal-error':
            errorMessage = 'Error inesperado del sistema. Vuelva a intentar más tarde.'
            break
        case 'auth/too-many-requests':
            errorMessage = 'Demasiados intentos. Intente nuevamente en un rato.'
            break
        default:
            errorMessage = e.code
    }

    return errorMessage
}

export default firebaseErrorHandler;