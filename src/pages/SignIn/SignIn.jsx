import React from 'react'
import FormSignin from '../../Components/FormSigin/FormSignin'
import SigninAnimation from '../../Components/SigninAnimation/SigninAnimation'

const SignIn = () => {
  return (
    <div className='bg-gray-100 grid grid-cols-12 h-screen p-5'>
        {/* cols-7 */}
        <div className="col-span-7 flex justify-center items-center">
            <SigninAnimation/>
        </div>
        {/* cols-5 */}
        <div className="col-span-5">
            <FormSignin/>
        </div>
    </div>
  )
}

export default SignIn