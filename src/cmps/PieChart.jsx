import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

import { utilService } from "../services/util.service"

ChartJS.register(ArcElement, Tooltip, Legend)

export function PieChart({ expenses }) {
    let categorysData = {}
    expenses.forEach((expense) => {
        if (!categorysData[expense.category]) {
            categorysData[expense.category] = expense.price
        } else {
            categorysData[expense.category] += expense.price
        }
    })

    const data = {
        labels: Object.entries(categorysData).map(
            ([key, value]) => `${key}: ${value}`,
        ),
        datasets: [
            {
                data: [...Object.values(categorysData)],
                backgroundColor: utilService.chartColors(),
                borderWidth: 3,
                borderColor: "#fff",
            },
        ],
    }

    const options = {
        plugins: {
            responsive: true,
            legend: "right",
            tooltip: { callbacks: { label: () => "" } },
        },
    }

    return (
        <div className='pie-chart'>
            <Pie
                data={data}
                options={options}
            />
        </div>
    )
}
