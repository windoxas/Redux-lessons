import React from 'react'
import {connect}  from 'react-redux'



class App extends React.Component{
        render(){

            const {name, surname, age} = this.props
            return(
                <div className={"App"}>
                    <header>
                        <h1 className={"App-title"}>Мой Фото</h1>
                    </header>

                    <p className="App-intro">Здесь будут мои самые залайканые фото</p>
                    <p>{ `Меня зовут: ${name} мой фамиля: ${surname} Возраст ${age}`}</p>
                </div>
            )
        }
}


const mapStateToProps = store => {
    console.log(store);
    return{
        name: store.name,
        surname: store.surname,
        age: store.age
    }
}

export default connect(mapStateToProps)(App)