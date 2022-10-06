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

  
  render() {
    const { users, isListShown } = this.state;
    return (
      <>
        
        {isListShown ? (<>
          <AddUserForm addUser={this.addUser} />
          <UsersList users={users} userDelete={this.userDelete} changeJobStatus={this.changeJobStatus} />
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
