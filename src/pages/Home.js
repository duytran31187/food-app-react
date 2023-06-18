import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <section>
            <h1>Home page</h1>
            <ul>
                <li>Home</li>
                <li>
                    <Link to='/products'> Product pages</Link>
                </li>
            </ul>
        </section>
    );
}

export default HomePage;