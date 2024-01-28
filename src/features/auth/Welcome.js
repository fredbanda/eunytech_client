import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`EunnyTech: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome Back {username}!</h1>

            <p><Link to="/dash/notes" className="text-decoration-none">View Repair Notes</Link></p>

            <p><Link to="/dash/notes/new" className="text-decoration-none">Add New Repair Notes</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users" className="text-decoration-none">View Users </Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new" className="text-decoration-none">Add New User</Link></p>}

        </section>
    )

    return content
}
export default Welcome