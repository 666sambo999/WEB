import React from "react";

class User extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("UserConstrutor");
    }
    componentDidMount()
    {
        console.log("UserDipMount");
    }
    componenetDidUpdate()
    {
        console.log("UserDipUpdate");
    }
    componentWillUnmount()
    {
        console.log("UserWilandMount");
    }
    render()
    {
        return(
            <>
                <div>
                    <ul>Name: Anna</ul>
                    <ul>Email: macha@com</ul>
                    <ul>tel: +7 900 393 20 40</ul>   
                </div>
            </>
            
        );
    }
}
export default User;