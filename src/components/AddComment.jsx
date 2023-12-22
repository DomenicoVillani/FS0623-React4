import React from "react";
import { Button, Form } from 'react-bootstrap'

class AddComment extends React.Component {
    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin
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
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2Y3NmI1MjViYjAwMThlZDA3ZWIiLCJpYXQiOjE3MDMxNjU4MTUsImV4cCI6MTcwNDM3NTQxNX0.mKuoXW7tenNwNxL9AV5BAsLcICUV0zAH2fIZgNokT0Q',
                    'Content-Type': 'apllication/json',
                }
            }
            )
            if (response.ok) {
                alert('Recensione inviata! ✔️')
                this.setState({
                    comment: {
                        comment: '',
                        rate: 1,
                        elementId: this.props.asin,
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
                                comment: e.target.value
                            },
                        })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-white">Voto da 1 a 5</Form.Label>
                        <Form.Control as="select" value={this.state.comment.rate} onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        rate: e.target.value,
                                    },
                                })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="success" type="submit" className="my-2">Invia commento ✔️</Button>
                </Form>
            </div>
        )
    }
}
export default AddComment