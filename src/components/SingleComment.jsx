import {Col , Button} from 'react-bootstrap'

const SingleComment = (props) => {
    const deleteC = async (deleteComment) => {
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' +deleteComment,
            {
                method:'DELETE',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2Y3NmI1MjViYjAwMThlZDA3ZWIiLCJpYXQiOjE3MDMxNjU4MTUsImV4cCI6MTcwNDM3NTQxNX0.mKuoXW7tenNwNxL9AV5BAsLcICUV0zAH2fIZgNokT0Q'
                },
            })
            if(response.ok){
                alert('Commento eliminato')
            }else{
                alert('Errore, Commento non eliminato')
            }
        }catch(errore){
            alert('Errore')
        }
    }
    return (
        <div className='d-flex my-2'>
            <Col className='border border-danger'>
                <div><p className='text-white'>{props.commento.comment}</p></div>
                <div>
                    <Button variant='light' onClick={() => deleteC(props.commento._id)}>
                        elimina commento
                    </Button>
                </div>
            </Col>
        </div>
    )
}
export default SingleComment