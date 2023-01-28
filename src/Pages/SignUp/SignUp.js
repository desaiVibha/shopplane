import './SignUp.css';
import { useEffect, useState } from 'react';
//import fs from 'fs';
import {Formik,Form,Field,ErrorMessage} from 'formik';
//import { useFormik } from 'formik';
import * as Yup from 'yup';
//import {writeJsonFile} from 'write-json-file';
//import { finished } from 'stream';
//const fs=require('fs');


const validationSchema=Yup.object().shape({ 
     userfname:Yup.string('Invalid name').required('First name is required!').min(3, "Name cannot be less than 3 characters").max(30, "Name is too long!"),
     userlname:Yup.string('Invalid name').required('Last name is required!').min(3, "Name cannot be less than 3 characters").max(30, "Name is too long!"),  
     useremail:Yup.string('Email type invalid').required('Email is required').email('Email type invalid'),
     userpassword:Yup.string().required('Password cannot be empty').min(6, 'Password needs to be minimum of 6 characters').max(12,'Password is too long')
})
        const initialValues={
            userfname:"",
            userlname:"" ,
            useremail:"",
            userpassword:""
        }
        
        // const validate=values=>{
        //     const errors={};
        //     if(!values.userfname){
        //         errors.userfname='Required';
        //     }
        //     if(!values.userlname){
        //         errors.userlname='Required';
        //     }
        //     if(!values.useremail){
        //         errors.useremail='Required';
        //     }
        //     if(!values.userpassword){
        //         errors.userpassword='Required';
        //     }

        //     return errors
        // }

function SignUp({setloginState,setsignupState}){
    let [regValues,setregValues]=useState([]);
    useEffect(()=>{
                console.log(regValues) ;         
                localStorage.setItem('data',JSON.stringify(regValues));
                alert("Successfully signed in! You can now log in");
    },[regValues])
    const onSubmit=values=>{
          
            
        if(values)
        { 
            console.log(values);        
            
            
                setregValues(()=>[...regValues,{
                    email:values.useremail,
                    firstname:values.userfname,
                    lastname:values.userlname,
                    password:values.userpassword
                }]);
                // console.log(regValues) ;         
                // localStorage.setItem('data',JSON.stringify(regValues));
                // alert("Successfully signed in! You can now log in");
            }
          
            //localStorage.getItem('data');
            
            
            //const jsondata=JSON.stringify(regValues);
            //fs.writeFile("signupdetails.json",jsondata,finished);

        //  fetch('https://fakestoreapi.com/users',{
        //      method:"POST",
        //      body:JSON.stringify(
        //          {
        //              email:values.useremail,
        //              firstname:values.userfname,
        //              lastname:values.userlname,
        //              password:values.userpassword,                   
        //          }
        //      )
        // })
        //     .then(res=>res.json())
        //     .then(json=>{
        //         //console.log(json);
        //         alert("Successfully signed in! You can now log in")})

            
   }
        //console.log(values)
     
    
    // const formik=useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema     
    // })
    //console.log(formik.values);
    // function adduser(e){
    //     if(initialFormValues){
    //         console.log(initialFormValues);
    //         fetch('https://fakestoreapi.com/users',{
    //             method:"POST",
    //             body:JSON.stringify(
    //                 {
    //                     email:initialFormValues.useremail,
    //                     firstname:initialFormValues.userfname,
    //                     lastname:initialFormValues.userlname,
    //                     password:initialFormValues.userpassword,                   
    //                 }
    //             )
    //         })
    //             .then(res=>res.json())
    //             .then(json=>console.log(json))
    //     }
    //     setValues({
    //         userfname:"",
    //         userlname:"" ,
    //         useremail:"",
    //         userpassword:""
    //     })
    //     e.preventDefault();
    //     // console.log(initialFormValues.useremail);
    //     //console.log(initialFormValues.userfname);
    //     // console.log(initialFormValues.userlname);
    //     // console.log(initialFormValues.userpassword);
       
    // }
    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <div className="signup-complete">
                <h1 className="title-signup">Sign Up</h1>
                <Form>              
                    <div className='input-format-signup'>  

                    <div>
                        <Field id='userfname'className='fname-format-signup' type="text" name="userfname" placeholder='First Name'></Field>
                    </div> 
                    <ErrorMessage name='userfname'/>
                    
                                      
                    
                

                    <div>
                        <Field id='userlname' className='lname-format-signup' type="text" name="userlname" placeholder='Last Name'></Field>
                    </div> 
                    <ErrorMessage name='userlname'/>                  
                                     
                    
                    


                    <div>
                        <Field id='useremail' className='email-format-signup' type="email" name="useremail" placeholder='E-mail'></Field>
                    </div>
                    <ErrorMessage name='useremail'/>                   
                                       
                        
                    

                    <div>
                        <Field id='userpassword' className='pass-format-signup' type="password" name="userpassword" placeholder='Password'></Field>
                    </div> 
                    <ErrorMessage name='userpassword'/> 
                    
                            
                        
                    
                
                    </div> 

                    <p className='paraSign'>Already have an account? <p className='here-su' onClick={()=>{setloginState(true);setsignupState(false);}}>Login here.</p></p>

                    <button className="signup-btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                        <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                        </svg>&nbsp;Sign Up</button>
                </Form>
        {/* <Formik validationSchema={Signupschemaa} initialValues={initialFormValues} >
            {({errors, touched})=>(
                <Form onSubmit={adduser}>              
                <div className='input-format-signup'>  

                  <div>
                    <Field onChange={event=>{setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));}} value={initialFormValues.userfname} className='fname-format-signup' type="text" name="userfname" placeholder='First Name'></Field>
                </div>                   
                
                {errors.userfname && touched.userfname ?(
                    <div>{errors.userfname}</div>
                ):null}

                  <div>
                    <Field onChange={event=>{setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));}} value={initialFormValues.userlname} className='lname-format-signup' type="text" name="userlname" placeholder='Last Name'></Field>
                </div>                   
                
                {errors.userlname && touched.userlname ?(
                    <div>{errors.userlname}</div>
                ):null}


                <div>
                    <Field onChange={event=>{setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));}} value={initialFormValues.useremail} className='email-format-signup' type="email" name="useremail" placeholder='Email Address'></Field>
                </div>                   
                
                {errors.useremail && touched.useremail ?(
                    <div>{errors.useremail}</div>
                ):null}

                <div>
                    <Field onChange={event=>{setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));}} value={initialFormValues.userpassword} className='pass-format-signup' type="password" name="userpassword" placeholder='Password'></Field>
                </div>              
                    
                
                {errors.userpassword && touched.userpassword ?(
                    <div>{errors.userpassword}</div>
                ):null}
                </div> 

                <p className='paraSign'>Already have an account? Login here.</p>

                <button className="signup-btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                    <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                    </svg>&nbsp;Sign Up</button>
            </Form>
            )}
            
        </Formik> */}
        
        </div>       
        </Formik>
           
    )
}
export default SignUp;