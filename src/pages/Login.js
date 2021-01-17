import React, {useState, useContext} from 'react'
import firebase from '../config/firebase'
import {Redirect} from 'react-router-dom'
import {AuthContext} from '../AuthService'

const Login = ({history}) => {　//Routeコンポーネントによって与えられる、props historyを分割代入します。

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.pareventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      history.push("/") //"/"に移動
    })　　　　　　　　　　//historyオブジェクトのpushメゾットを使用することで、引数に指定したパスにリダイレクトを行います。
    .catch(err => {
      console.log(err)
    })
  }
  
  const user = useContext(AuthContext)

  if(user) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            nama='email'
            placeholder='Email'
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}


export default Login