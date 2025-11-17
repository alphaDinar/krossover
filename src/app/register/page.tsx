'use client'
// import { sendOTP, verifyOTP } from '@/external/arkesel';
// import { fireStoreDB } from '@/firebase/base';
// import { collection, onSnapshot } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdArrowBack, MdArrowForward, MdEast } from 'react-icons/md';
import place from '../../../public/register.jpg';
// import { registerUserInPhoneBook, whiteListNumber } from '@/firebase/authService';
// import { logo } from '@/external/assets';
// import { checkContact, checkPassLength, checkPassLower } from '@/external/auth';
import { Button, Input, Checkbox, Spinner } from '@nextui-org/react';
import NumberProgressBox from '@/components/NumberProgressBox';



export type CustomUser = {
  username: string,
  contact: string,
}
const Register = () => {
  const place = "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


  const router = useRouter();
  const [formLoading, setFormLoading] = useState(false);

  const [stepCounter, setStepCounter] = useState(0);
  const labelList = ['First Step', 'OTP', 'Almost There', 'What do we call you?'];
  const valList = [25, 50, 75, 100];

  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const phoneCode = '233';
  const [fullContact, setFullContact] = useState('');

  const [otp, setOTP] = useState(Array(6).fill(''));
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const [errorText, setErrorText] = useState('');
  const [infoText, setInfoText] = useState('');
  const [blacklist, setBlacklist] = useState<string[]>([]);
  const [contactExists, setContactExists] = useState(false);
  const [contactCorrect, setContactCorrect] = useState(false);
  const [contactVerified, setContactVerified] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passMatch, setPassMatch] = useState(false);
  // const [passSpecial, setPassSpecial] = useState(false);
  const [passLower, setPassLower] = useState(false);
  // const [passUpper, setPassUpper] = useState(false);


  // useEffect(() => {
  //   const blacklistRef = collection(fireStoreDB, 'PhoneBook/');
  //   const blacklistStream = onSnapshot(blacklistRef, (snapshot) => {
  //     setBlacklist(snapshot.docs.map((con) => con.id));
  //   });
  //   return () => blacklistStream();
  // }, [])


  const handleContact = (val: string) => {
    setContact(val);
    setFullContact(phoneCode + val);
  }

  const handleOTP = (el: HTMLInputElement, index: number) => {
    const val = el.value;

    if (val.length < 2) {
      const otpTemp = [...otp];
      otpTemp[index] = val;

      setOTP(otpTemp);

      if (val) {
        const nextSibling = el.nextSibling;
        if (nextSibling && nextSibling instanceof HTMLInputElement) {
          nextSibling.focus();
        }
      }
    }
  }

  const handlePassword = (pass1: string, pass2: string) => {
    setPassword(pass1);
    setConPassword(pass2);
    // setPassLength(checkPassLength(pass1));
    // setPassSpecial(checkPassSpecial(pass1));
    // setPassUpper(checkPassUpper(pass1));
    // setPassLower(checkPassLower(pass1));

    if (pass1 === pass2) {
      setPassMatch(true);
    } else {
      setPassMatch(false);
    }
  }


  const runOTP = async () => {
    // const res = await sendOTP(fullContact);
    // if (res.status === 200) {
    //   setStepCounter(1);
    //   setInfoText('OTP Sent To Your Device')
    // } else {
    //   alert('Please try again');
    // }
  }

  const checkOTP = async () => {
    if (otp.length === 6) {
      // const res = await verifyOTP(fullContact, otp.join(''));
      // if (res.status === 200) {
      //   setErrorText('');
      //   setStepCounter(2);
      //   setContactVerified(true);
      // } else {
      //   alert('wrong');
      // }
    } else {
      setErrorText('OTP must be 6 digits')
    }
  }

  const createCustomer = async () => {
    if (passLength && passMatch && passLength && passMatch && passLower) {
      setFormLoading(true);
      const customUser: CustomUser = {
        username: username,
        contact: fullContact,
      }
      // await registerUserInPhoneBook(fullContact, password, customUser, router, '/');
    } else {
      setFormLoading(false);
    }
  }

  const moveToSecondCounter = () => {
    runOTP();
    setStepCounter(1);
    setErrorText('');
  }

  const promptInvalidNumber = () => {
    setErrorText('Contact Already Exists');
  }

  const nextStep = () => {
    if (stepCounter === 0) {
      // if (checkContact(phoneCode, contact)) {
      //   whiteListNumber(fullContact, moveToSecondCounter, promptInvalidNumber)
      // } else {
      //   setErrorText('Enter A Valid Contact');
      //   alert(fullContact);
      //   console.log(fullContact);
      // }
    } else if (stepCounter === 1) {
      checkOTP();
    } else if (stepCounter === 2) {
      if (passLength && passMatch && passLower) {
        setStepCounter(3);
      } else {
        console.log('wrong');
      }
    } else if (stepCounter === 3) {
      setInfoText('Almost Done');
      createCustomer();
    }
  }


  const contactBox =
    <section className="flex w-full md:flex-nowrap gap-2">
      <Input type="text" label="code" value={phoneCode} className='w-[100px]' required />
      <Input type="text" onChange={(e) => handleContact(e.target.value)} label="Contact" required />
    </section>

  const otpBox =
    <section className='grid grid-cols-6 gap-2'>
      {otp.map((el, i) => (
        <input type='number'
          style={{ textAlign: 'center' }}
          className='text-center flex items-center justify-center rounded-lg bg-gray-100 h-12'
          key={i}
          inputMode='numeric'
          maxLength={1}
          value={otp[i]}
          onChange={(e) => handleOTP(e.target, i)}
          required
        />
      ))}
    </section>

  const passwordBox =
    <section className='grid gap-3'>
      <Input type="password" value={password} onChange={(e) => handlePassword(e.target.value, conPassword)} label="Password" required />
      <Input type="password" value={conPassword} onChange={(e) => handlePassword(password, e.target.value)} label="Confirm Password" required />
    </section>

  const usernameBox =
    <section className='grid gap-5'>
      <Input type="text" label="Username" onChange={(e) => setUsername(e.target.value)} required />

      <article className='flex items-center'>
        <Checkbox required />
        <span className='text-[0.9rem]'>By ticking this checkbox I agree to all our <Link href={'/privacyPolicy'} className='text-blue-400'>privacy policies</Link> </span>
      </article>
    </section>

  const stepList = [contactBox, otpBox, passwordBox, usernameBox];

  return (
    <section className='grid grid-cols-2 min-h-screen md-screen:flex flex-col md-screen:gap-12'>
      <section className='relative md-screen:h-[30vh]'>
        <Image alt='' src={place} fill className='object-cover' />
      </section>
      <section className='flex flex-col gap-7 justify-center items-center'>
        {/* {logo} */}
        <form className='w-[400px] flex flex-col gap-6 md-screen:w-auto' onSubmit={(e) => { e.preventDefault(); nextStep() }}>
          {errorText && <small className='bg-red-300 py-1 px-5 rounded-md text-red-100'>{errorText}</small>}
          <NumberProgressBox label={labelList[stepCounter]} val={valList[stepCounter]} />

          {stepList[stepCounter]}

          <Button className='rounded-lg p-6  bg-gray-100' type='submit'>
            {!formLoading ?
              <legend className='flex gap-3 items-center'><span>Continue</span> <MdEast /></legend>
              :
              <Spinner />
            }
          </Button>
          <div className='w-full h-[3px] bg-gray-300 rounded-md'></div>

          <article className='text-center grid'>
            <Link href={'/login'} className='text-[0.9rem] text-blue-500'>
              Do you already have an account? login here
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

export default Register;