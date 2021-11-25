import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()
    const handleAddUser = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                content: "Please enter a valid name and age (non-empty value)"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid input",
                content: "Please enter value age > 0"
            })
            return;
        }
        props.onListUser(enteredUserName, enteredAge)
        console.log(enteredUserName, enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
    }
    const handleInputUserName = (e) => {
        setEnteredUserName(e.target.value)
    }
    const handleInputAge = (e) => {
        setEnteredAge(e.target.value)
    }
    const handleError = () => {
        setError('')
    }
    return (
        <div>
            {error && <ErrorModal onConfirm={handleError} title={error.title} content={error.content} />}
            <Card className={classes.input} >
                <form onSubmit={handleAddUser}>
                    <label htmlFor='username'>Username</label>
                    <input
                        value={enteredUserName}
                        type="text"
                        id="username"
                        onChange={handleInputUserName}
                    />
                    <label htmlFor='age'>Age</label>
                    <input
                        value={enteredAge}
                        type="number"
                        id="age"
                        onChange={handleInputAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser