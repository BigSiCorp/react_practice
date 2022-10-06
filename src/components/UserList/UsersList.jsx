import { User } from "components/User/User";
import PropTypes from 'prop-types';

export const UsersList = ({ users, userDelete, changeJobStatus }) => {
    return (
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <User user={user} userDelete={userDelete} changeJobStatus={ changeJobStatus} />
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