import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/authMeReducer';



const Login = (props) => {

    const { register, reset, setError, formState: { errors }, handleSubmit } = useForm({
        mode: 'onBlur'
    });
    const [showPass, setShowPass] = useState(false);
    const [passType, setPassType] = useState('password');
    useEffect(() => {
        if (showPass) {
            setPassType('text');
            return;
        }
        setPassType('password');
    }, [showPass]);


    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    const onSubmit = data => {
        props.login(data.Email, data.Password, data.rememberMe);
        





        // axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', data).then((response) => {

        //     if (response.data.resultCode === 1) {
        //         setError('Email', {
        //             type: "server",
        //             message: 'Something went wrong with Email',
        //         });
        //     }
        // })
    };

    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    name='Email'
                    placeholder={'Email'}
                    {...register('Email',
                        {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,
                                message: 'Please enter a valid Email address'
                            }
                        })} />
                {errors.Email && <i>{errors.Email.message}</i>}
            </div>
            <div>
                <input
                    type={passType}
                    name='Password'
                    placeholder={'Password'}
                    {...register('Password',
                        {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: 'passwords must be at least 8 characters'
                            }
                        }
                    )} />
                {errors.Password && <i>{errors.Password.message}</i>}
            </div>
            { props.errorApi && <div>
                {props.errorApi}
            </div>
            }
            <div>
                <input
                    name='rememberMe'
                    type='checkbox'
                />remember me
            </div>
            <input type='submit' />
        </form>
        {/* <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    name='Login'
                    placeholder={'Login'}
                    {...register('Login',
                        {
                            required: "Login is required",
                            minLength: {
                                value: 5,
                                message: 'login must be at least 5 characters',
                                
                            }
                        })} />
                {errors.Login && <i>{errors.Login.message}</i>}
            </div>
            <div>
                <input
                    name='PhoneNumber'
                    placeholder={'PhoneNumber'}
                    {...register('PhoneNumber',
                        {
                            required: "Number is required",
                            pattern: {
                                value: /^^(?:\+38)?(?:\[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}|[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}|[0-9]{3}[0-9]{7})$/,
                                message: 'Please enter a valid phone number'
                            }
                            // pattern: /^\+380\d{3}\d{2}\d{2}\d{2}$/
                        })} />
                {errors.PhoneNumber && <i>{errors.PhoneNumber.message}</i>}
            </div>
            <div>
                <input
                    name='Email'
                    placeholder={'Email'}
                    {...register('Email',
                        {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,
                                message: 'Please enter a valid Email address'
                            }
                        })} />
                {errors.Email && <i>{errors.Email.message}</i>}
            </div>
            <div>
                <input
                    type={passType}
                    name='Password'
                    placeholder={'Password'}
                    {...register('Password',
                        {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: 'passwords must be at least 8 characters'
                            }
                        }
                    )} />
                {errors.Password && <i>{errors.Password.message}</i> }
            </div>
            <div>
                <input
                    name='passType'
                    type='checkbox'
                    //checked={showPass}
                    onChange={ () => setShowPass((prev) => !prev)}
                />
                <label htmlFor='passType'>
                    { showPass ? 'hide pass' : 'show pass'}
                </label>
            </div>
            <div>
                <input type='submit' />
            </div>
        </form> */}
    </div >

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorApi: state.auth.errorApi
})

export default connect(mapStateToProps, { login })(Login);