import "./VehicleList.scss"; 

const VehicleList = ({ cars }) => {
    return (
        <div className="vehicle-container">
            <p>{cars.length} Vehicle(s) Available</p>
            <p>*Interior Color Code to be Updated</p>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Exterior</th>
                        <th>Interior (*)</th>
                        <th>Trim</th>
                        <th>Drivetrain</th>
                        <th>MSRP</th>
                        <th>Delivery</th>
                        <th>Dealer</th>
                        <th>Distance</th>
                        <th>VIN</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, idx) => (
                        <tr key={idx}>
                            <td>{car.exteriorColor}</td>
                            <td>{car.interiorColor}</td>
                            <td>{car.trim}</td>
                            <td>{car.driveTrain}</td>
                            <td>{car.price}</td>
                            <td>{car.deliveryDate}</td>
                            <td>{car.dealer}</td>
                            <td>{car.distance.toFixed(0)} mi</td>
                            <td>{car.vin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default VehicleList