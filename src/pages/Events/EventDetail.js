import { useParams } from "react-router";


const EventDetailPage = props => {
    const params = useParams();

    return (
        <h1>Event Details of {params.eventId}</h1>
    );
}

export default EventDetailPage;