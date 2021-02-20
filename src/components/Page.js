import React from 'react'
import PropTypes from 'prop-types'



class Page extends React.Component{

    onBtnClick = e => {
        const year = +e.currentTarget.innerText
        this.props.setYear(year)
    }

    render() {

     const {year, photos} = this.props

        return(
            <div>
                    <div>
                    <button onClick={this.onBtnClick}>2015</button>
                    <button onClick={this.onBtnClick}>2016</button>
                    <button onClick={this.onBtnClick}>2017</button>
                    <button onClick={this.onBtnClick}>2018</button>
                    <button onClick={this.onBtnClick}>2019</button>
                    <button onClick={this.onBtnClick}>2020</button>
                    <button onClick={this.onBtnClick}>2021</button>
                </div>
                <p>
                    У тебя {photos.length} фото за <span>{year}</span>
                </p>
            </div>
            )
    }   
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}

export default Page