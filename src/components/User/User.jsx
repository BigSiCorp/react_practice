import PropTypes from 'prop-types';
import { Paragraf, Span } from './User.styled';
import { UpdateUserForm } from '../Form/UpdateUserForm';

export const User = ({ user: { name, email,id,hasjob },showUpdateForm, userDelete, changeJobStatus, userToUpdate,updateUser }) => {
    const isOrange = email.includes('biz');
    
    return (
        <>
            <Paragraf>Name:<Span>{name}</Span></Paragraf>
            <Paragraf>Email:<Span isOrange = {isOrange} >{email}</Span></Paragraf>
            <Paragraf> HasJob: <span>{ hasjob.toString() }</span></Paragraf>
            <button onClick={() => userDelete(id)}>Delete</button>
            <button onClick={() => changeJobStatus(id)}>Change Job Status</button>
            <button onClick={() => showUpdateForm(id)}>Update user</button>
            {userToUpdate && userToUpdate.id === id && <UpdateUserForm updateUser={ updateUser} userToUpdate={userToUpdate } />}
        </>
    );
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
    }).isRequired
}