import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [data, setData] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Bob Smith' },
        // Add more data as needed
    ]);

    useEffect(() => {
        // Fetch data or perform any necessary actions here
        // Example: fetchData().then((result) => setData(result));
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    HelloThird
                </div>

                {/* Table */}
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            {/* Add more columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over your data to generate rows */}
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                {/* Add more cells as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Loader */}
            <Loader type='pacman' />
        </>
    );
}

export default Home;
