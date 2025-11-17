'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdEast } from 'react-icons/md';
import NumberProgressBox from '@/components/NumberProgressBox';
import { Spinner ,Button, Input} from "@nextui-org/react";



export type CustomUser = {
  username: string,
  contact: string,
}
const Login = () => {
  const router = useRouter();


  const place = "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  // const { setPrompt } = usePrompt();
  const [formLoading, setFormLoading] = useState(false);

  // const [stepCounter, setStepCounter] = useState(0);
  // const labelList = ['First Step', 'OTP', 'Almost There', 'What do we call you?'];
  // const valList = [25, 50, 75, 100];

  // const [errorMessage, setErrorMessage] = useState(false);

  const [phoneCode, setPhoneCode] = useState('233');
  const [contact, setContact] = useState('');
  const [fullContact, setFullContact] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className='grid grid-cols-2 min-h-screen md-screen:flex flex-col md-screen:gap-12'>
      <section className='relative md-screen:h-[30vh]'>
        <Image alt='' src={place} fill className='object-cover' />
      </section>

      <section className='flex flex-col gap-7 justify-center items-center'>
        {/* {logo} */}
        <form className='w-[400px] flex flex-col gap-6 md-screen:w-auto' onSubmit={(e) => { e.preventDefault(); }}>
          <NumberProgressBox label={'Welcome Back'} val={90} />


          <section className="flex w-full md:flex-nowrap gap-2">
            <Input type="text" label="code" value={phoneCode} className='w-[100px]' required />
            <Input type="text" onChange={(e) => { setContact(e.target.value); setFullContact(phoneCode + e.target.value) }} label="Contact" required />
          </section>


          <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />


          <Button className='rounded-lg p-6  bg-gray-100' type='submit'>
            {!formLoading ?
              <legend className='flex gap-3 items-center'><span>Continue</span> <MdEast /></legend>
              :
              <Spinner />
            }
          </Button>
          <div className='w-full h-[3px] bg-gray-300 rounded-md'></div>

          <article className='text-center grid'>
            <Link href={'/register'} className='text-[0.9rem] text-blue-500'>
              Don&apos;t have an account yet? Register here
            </Link>

            <Link href={'/forgot'} className='text-[0.9rem] text-red-500'>
              Forgot Password? Reset here
            </Link>
          </article>
        </form>

      </section>
    </section>
  );
}

export default Login;