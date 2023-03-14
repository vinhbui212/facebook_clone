import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';

function Sidebar({ user }) {
    return (
        <div className="sidebar">
            <SidebarRow avatar ImageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWMEcJG3lvDgMNB2Hlv511Lfmde3XI0zZFbl4BX9u8tv0Vm8RmitkW9brLNbh4HetOn8&usqp=CAU" title={user?.displayName} />
            <SidebarRow selected ImageLink="https://cdn-icons-png.flaticon.com/512/1946/1946355.png" title="News Feed" />
            <SidebarRow ImageLink="https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-HD-Image.png" title="Messenger" />
            <SidebarRow ImageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDdeRDVIvIQMyzybHQh-6WNroH0mqfJM9xicoGqEHMQ&s" title="Watch" />
            <h3>Explore</h3>
            <SidebarRow ImageLink="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/10/Screen-Shot-2021-10-28-at-3.12.44-PM.png?fit=1568%2C753&ssl=1" title="Welcome" />
            <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/2750/2750767.svg" title="COVID-19 Information" />
            <SidebarRow ImageLink="https://cdn-icons-png.flaticon.com/512/5692/5692284.png" title="Pages" />
            <SidebarRow ImageLink="https://www.clipartmax.com/png/middle/73-735561_facebook-events-by-omega-ecommerce-plugins-for-online-facebook-events-icon.png" title="Events" />
            <SidebarRow ImageLink="https://w7.pngwing.com/pngs/603/650/png-transparent-computer-icons-facebook-private.png" title="Groups" />
        </div>
    )
}

export default Sidebar
