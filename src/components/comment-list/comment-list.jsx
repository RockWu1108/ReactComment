import React ,{Component} from "react"
import './commentList.css'

import PropTypes from 'prop-types'
import CommentItem from "../comment-item/comment-item";
class CommentList extends  Component{


//型別檢查
    static propTypes = {
        comments : PropTypes.array.isRequired,
        deleteComment : PropTypes.func.isRequired
    }

    render() {

        const{comments,deleteComment} = this.props
        //計算是否顯示
        const  display = comments.length===0 ? 'block' :'none'
        return(
            <div>
                <div className='col-md-8'>
                    <h3 className="reply">評論回覆</h3>
                    <h2 style={{display}}>暫無評論，點擊添加</h2>
                    <ul className='list-group'>
                        {
                            comments.map((comment , index) => <CommentItem comment={comment} key={index} deleteComment={deleteComment} index = {index}/>)
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
// CommentList.prototype={
//     comments : PropTypes.array.isRequired
// }
export  default  CommentList
