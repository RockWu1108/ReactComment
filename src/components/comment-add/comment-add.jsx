import React ,{Component} from "react";

import PropTypes from 'prop-types'
class CommentAdd extends  Component{

    static  propTypes = {
        addComment : PropTypes.func.isRequired
    }

    state ={
        username:'',
        content:''
    }
    handleSubmit= () =>{
        //收集數據,
        const comment = this.state
        //更新狀態
        this.props.addComment(comment)
        //刪除狀態
        this.setState({
            username :'',
            content :''
        })

    }

    handleUserChange = (event)=>{
        const username = event.target.value
        this.setState({username})
    }

    handleContentChange = (event)=>{
        const content = event.target.value
        this.setState({content})
    }


    render() {
        const{username,content} = this.state

        return(
            <div className='col-md-4'>
                <form className='form-horizontal'>
                    <div className='form-group'>
                    <label>用戶名</label>
                    <input type='text' className='form-control' placeholder='用戶名' value={username}
                    onChange={this.handleUserChange}/>
                    </div>
                 <div className='form-group'>
                     <label>評論內容</label>
                     <textarea className='form-control' rows="6" placeholder="評論內容" value={content}
                     onChange={this.handleContentChange}></textarea>
                 </div>
                    <div className='form-group'>
                        <div className='col-sm-offset-2 col-sm-10'>
                            <button type='button' className='btn btn-default pull-right' onClick={this.handleSubmit}>送出</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
export  default  CommentAdd