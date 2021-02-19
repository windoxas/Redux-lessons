import React from 'react'
import {connect}  from 'react-redux'



class App extends React.Component{
        render(){

            const {user, page} = this.props
            return(
                <div className={"App"}>
                    <header className={"App-header"}>
                        <h1 className={"App-title"}>Мой топ Фото</h1>
                    </header>

                    <h4 className="App-intro">Привет, {user.name}</h4>
                    <h3>У тебя {page.photos.length} фото за {page.year}</h3>
                </div>
            )
        }
}


const mapStateToProps = store => {
    console.log(store);
    return{
        user: store.user,
        page: store.page
    }
}

export default connect(mapStateToProps)(App)