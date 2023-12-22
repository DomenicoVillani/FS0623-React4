import { Row, Col } from 'react-bootstrap'
import SingleComment from './SingleComment'



const MyCommentList = (props) => {
    return(
        <div className="text-center">
                <Row>
                    {props.commenti.length === 0 ? (
                        <Col>
                            <p className="text-white">Nessun commento, per ora..</p>
                        </Col>
                    ) : (
                        props.commenti.map((commento) => (
                            <SingleComment key={commento._id} commento={commento} />
                        ))
                    )}
                </Row>
            </div>
    )
}
export default MyCommentList