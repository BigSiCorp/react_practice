import { Component } from "react";
import PropTypes from 'prop-types';

export class AddUserForm extends Component {
    static propTypes = {
        addUser: PropTypes.func.isRequired,
    }
    
    state = {
        name: '',
        email: '',
    }

    handleNameInput = ({ target: { name, value } }) => { 
                
        this.setState({
            [name]: value
        })
    }

onSubmit = (e) => {
    e.preventDefault()

    this.props.addUser(this.state);
    this.onFormReset();
    }
    
    onFormReset = () => {
        this.setState ({
            name: '',
            email: ''
        })
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