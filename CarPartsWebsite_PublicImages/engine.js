document.addEventListener("DOMContentLoaded", () => {
    const engines = [
        { type: "Inline", fuel: "Petrol", power: 120, efficiency: 15, cylinders: 4, ignition: "Spark Ignition" },
        { type: "Inline 6", fuel: "Petrol", power: 300, efficiency: 14, cylinders: 6, ignition: "Spark Ignition" },
        { type: "V-Type", fuel: "Diesel", power: 200, efficiency: 12, cylinders: 6, ignition: "Compression Ignition" },
        { type: "VR-Type", fuel: "Petrol", power: 150, efficiency: 10, cylinders: 3, ignition: "Spark Ignition"   },
        { type: "Boxer", fuel: "Petrol", power: 150, efficiency: 14, cylinders: 4, ignition: "Spark Ignition" },
        { type: "Rotary", fuel: "Petrol", power: 180, efficiency: 10, cylinders: 0, ignition: "Spark Ignition" },
        { type: "W-Type", fuel: "Petrol", power: 400, efficiency: 20, cylinders: 12, ignition: "Spark Ignition" },
        { type: "Electric", fuel: "Electric", power: 300, efficiency: "N/A", cylinders: "N/A", ignition: "Electric Motor" }
    ];

    const tableBody = document.querySelector("#engine-table tbody");
    const tableHead = document.querySelector("#engine-table thead tr");

    // Update the header to include "Number of Cylinders" and "Ignition Type"
    let newHeaderCylinders = document.createElement("th");
    newHeaderCylinders.textContent = "Number of Cylinders";
    tableHead.appendChild(newHeaderCylinders);

    let newHeaderIgnition = document.createElement("th");
    newHeaderIgnition.textContent = "Ignition Type";
    tableHead.appendChild(newHeaderIgnition);

    engines.forEach(engine => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${engine.type}</td>
            <td>${engine.fuel}</td>
            <td>${engine.power}</td>
            <td>${engine.efficiency}</td>
            <td>${engine.cylinders}</td>
            <td>${engine.ignition}</td>
        `;
        tableBody.appendChild(row);
    });
});
