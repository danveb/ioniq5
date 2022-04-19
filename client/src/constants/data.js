import ioniq5 from "../assets/ioniq5.jpeg"; 

export const navLinks = [
    {
        id: 1, 
        name: "Finder", 
        url: "/finder"
    }
];

export const hero = [
    {
        id: 1, 
        img: ioniq5, 
        title: "Lookup Tool", 
        description: "Lookup"
    }
]; 

export const exteriorColorCodes = {
    T5R: "Shooting Star",
    C5G: "Cyber Gray",
    SAW: "Atlas White",
    MZH: "Phantom Black",
    M9U: "Digital Teal",
    U3P: "Lucid Blue",
}

export const interiorColorCodes = {
    YGN: "YGN",
    NNB: "NNB",
    VKE: "VKE",
}

export const driveTrainCodes = {
    "REAR WHEEL DRIVE": "RWD",
    "ALL WHEEL DRIVE": "AWD",
}

export const getExteriorColor = (colorCode) => {
    if (colorCode in exteriorColorCodes) {
        return exteriorColorCodes[colorCode]
    }
    return "Unknown"
}

export const getInteriorColor = (colorCode) => {
    if (colorCode in interiorColorCodes) {
        return interiorColorCodes[colorCode]
    }
    return "Unknown"
}

export const getDriveTrain = (driveTrainCode) => {
    if (driveTrainCode in driveTrainCodes) {
        return driveTrainCodes[driveTrainCode]
    }
    return "Unknown"
}

export const getDeliveryDate = (deliveryDate) => {
    let isoDate = deliveryDate 
    let d = new Date(isoDate).toLocaleDateString('en-US') 
    if(d === '12/31/1969') return 'N/A'
    return d
}