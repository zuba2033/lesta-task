import './ErrorMessage.scss';

interface iErrorMessage {
    onRequest: () => void,
    clearError: () => void
}

const ErrorMessage = (props : iErrorMessage) => {

    const { clearError, onRequest } = props;

    return (
        <div className='error'>
            <h2 className='error-title'>Something goes wrong!</h2>
            <button  
                className='error-button'
                onClick={() => {
                    clearError();
                    onRequest();
                 }}>
                Try again
            </button>
        </div>
    )
}

export default ErrorMessage;