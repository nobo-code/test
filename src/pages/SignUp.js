import React, {useState} from 'react'
import firebase from '../config/firebase'

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()  //ブラウザの標準の挙動をキャンセル
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => {   //上のメゾットはPromiseで実装されている非同期処理関数です。その処理が失敗した場合は、catchメゾットの関数が実行されます。
      console.log(err)
    })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>E-mail</label>
          <input
            name='email' 
            type='email' 
            id='email' 
            placeholder='Email'
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            name='password' 
            type='password' 
            id='password' 
            placeholder='Password'
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp