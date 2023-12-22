import React from 'react'
import { Row } from 'react-bootstrap'
import SingleMovie from './SingleMovie'

class MyListFilm extends React.Component{
    state = {
        film:[],
        isLoading: true,
        isError: false,
    }

    componentDidMount = async () => {
        try{
            let response = await fetch(this.props.listFilm)
            if(response.ok){
                let movies = await response.json()
                this.setState({film:movies, isLoading:false, isError:false})
            }else{
                this.setState({isLoading:false, isError:true})
            }
        }catch(error){
            this.setState({isLoading:false, isError:true})
        }
    }

    render(){
        let list = this.state.film.Search
        return(
            <div>
                <h2>{this.props.title}</h2>
                <Row  className='flex-nowrap overflow-x-scroll' >
                    {list && list.map((film, index) =>(
                        <SingleMovie key={index} film={film}/>
                    ))}
                </Row>
            </div>
        )
    }
}
export default MyListFilm
