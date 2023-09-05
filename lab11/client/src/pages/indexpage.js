import { Link } from "react-router-dom";

function IndexPage() {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-8">Tutorial 6</h1>
                <ol className="list-decimal pl-4 space-y-4">
                    <li>
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <Link to="q1" className="text-blue-500 hover:underline">
                                <p className="text-lg font-semibold">
                                    Develop a React MERN Stack App to store the details of your Second Year Group Project team members. You are encouraged to develop the design according to your creativity.
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <Link to="q2" className="text-blue-500 hover:underline">
                                <p className="text-lg font-semibold">
                                    a) Create a login form for a Node application using Passport.js.
                                </p>
                                <p className="text-lg font-semibold">
                                    b) Use the session authentication strategy with Passport.js.
                                </p>
                                <p className="text-lg font-semibold">
                                    c) Connect Passport to a MongoDB database to store user data.
                                </p>
                                <p className="text-lg font-semibold">
                                    d) Authorize only logged-in users to access a page.
                                </p>
                            </Link>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default IndexPage;
