import { useState } from "react";


const inputValue = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputError, setInputError] = useState('');

    const getEmail = (e) => {
        const emailValue = e.target.value;  
        /* Uppercase (A-Z) and lowercase (a-z) English letters.
        Digits (0-9).
        Characters ! # $ % & ' * + - / = ? ...
        Character . */
        if (emailValue && emailValue.match(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/)){

            setEmail(emailValue)

        }
        else{

        }


    }
    const getPassword = (e) =>{
        const passwordValue = e.target.value; 
         /* Minimum eight characters, at least one 
         letter, one number and one special character: */
        if(password && passwordValue.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
            
            setPassword(passwordValue)

        } else{
            
        }


    }

    const getConfirmPassword = (e) =>{
        const confirmPasswordValue = e.target.value;
        if(confirmPasswordValue && password === confirmPasswordValue){

        }


    } 

    



return{

    email, password, getEmail, getPassword , getConfirmPassword, inputError
}

}


export default inputValue;