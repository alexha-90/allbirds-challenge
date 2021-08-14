
interface Props {
    isAuthenticated: boolean
}

function LoginSuccessPage(props: Props) {
    if (props.isAuthenticated) {
        return (
            <div className="successful-login-page">
                <h1>You have successfully logged in!</h1>
            </div>
        )
    }
    return null;
}

export default LoginSuccessPage;
