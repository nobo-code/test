import React, {useState, useEffect} from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext() //providerとして振る舞うには、React.createContextフックを使用し、Contextオブジェクトを作成する必要があります。

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)  //userにはログイン済のユーザーのオブジェクトが入ります。

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {  //onAuthStateChangeはユーザーのログイン時、ログアウト時に必ず呼び出されるメゾットです。
      setUser(user)　　　　　　　　　　　　　　　　　　 //引数に渡した関数がユーザーのログイン時、ログアウト時に実行されます。
    })
  }, [])
  //外部(APIなど)との通信や、DOMの直接的な更新等、関数の外のスコープに影響を与えるような処理は、副作用と呼ばれます。
  //Reactコンポーネントにおいて副作用を扱わなければならない場合、useEffectを使用して記述することが推奨されています。
  //第一引数には、副作用として実行する関数を与えます。useEffectに指定することで、副作用は、コンポーネントの描写が終わった後に実行されます。
  //また第二引数には、副作用を実行する頻度を設定することが出来ます。
  //第二引数を与えなかった場合、コンポーネントの描写後、毎回実行されます。
  //第二引数に配列を与え、要素として変数を指定すると、指定した変数に変更があった場合のみ実行されます。
  //今回のように空の配列を与えた場合には、初回描写時にのみ実行されます。

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
  //ContextオブジェクトであるAuthContextのProviderメソッドを使用しています。
  //Providerは、valueプロパティを使用できます。valueとして渡された値が、後ほど子孫コンポーネントに渡されることになります。
}

export {
  AuthContext,
  AuthProvider
}

