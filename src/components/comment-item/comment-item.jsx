import React ,{Component} from "react";
import  './commentItem.css'
import PropTypes from 'prop-types'




class CommentItem extends  Component{

     static propTypes ={
         comment : PropTypes.object.isRequired,
         deleteComment :PropTypes.func.isRequired,
         index :PropTypes.number.isRequired
    }

    handleClick =() =>{

         const{comment,deleteComment,index} = this.props
         if(window.confirm(`確定刪除${comment.username}？的評論嗎？`)){
                deleteComment(index)
         }
}
    render() {
        const {comment} = this.props
        return(
            <li className='list-group-item'>
                <div className='handle'>
                    <a href='javascript:;' onClick={this.handleClick}>刪除</a>
                </div>
                <p className='user'><span>{comment.username}</span><span>說：</span></p>
                <p className='centence'>{comment.content}</p>
            </li>
        )
    }
}
export default CommentItem