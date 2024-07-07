// import User from "./user.js";
// import UserClass from "./userClass";

const Help = () => {
    return (
        <div className="help-outer text-center">
            <h1 className="font-bold p-4">Help section</h1>
            <form className="p-4 bg-green-100 w-1/3 m-auto rounded-2xl">
                <div className="m-4">
                    <label className="p-10">Name: </label>
                <input type="text" placeholder="Enter your name"></input>
                </div>
                <div>
                                    <label className="p-3.5 text-center">Description: </label>
                <textarea placeholder="Enter your problems">
                </textarea>
                </div>
                <div className="m-6">
                    <button type="submit" className="p-2 bg-slate-300 m-4 rounded-lg">SUBMIT</button>
                    <button type="submit" className="p-2 bg-slate-300 rounded-lg">CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default Help;