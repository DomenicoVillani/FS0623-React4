import {Col, Row, Container} from 'react-bootstrap'
import MyListFilm from './MyListFilm'

const AllMovie = () =>{
    return(
        <Container>
            <Row>
                <Col xs={12}>
                    {/* <MyListFilm listFilm='http://www.omdbapi.com/?apikey=8288927f&s=avengers' title='Avengers'/>
                    <MyListFilm listFilm='http://www.omdbapi.com/?apikey=8288927f&s=star%20wars' title='Star Wars'/> */}
                    <MyListFilm listFilm='http://www.omdbapi.com/?apikey=8288927f&s=harry%20potter' title='Harry Potter'/>
                </Col>
            </Row>
        </Container>
    )
}
export default AllMovie