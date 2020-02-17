import React ,{Component} from "react";
import CommentList from '../comment-list/comment-list'
import CommentAdd from '../comment-add/comment-add'
class App extends  Component{

    // constructor(props) {
    //     super(props)
    //     this.state={
    //         comments:[
    //         { username:'Tom',content : "React is good"},
    //          {username: 'jack',content: 'react is difficult'}
    //
    //         ]
    //     }
    // }
    state= {
        comments:[
            {username:'Tom',content : "React is good"},
            {username: 'jack',content: 'react is difficult'}
        ]
    }
    //添加評論
    addComment = (comment) =>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState(comments)
    }


    //刪除評論
    deleteComment = (index)=>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})

    }
    render() {
        const {comments} = this.state
        return(
            <div>
                <header className='site-header jumbotron'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-12'>
                                <h1>請求對react comment</h1>

                            </div>
                        </div>
                    </div>
                </header>
                <div className='container'>
                    <CommentAdd addComment ={this.addComment} />
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>

                </div>

            </div>
        )
    }
}
export  default  App