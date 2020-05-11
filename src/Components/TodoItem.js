import React from 'react'

export default function TodoItem(props) {
    // const styles = {
    //     backgroundColor: '#909009',
    //     fontSize: '20px',

    // }
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>

    )
}
