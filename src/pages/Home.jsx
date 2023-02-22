import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

const EmailPasswordForm = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstname] = useState('');
  const [lastName, setlastname] = useState('');
  const [address, setaddress] = useState('');
  const [phoneNumber, setphone] = useState('');
  const [countryCode, setconcode] = useState('');
  const [formno, setformno] = useState(0);
  const navigate = useNavigate();
  // console.log(emailId, password, firstName, lastName, address, phoneNumber, countryCode, formno);

  function submitData() {
    // navigate('/posts');
    const data = {
      emailId,
      password,
      firstName,
      lastName,
      address,
      countryCode,
      phoneNumber,
    };
    // console.log(data);
    fetch('https://codebuddy.review/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response =>
        // console.log('Response status:', response.status);
        response.json(),
      )
      .then(res => {
        console.log('Success:', res);
        navigate('/posts');
      })
      .catch(error => {
        console.error('Error:', error.message);
        navigate('/posts');
      });
  }
  // fytujk

  return (
    <div>
      {formno === 0 && <Form1 setformno={setformno} femail={setEmailId} fpassword={setPassword} />}
      {formno === 1 && (
        <Form2
          setformno={setformno}
          faddress={setaddress}
          ffirstname={setfirstname}
          flastname={setlastname}
        />
      )}
      {formno === 2 && <Form3 setformno={setformno} fconcode={setconcode} fphoneno={setphone} />}
      {formno === 2 && (
        <form>
          <button
            type="button"
            disabled={
              !(
                emailId &&
                password &&
                firstName &&
                lastName &&
                address &&
                countryCode &&
                phoneNumber
              )
            }
            onClick={() => submitData()}
          >
            save all the details
          </button>
        </form>
      )}
    </div>
  );
};

export default EmailPasswordForm;
