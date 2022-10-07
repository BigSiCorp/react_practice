import { Component } from "react";
import PropTypes from 'prop-types';


export class UpdateUserForm extends Component {
    // static propTypes = {
    //     addUser: PropTypes.func.isRequired,
    // }
    
    state = {
        name: this.props.userToUpdate.name,
        email: this.props.userToUpdate.email,
    }

    handleNameInput = ({ target: { name, value } }) => { 
                
        this.setState({
            [name]: value
        })
    }

onSubmit = (e) => {
    e.preventDefault()

    this.props.updateUser({...this.props.userToUpdate, ...this.state});
}
    
    render() {
        const { name, email} = this.state
        return (

            <>
                <form onSubmit={ this.onSubmit}>
                    <label>
                        <span>Name</span>
                        <input type="text" name="name" value={name} onChange={ this.handleNameInput} />
                    </label>

                    <label>
                        <span>Email</span>
                        <input type="text" name="email" value={email} onChange={ this.handleNameInput} />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </>

        )
    }

}