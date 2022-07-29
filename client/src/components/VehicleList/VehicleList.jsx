import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./VehicleList.scss"; 

const VehicleList = ({ cars }) => {
    return (
        <div className="vehicle-list">
            {cars.length !== 0 ? (
            <>
                <h3>{cars.length} Vehicle(s) Available</h3>
                <h3>* Interior Color Code TBA</h3>
                <Paper className="container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Exterior</TableCell>
                            <TableCell>Interior (*)</TableCell>
                            <TableCell>Trim</TableCell>
                            <TableCell>Drivetrain</TableCell>
                            <TableCell>MSRP</TableCell>
                            <TableCell>Delivery</TableCell>
                            <TableCell>Dealer</TableCell>
                            <TableCell>Distance</TableCell>
                            <TableCell>VIN</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {cars.map(({ exteriorColor, interiorColor, trim, driveTrain, price, deliveryDate, dealer, distance, vin }) => (
                        <TableRow key={vin}>
                        <TableCell component="th" scope="row">
                            {exteriorColor}
                        </TableCell>
                        <TableCell>{interiorColor}</TableCell>
                        <TableCell>{trim}</TableCell>
                        <TableCell>{driveTrain}</TableCell>
                        <TableCell>{price}</TableCell>
                        <TableCell>{deliveryDate}</TableCell>
                        <TableCell>{dealer}</TableCell>
                        <TableCell>{distance} mi</TableCell>
                        <TableCell>{vin}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </Paper>
            </>
        ) : null}
        </div>
    )
}

export default VehicleList