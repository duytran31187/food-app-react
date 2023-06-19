const { Link } = require("react-router-dom");


const DUMMY_EVENTS = [
    {
        id:'1',
        name: 'event 1',
    },
    {
        id:"2",
        name: "event 2",
    }
]   
const EventsPage = props => {
    return (
        <section>
            <h1>Events Page</h1>
            <ul>
                {
                    DUMMY_EVENTS.map(event => (
                        <li key={event.id}>
                            <span>{event.name}</span>
                            <Link to={`/events/${event.id}/edit`}>Edit</Link> |
                            <Link to={`/events/${event.id}`}>View</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};
export default EventsPage;