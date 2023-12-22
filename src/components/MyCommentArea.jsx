import React from "react";
import MyCommentList from "./MyCommentList";
import AddComment from './AddComment'

class MyCommentArea extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        isError: false,
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' + this.props.id,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2Y3NmI1MjViYjAwMThlZDA3ZWIiLCJpYXQiOjE3MDMxNjU4MTUsImV4cCI6MTcwNDM3NTQxNX0.mKuoXW7tenNwNxL9AV5BAsLcICUV0zAH2fIZgNokT0Q'
                    },
                }
            )
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, isLoading: false, isError: false })
            } else {
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            this.setState({ isLoading: false, isError: true })
        }
    }

    render() {
        return (
            <div>
                <MyCommentList commenti = {this.state.comments} />
                <AddComment asin={this.props.id}/>
            </div>
        )
    }
}
export default MyCommentArea