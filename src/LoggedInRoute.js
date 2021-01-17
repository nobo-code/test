import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from './AuthService'

const LoggedInRoute = ({component: Component, ...rest}) => {
  //restを使用し、component以外の全てのpropsを受け取っています。

  const user = useContext(AuthContext)  //Providerによって与えられた値を使用する際は、useContextフックを使用します。
  　　　　　　　　　　　　　　　　　　　　　　　//このようにすることで、Providerに指定したvalueプロパティに渡した値を参照することができます。

  return (
    <Route
      {...rest}  //restを展開し、LoggedInRouteの実行時に与えられた全てのpropsをRouteコンポーネントに与えます。
      render={props =>　//※(1)
        user ? (　　//以下では、三項演算子を使用し、ログイン状態に応じて適切なコンポーネントを返却しています。
          <Component {...props}/>　//※(2)
        ) : (
          <Redirect to={'/login'}/>　//※(3)
        )
      }
    />
  )
}

export default LoggedInRoute

//※(1)renderプロパティは、componentプロパティやchildrenとしてコンポーネントを渡す場合と比較してパフォーマンスの違いはありますが、
//今回は後ほど使用するhistory等のデフォルトのpropsをレンダリングするコンポーネントに橋渡しするために使用しています。

//※(2)component propsに対して、Compornentと別名を付けましたが、これがその理由です。JSXを用いてコンポーネントを呼び出す際は、先頭の文字をuppercaseにしなければエラーが発生します。
//また、デフォルトのpropsを展開し、Componentに受け渡しています。

//※(3)未ログインの場合は、ログインを促すために、Redirectコンポーネントを使用して/loginに
//リダイレクトを行っています。