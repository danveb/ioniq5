import { useState } from "react";
import axios from "axios"; 
import VehicleList from "./VehicleList"; 
import { getExteriorColor, getInteriorColor, getDriveTrain, getDeliveryDate } from "../constants/data"; 
import "./Form.scss"; 

const Form = () => {
    const [cars, setCars] = useState([])

    const [formData, setFormData] = useState({
        year: "2022", 
        model: "ioniq5", 
        zip: "", 
        radius: ""
    })

    const { year, model, zip, radius } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }))    
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await getAllVehicles()
    }

    async function getAllVehicles() {
        // initialize vehicles array to hold all data from API 
        const vehicles = []

        // axios GET hit endpoint 
        const response = await axios.get('https://ioniq5-backend.herokuapp.com/finder', { params: { zip: formData.zip, year: formData.year, model: formData.model, radius: formData.radius } })

        // iterate response object and push to vehicles array
        for (let info of response.data) {
            if (info.dealerInfo) {
                for (let dealer of info.dealerInfo) {
                    if (dealer.vehicles) {
                        for (let vehicle of dealer.vehicles) {
                            vehicles.push({
                                vin: vehicle.vin,
                                dealer: dealer.dealerNm,
                                trim: vehicle.trimDesc,
                                price: vehicle.price,
                                exteriorColor: getExteriorColor(vehicle.exteriorColorCd),
                                interiorColor: getInteriorColor(vehicle.interiorColorCd),
                                driveTrain: getDriveTrain(vehicle.drivetrainDesc),
                                deliveryDate: getDeliveryDate(vehicle.PlannedDeliveryDate), 
                                distance: dealer.distance
                            });
                        }
                    }
                }
            }
        }
        setCars(vehicles)
        return vehicles
    }

    return (
        <>
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="year">
                        Select Year
                    </label>
                    <select>
                        <option value={year}>2022</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="model">
                        Select Model
                    </label>
                    <select>
                        <option value={model}>IONIQ 5</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="zip">
                        Enter US Zipcode
                    </label>
                    <input 
                        id="zip"
                        name="zip"
                        value={zip}
                        placeholder="5-digit Zip"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="radius">
                        Enter Radius
                    </label>
                    <input 
                        id="radius"
                        name="radius"
                        value={radius}
                        placeholder="Radius"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                        <button type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
        { cars.length === 0 ? "" : <VehicleList cars={cars} /> }
        </>
    )
}

export default Form