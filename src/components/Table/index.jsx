import React from "react";
// Profile[],Columns[];
function Table(props){

    return <table className="table-auto">
        <thead> 
            <tr> 
                <th>Name</th>
                <th>Address</th>
                <th>Company</th>
                <th> DOB</th>
            </tr>
        </thead>
        <tbody>
            {props?.profileList?.users?.map?.((profile,index)=>{
                return <tr>
                    <td>{profile.firstName}{profile.lastName}
                    </td> 
                    <td>
                        {profile.address.address}{profile.address.city}
                    </td>
                    <td>
                        {profile.company.name}
                    </td>
                    <td>
                        {profile.birthDate}
                    </td>
                     </tr>
            })}
        </tbody>


    </table>
}

export default Table