import React from 'react';
import StaffLogin from '../../components/StaffLogin/StaffLogin';
import ManageGuest from '../../components/ManageGuests/ManageGuests';


const Staff = () => {
    return (
        <div className="staff-page">

            <StaffLogin/>
            <ManageGuest/>
        </div>
    )
}

export default Staff;