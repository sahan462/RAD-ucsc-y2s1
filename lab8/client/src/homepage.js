function HomePage() {
    return (
        <div className= "question2">
            <div className="dataForm">
                <h1>Form</h1>
                <form >
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                    <label htmlFor="lname">password</label>
                    <input type="password" name="pwd" placeholder="Your password.."/>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>

            <div className="displayData">
                <h3>Kohomada</h3>
            </div>
        </div>

    );
}

export default HomePage;