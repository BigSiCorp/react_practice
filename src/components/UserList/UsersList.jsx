import { User } from "components/User/User";
import PropTypes from 'prop-types';

export const UsersList = ({ users, userDelete, changeJobStatus,showUpdateForm, userToUpdate,updateUser }) => {
    return (
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <User updateUser={ updateUser} userToUpdate={userToUpdate} showUpdateForm={ showUpdateForm} user={user} userDelete={userDelete} changeJobStatus={ changeJobStatus} />
                    </li>
                ))}
            </ul>
       );
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
}