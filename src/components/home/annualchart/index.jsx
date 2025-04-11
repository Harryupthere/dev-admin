import React from "react";
import Chart from "react-apexcharts";
import './annualchart.scss'
const AnnualChart = () => {
    const chartOptions = {
        series: [
            {
                name: "series1",
                data: [80, 40, 28, 51, 42, 109, 100, 90, 85, 75, 60, 55],
            },
            {
                name: "series2",
                data: [60, 32, 45, 32, 34, 52, 41, 38, 49, 60, 70, 65],
            },
        ],
    
        options: {
            chart: {
                height: 350,
                type: "bar", // ← changed from "area" to "bar"
                toolbar: {
                    show: false,
                },
            },
            colors: ["#4679BD", "#F68C1E"],
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    horizontal: false, // set to true for horizontal bars
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            xaxis: {
                categories: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                ],
                labels: {
                    show: true,
                    rotate: 0,
                    style: {
                        colors: "#8A92A6",
                        fontSize: "var(--font_16)",
                        fontFamily: 'var(--Quicksand)',
                    },
                },
                tickPlacement: "on",
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#8A92A6",
                        fontSize: "var(--font_16)",
                        fontFamily: 'var(--Quicksand)',
                    },
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "center",
                fontSize: "var(--font_16)",
                fontFamily: 'var(--Quicksand)',
                labels: {
                    colors: "#8A92A6",
                    fontSize: "var(--font_16)",
                    fontFamily: 'var(--Quicksand)',
                },
            },
        },
    };
    

    return (
        <>
            <div className="salechart theme-card">
                <div className="header">
                    <div className="price-header">
                        <h2 className="price">USD 3,98,982</h2>
                        <h3 className="grey_label">Annual Sales</h3>
                    </div>
                    <div className="date">
                        <h3 className="grey_label">Yesterday</h3>
                    </div>
                </div>
                <Chart options={chartOptions.options} series={chartOptions.series} type="bar" height={350} />
            </div>
        </>
    );
};

export default AnnualChart;
