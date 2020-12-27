import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Sign in with your email and password</h2>
                <span>↬ FOR REGISTERED USERS</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;