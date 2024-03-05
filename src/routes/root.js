import { Link } from 'react-router-dom';
import jsonData from '../transformer.json';
export default function Root() {
    const products = Object.values(jsonData.items.items.data);

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        {products.map((product, index) => (
                            <li key={index}>
                                <Link to={`/product/${product.code}`}>{product.nameSmall}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
}
