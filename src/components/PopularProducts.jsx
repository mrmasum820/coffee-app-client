import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


const PopularProducts = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)
    return (
        <div className="py-10 px-4">
            <div className="text-center">
                <h4>--- Sip & Savor ---</h4>
                <h2 className="text-[#331A15] text-4xl font-bold my-4">Our Popular Products</h2>
                <Link to="/addCoffee">
                    <button className="btn btn-warning btn-sm">Add Coffee</button>
                </Link>
            </div>
            <div className='max-w-screen-lg mx-auto grid md:grid-cols-2 gap-4 mt-10'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;