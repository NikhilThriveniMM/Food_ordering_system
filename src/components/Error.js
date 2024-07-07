// import errorImg from "../../images/error-1024.webp"
import err1 from "../../images/error-1024.webp";
import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const {status,statusText,data,error} = err;
    return (
        <div className="error-page">
            <img  className="error-img" src={err1} alt="red"></img>
            <h2>{status+" "+statusText}</h2>
            <h3 className="error-info">{data}</h3>
            <p>{error?.message}</p>
            <p>{error?.stack}</p>
            <button type="button" className="error-btn">Show saved copy</button>
        </div>
    );
}

export default Error;