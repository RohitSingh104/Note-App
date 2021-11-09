import React from 'react'
import { useSelector } from 'react-redux';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './itemList.css';
const ItemList = () => {
    const state = useSelector((state) => state.addNoteReducer.list);
    let iconStyle = {color:"blue", marginLeft:10};
    return (
        <div className="item-list">
            
                {
                    state.map((currVal , index) =>{
                        return (
                            <div className="list-wrapper">
                                <div className="date-list">
                                    <p id="date">Date : {currVal.date}</p>
                                </div>
                                <div className="title-list">
                                    <div>
                                        <FiberManualRecordIcon style={iconStyle}/>
                                    </div>
                                    <div id="title">{currVal.title}</div>
                                </div>
                                <div className="desc-list">
                                    <p id="desc">{currVal.desc}</p>
                                </div>
                            </div>
                        )
                    } )
                }
        
           







            
        </div>
    )
}

export default ItemList;
