
import Card from '../UI/Card'
import classes from './ListUser.module.css'
const ListUser = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default ListUser