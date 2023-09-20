
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../store/Signin/thunk';
import { setToken } from '../../services/api/API';

const Signin = () => {
    const dispatch = useDispatch(); 
    const user = useSelector((state) => state.User);
    console.log('this is the user', user);
    return (    
  <div>
    <h1 className='text-red-900'>Anywhere in your app!</h1>
    <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
       }}
       onSubmit={async (values) => {
            try {
                const result = await dispatch(signin(values));
                console.log('this is the result: ',result);
                const userData = { 
                    email: result.payload.data?.email || '',
                    token: result.payload?.token || ''
                }
                localStorage.setItem('userAuth', JSON.stringify(userData));
                setToken(userData.token);
            } catch (error) {
                console.error('Error occured: ', error);
            }
            
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <br />
           <label htmlFor="password">Password</label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit">
             Submit
           </button>
         </form>
       )}
     </Formik>
  </div>
    )}

export default Signin;