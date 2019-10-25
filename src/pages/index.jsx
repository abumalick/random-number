/** @jsx jsx */
import {jsx} from 'theme-ui';
import useForm from 'react-hook-form';
import 'normalize.css';
import {useState} from 'react';

const IndexPage = () => {
  const {register, handleSubmit} = useForm();
  const [currentNumber, setCurrentNumber] = useState(null);
  const onSubmit = (data) => {
    const min = parseInt(data.minimum, 10);
    const max = parseInt(data.maximum, 10);
    console.log(data);
    setCurrentNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  };
  return (
    <div
      sx={{
        textAlign: 'center',
      }}
    >
      <div
        sx={{
          fontSize: '22px',
          lineHeight: 2,
        }}
      >
        <h1>Nombre aléatoire</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          Je veux un nombre entre
          <br />
          <input
            sx={{
              textAlign: 'center',
            }}
            name="minimum"
            defaultValue="1"
            type="text"
            ref={register}
          />
          <br />
          et
          <br />
          <input
            sx={{
              textAlign: 'center',
            }}
            name="maximum"
            defaultValue="10"
            type="text"
            ref={register}
          />
          <br />
          compris
          <div
            sx={{
              marginTop: '1rem',
            }}
          >
            <button type="submit">Donne un nouveau nombre</button>
          </div>
        </form>
      </div>
      <div
        sx={{
          marginTop: '1rem',
          fontSize: 72,
          fontWeight: 500,
        }}
      >
        {currentNumber}
      </div>
    </div>
  );
};

IndexPage.propTypes = {};

export default IndexPage;
