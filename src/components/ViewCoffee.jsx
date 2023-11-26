import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ViewCoffee = () => {
    const coffee = useLoaderData()
    const { name, quantity, supplier, taste, category, details, photo } = coffee;

    return (
        <>
            <div className="max-w-screen-lg mx-auto my-10 p-4">
                <Link to="/" className="flex items-center"><FaArrowLeft /><h3>Back to home</h3></Link>
                <div className="md:flex justify-center items-center">
                    <div>
                        <img src={photo} alt="photos" />
                    </div>
                    <div>
                        <h2 className="text-2xl text-[#331A15] font-bold">{name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                        <p>Category: {category}</p>
                        <p>Details: {details}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ViewCoffee;