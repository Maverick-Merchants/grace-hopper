import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
    const { error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formName = evt.target.name;
        const username = evt.target.username.value;
        const password = evt.target.password.value;
        dispatch(authenticate({ username, password, method: formName }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} name={name}>
                <div class="mb-3">
                    <label htmlFor="username" class="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="username"
                        name="username"
                    />
                </div>
                <div class="mb-3">
                    <label htmlFor="password" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                    />
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">
                        {displayName}
                    </button>
                </div>
                {error && <div> {error} </div>}
            </form>
        </div>
    );
};

export default AuthForm;
