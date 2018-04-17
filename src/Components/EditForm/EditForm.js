import React from 'react';

import Button from '../../UI/Button/Button';
import calsses from './EditForm.css'

const EditForm=(props) => {
    return (
        <form onSubmit={props.onSubmit}
              className={calsses.Form}>
            <div>
            <label>
                <input name="title"
                       type="text"
                       autoFocus
                       placeholder="title"
                       value={props.title}
                       onChange={props.onInput}/>
                </label>
                <label>
                    <textarea name="description"
                          placeholder="description"
                          value={props.description}
                          onChange={props.onInput}
                          style={{width: "79%" }}/><br/>
                </label>
                <label>
                <Button >Create</Button>
                </label>
            </div>
        </form>)
}

export default EditForm;