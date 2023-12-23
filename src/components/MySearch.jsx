import React from "react";
import { Form, Row, Col } from 'react-bootstrap'
import SingleMovie from "./SingleMovie";

class MySearch extends React.Component {
    state = {
        search: '',
        movies: [],
        isLoading: true,
        isError: false,
    }

    componentDidUpdate(prevState) {
        if (prevState.search !== this.state.search) {
            this.fetchMovies()
        }
    }

    fetchMovies = async () => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?apikey=8288927f&s=${this.state.search}`)
            if (response.ok) {
                let films = await response.json()
                this.setState({ movies: films.Search || [], isLoading: false, isError: false })
            } else {
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            this.setState({ isLoading: false, isError: true })
        }
    }

    render() {
        let filmList = this.state.movies || []
        return (
            <div>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label className="text-white">Cerca un film</Form.Label>
                            <Form.Control type="text" value={this.state.search} onChange={(e) => this.setState({search:e.target.value})} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="flex-nowrap overflow-x-scroll">
                    {filmList.map((film,index) =>(
                        <SingleMovie key={index} film={film} />
                    ))}
                </Row>
            </div>
        )
    }
}
export default MySearch