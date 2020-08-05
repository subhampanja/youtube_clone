import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon className="header_menu"/>
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube" />
                </Link>
            </div>
            <div className="header_input">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_input_btn" />
                </Link>
            </div>
            <div className="header_icon">
                <VideoCallIcon className="header_icon_btn" />
                <AppsIcon className="header_icon_btn" />
                <NotificationsIcon className="header_icon_btn" />
                <Avatar
                    className="header_icon_btn"
                    alt="subham panja"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQG8Vds4s1uS1A/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=x5Ict6O3jyxI1IskBEjq71FbhztUzhJhlCCDeEHDyEw"
                />
            </div>
        </div>
    )
}

export default Header
