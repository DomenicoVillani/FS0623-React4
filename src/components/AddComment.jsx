import React from "react";
import { Button, Form } from 'react-bootstrap'

class AddComment extends React.Component {
    state = {
        comment: {
            comment: '',
            elementId: this.props.id
        }
    }
    sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2Y3NmI1MjViYjAwMThlZDA3ZWIiLCJpYXQiOjE3MDMxNjU4MTUsImV4cCI6MTcwNDM3NTQxNX0.mKuoXW7tenNwNxL9AV5BAsLcICUV0zAH2fIZgNokT0Q',
                    'Content-Type': 'apllication/json',
                }
            }
            )
            if (response.ok) {
                alert('Recensione inviata! ✔️')
                this.setState({
                    comment: {
                        comment: '',
                        elementId: this.props.id,
                    }
                })
            } else {
                alert('Recensione non inserita ❌')
            }
        } catch (errore) {
            alert('Errore')
        }
    }
    render() {
        return (
            <div className="mb-3">
                <Form onSubmit={this.sendComment}>
                    <Form.Group>
                        <Form.Label className="text-white">Inserisci un commento:</Form.Label>
                        <Form.Control type="text" value={this.state.comment.comment} onChange={(e) => this.setState({
                            comment: {
                                ...this.state.comment,
                                comment: e.target.value,
                            }
                        })} />
                    </Form.Group>
                    <Button variant="success" type="submit">Invia recensione ✔️</Button>
                </Form>
            </div>
        )
    }
}
export default AddComment