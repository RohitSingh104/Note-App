import React from 'react';
import { useState } from 'react';
import './headerMenu.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/index';
const HeaderMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [date , setDate] = useState('');
    const [title , setTitle] = useState('');
    const [desc , setDesc] = useState('');
    let dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeDate = (e) =>{
        const value = e.target.value;
        const resDate = value.split("-").reverse().join("-")
        setDate(resDate);
    }

    const handleChangeTitle = (e) =>{
        setTitle(e.target.value);
    }
    
    const handleChangeDesc = (e) =>{
        setDesc(e.target.value);
    }

 

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="header-menu">
            <div className="menu-list">
                <div className="all">
                    All
                </div>
                <div className="projects">
                    Projects
                </div>
                <div className="Business">
                    Business
                </div>
                <div className="Personal">
                    Personal
                </div>
            </div>
            <div className="add-note">
                <div className="add-logo">
                    <img id="add-logo" src="https://pngimage.net/wp-content/uploads/2018/05/add-logo-png-5.png" alt="" />
                </div>
                <div className="add-notes">
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                        Add a note
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 2 }}>
                            <div className="addNoteWrapper">    
                                <div className="date">
                                    <input type="date" onChange={handleChangeDate} value={date}/>
                                </div>   
                               <div className="title">
                                    <input type="textarea" placeholder="title" onChange={handleChangeTitle} value={title}/>
                                </div>
                                <div className="description">
                                    <input type="textarea" placeholder="Description" onChange={handleChangeDesc} value={desc}/>
                                </div>
                                <div className="submit-btn">
                                    <input type="submit" onClick={()=>dispatch(addNote(date,title,desc),setDate(''),setTitle(''),setDesc(''))}/>
                                </div>
                            </div>
                        </Typography>
                    </Popover>
                </div>

            </div>
        </div>
    )
}

export default HeaderMenu;
