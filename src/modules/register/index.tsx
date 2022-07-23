import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { schema } from './schema';
import { useFormSubmit } from './useFormSubmit';
import { Input } from '../../components/Form';
import TempTracker from '../tempTracker';
const tempClass = new TempTracker();
interface RegisterFormProps {
    submit?: (fields: RegisterFields) => any;
  };
  
  interface RegisterFields {
    name: string;
  }
  type UserRegisterForm = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
  };
export const Register = ({ submit }: RegisterFormProps) => {
    
    const [success, setSuccess] = useState<string>('');
    const [firstStr, setFirstString] = useState<string>('');
    const [secondStr, setSecondString] = useState<string>('');
    const [anagramMessage, setAnagramMessage] = useState<string>('');
    const [temparatureArr, setTemprature] = useState<number[]>([]);
    const [minTemp, setMin] = useState<number | null>();
    const [maxTemp, setMax] = useState<number | null>();
    const [mean, setMean] = useState<number | null>();
    const [mode, setMode] = useState<number | null>();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    setError,
  } = useForm<UserRegisterForm>({
    resolver: yupResolver(schema),
  });
 
  const onSubmit = (data: UserRegisterForm) => {
    setSuccess('Data Saved')
  };
 const firstString =  (e: React.ChangeEvent<HTMLInputElement>): void  => {
   setFirstString(e.target.value);
 }
 const secondString = (e: React.ChangeEvent<HTMLInputElement>): void  => {
    setSecondString(e.target.value);
}

const addTemprature = (e: React.ChangeEvent<HTMLInputElement>): void  => {
    let temp = e.target.value;
    if(temp && temparatureArr.indexOf(parseInt(temp)) === -1) {
    setTemprature([...temparatureArr, parseInt(temp)]);
    }
    if(temp) {
        tempClass.insert(parseInt(temp));
        setMin(tempClass.getMin());
        setMax(tempClass.getMax());
        setMean(tempClass.getMean());
        setMode(tempClass.getMode());
    }
}
const isAnagram = () => {
    if(firstStr.length !== secondStr.length) {
        setAnagramMessage('String is not Anagram')
    }
    let str1 = firstStr.split('').sort().join('');
    let str2 = secondStr.split('').sort().join('');
    if(str1 === str2){
        setAnagramMessage('String is Anagram')
    } else { 
        setAnagramMessage('String is not Anagram')
    }
    
}
  return (
    <div>
    {success && (<div>{success}</div>)}
    <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
        <Input
          {...register('firstName')}
          label="First Name"
          error={Boolean(errors?.firstName)}
           errorMessage={errors.firstName?.message}
        />
        </div>
        <div className="form-group">
        <Input
          {...register('lastName')}
          label="Last Name"
          error={Boolean(errors?.lastName)}
          errorMessage={errors.lastName?.message}
        />
        </div>
        <div className="form-group">
        <Input
          {...register('phoneNumber')}
          label="Phone Number"
          error={Boolean(errors?.phoneNumber)}
           errorMessage={errors.phoneNumber?.message}
        />
        </div>
        <div className="form-group">
        <Input
          {...register('country')}
          label="Country"
          error={Boolean(errors?.country)}
           errorMessage={errors.country?.message}
        />
        </div>
        <button type='submit' > Save</button>
    </form>
    <div>
    <b>Anagram Tester</b>
    <div>
        <form>
            <div>
            <b>First String</b> : <input type="text" name="first" onChange={firstString}/>
            </div>
                <div>
                <b>Second String</b> : <input type="text" name="second" onChange={secondString}/>
                </div>
                <button type='button' onClick={isAnagram}>Check is Anaggram</button>
                    
        {anagramMessage && (anagramMessage)}
        </form>
    </div>
    </div>

    <div>
    <b>Temp Tracker</b>
    <div>
  <div>  {temparatureArr.length > 0 && (temparatureArr.join(','))}</div>
        <form>
           
        <div> <b>Min Temp </b> : {minTemp} </div>
        <div> <b>Max Temp </b> : {maxTemp} </div>
        <div> <b>Mean </b> : {mean} </div>
        <div> <b>Mode </b> : {mode} </div>
            <div> <b>Insert Temp </b> : <input type="number" min={0} max={150} name="temp" onChange={addTemprature}/>
            
            </div>
        </form>
    </div>
    </div>
    </div>
  );
};
