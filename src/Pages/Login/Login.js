import './Login.css';
//import { useState } from 'react';
import {Formik, Form, Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
//import IndProduct from '../../Components/ProductIndividual/IndProduct';
const validationSchema=Yup.object().shape({   
    useremail:Yup.string('Email type invalid').required('Email is required').email('Email type invalid'),
    userpassword:Yup.string().required('Password cannot be empty').min(6, 'Password needs to be minimum of 6 characters').max(12,'Password is too long')
})
function Login({setloginState,setsignupState}){   
    const initialValues={
        useremail:"",
        userpassword:""
    }
    const onSubmit=values=>{
        //console.log(values);
        let details=JSON.parse(localStorage.getItem('data'));
        //console.log(details);
        for(let i=0;i<details.length;i++){
            console.log(details);
            if(values.useremail!==details[i].email){
                alert('E-mail does not exist');
                break;
            }
            else{
                let pass=details[i].password;
                if(values.userpassword!==pass){
                    alert('Password does not match');
                    break;
                }
                else{
                    alert('Log in successful'); 
                    break;                    
                }
            }

        }
    }
    return(
        
        <>
            <div className="login-complete">
                <h1 className="title-login">Login</h1>
                <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues}>                    
                    <Form>              
                        <div className='input-format'>     
                            <div>
                                <Field className='email-format' type="email" name="useremail" placeholder='Email Address'></Field>
                            </div> 
                            <ErrorMessage name='useremail'/>                

                            <div>
                                <Field className='pass-format' type="password" name="userpassword" placeholder='Password'></Field>
                            </div> 
                            <ErrorMessage name='userpassword'/>   
                        
                            <p className='para'>Don't have an account?<p className='here' onClick={()=>{setsignupState(true);setloginState(false);}}>Sign up here.</p></p>

                            <button className="login-btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                                <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg>&nbsp;Login</button>
                            </div>
                    </Form>                     
                </Formik>            
            </div>       
        </>           
    )
}
export default Login;