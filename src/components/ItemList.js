import React from 'react'

export default function ItemList(props) {
    return (
        <li className=' ItemList ItemList_container'>
            <div className='ItemList_text'>
                <p>{props.text}</p>
            </div>
            <div className=' ItemList ItemList_bt_container'>
                <div className='ItemList_bt ItemList_bt_delete'>
                    <i className='fa fa-trash' aria-hidden='true'></i>
                </div>
                <div className=' ItemList_bt ItemList_bt_complete'>
                    <i className='fa fa-check' aria-hidden='true'></i>
                </div>
            </div>
        </li>
    )
}
