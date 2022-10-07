import { Component } from 'react';
import { User } from "./User/User";
import { UsersList } from "./UserList/UsersList";
import { users } from "data/users"
import { Section } from "./Section/Section";
import { Button } from './Button';
import { nanoid } from 'nanoid';
import { AddUserForm } from './Form/AddUserForm';

export class App extends Component {
  state = {
    users,
    isListShown: false,
    userToUpdate: {},
  };

  clickHandler = () => {
    this.setState({ isListShown: true });
  };

  userDelete = (userId) => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId)
    }))
  }

  changeJobStatus = (userId) => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
      
        if (user.id === userId) {
          return {
            ...user,
            hasjob: !user.hasjob,
          }
        }
        return user
        
      }),
    }));
  }
  
  addUser = (data) => {
    const newUser = {
      ...data,
      hasJob: false,
      id: nanoid(),
    }
    this.setState(prevState => ({
      users:[...prevState.users, newUser]
    }))
  }

  showUpdateForm = (id) => {
    const userToUpdate = this.state.users.find(user => user.id === id)
    
    this.setState({
      userToUpdate
    })
  }

  updateUser = (user) => {
    const userIndex = this.state.users.findIndex(u => u.id === user.id)
    const arrUsersToChange = [...this.state.users];
    arrUsersToChange.splice(userIndex, 1, user);
    this.setState({
      users: arrUsersToChange,
      userToUpdate: {}
    })
  }

  render() {
    const { users, isListShown, userToUpdate } = this.state;
    return (
      <>
        
        {isListShown ? (<>
          <AddUserForm addUser={this.addUser} />
          <UsersList updateUser={ this.updateUser} userToUpdate={userToUpdate} showUpdateForm={ this.showUpdateForm} users={users} userDelete={this.userDelete} changeJobStatus={this.changeJobStatus} />
        </>) : (
          <Button
            type="button"
            text="Show users List"
            clickHandler={this.clickHandler}
          />
        )}
      </>
    );
  }
}
