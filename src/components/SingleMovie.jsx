import React from 'react'
import { Col } from 'react-bootstrap'
import MyCommentArea from './MyCommentArea'

class SingleMovie extends React.Component {
    state = {
        selected: false,
    }
    render() {
        return (
            <Col>
                <div onClick={() => this.setState({selected:!this.state.selected})}>
                    <img src={this.props.film.Poster} alt='poster Film' />
                </div>
                {this.state.selected && <MyCommentArea id={this.props.film.imdbID}/>}
            </Col>
        )
    }

}
export default SingleMovie