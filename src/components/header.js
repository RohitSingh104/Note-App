import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    let styleSearchIcon = { marginLeft:80 }
    return (
        <div className="header">
            <div className="searchInput">
                <SearchIcon  style={styleSearchIcon}/>
                <input type="search" placeholder="Search" className="search"/>
            </div>
            <div className="welcome-logo">
                <span>
                    <img id="avatar" src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" alt="" />
                </span>
                <span>
                    <p id="welcome">Hello , Rohit !</p>
                </span>
                <span>
                    <img id="notif-logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALleCUXegmGtgiOuEWbVjvy1Aag_Xxyms-g&usqp=CAU" alt=""/>
                </span>
                
            </div>
        </div>
    )
}

export default Header;
