import React from "react";
// import GIT_URL from "../utils/constant";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0,
        }

        this.state = {
            userInfo : {
                name : "Default user",
                location : "Default location",
                login : "Default login"
            }
        }
        // console.log(this.state.count);
    };

    async componentDidMount(){
        const data = await fetch(GIT_URL);
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            userInfo : jsonData
        })
    }
   render() {
        // const {name,location,email} = this.props;
        // const {count} = this.state;
        const {name,login,location,html_url} = this.state.userInfo;
        // console.log(name,location,email) ;

         return (
            <div>
                <p><strong>Name: </strong> {login} </p>
                 {/* <h1>count: {count}</h1>
                 <button className="increment" type="button" onClick={()=>{
                    this.setState({
                        count : this.state.count + 1,
                    })
                    // console.log(count);
                 }}>count increase</button> */}
                {/* <h1>Hello plz render</h1> */}
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Git URL: </strong> {html_url}</p>
            </div>
        );
    };    
}
export default UserClass;