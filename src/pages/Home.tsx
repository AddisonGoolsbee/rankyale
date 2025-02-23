import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addUser, getUsers } from "../api";

function App() {
    const [users, setUsers] = useState<{ id: string; netId: string }[]>([]);
    const [netId, setNetId] = useState("");

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    const handleAddUser = async () => {
        if (netId.trim()) {
            await addUser(netId);
            setUsers(await getUsers()); // Refresh user list
            setNetId(""); // Clear input
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Users List</h1>
            <Link to="/about" className="text-blue-500 underline">
                Go to About Page
            </Link>

            <input
                type="text"
                placeholder="Enter netId"
                value={netId}
                onChange={(e) => setNetId(e.target.value)}
                className="border p-2 m-2"
            />
            <button onClick={handleAddUser} className="bg-blue-500 text-white px-4 py-2">
                Add User
            </button>

            <h2 className="mt-4">Users:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.netId}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
