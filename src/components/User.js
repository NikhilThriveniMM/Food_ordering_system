import { useState } from "react";

const User = (props) => {
    const {name,location,email} = props;
    const [count] = useState(0);
    return <div>
        <h1>Name:  {name} (function)</h1>
        <h1>Count: {count}</h1>
        <h2>Location: {location}</h2>
        <p>Email: {email}</p>
    </div>
}
export default User;