import React from "react"
import {
  chartData,
  chartOptions,
  DashboardData,
  DashboardDataTypes,
} from "../data/DashboardData"
import DashboardCard from "../components/DashboardCard"
import { FaUsers, FaChartLine, FaTasks } from "react-icons/fa"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Chart } from "react-chartjs-2"
// import { CustomToast } from "../components/Toast"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const cardData = [
  {
    id: 1,
    title: "Total Users",
    value: "1,234",
    icon: <FaUsers className='text-4xl text-blue-500' />,
  },
  {
    id: 2,
    title: "Revenue",
    value: "$12,345",
    icon: <FaChartLine className='text-4xl text-green-500' />,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: "764",
    icon: <FaTasks className='text-4xl text-orange-500' />,
  },
]


const Dashboard: React.FC = () => {
  return (
    <div className='p-6 bg-gray-100 min-h-screen mb-20 rounded-2xl'>
      <h2 className='text-3xl font-bold mb-6 uppercase text-gray-700'>
        Dashboard
      </h2>

      <div className='grid grid-cols-1 mb-12 mt-10 md:grid-cols-3 gap-6'>
        {DashboardData.map((data: DashboardDataTypes, index: number) => (
          <DashboardCard data={data} key={index} />
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-14'>
        {cardData.map((card) => (
          <div
            key={card.id}
            className='bg-white cursor-pointer shadow-md rounded-lg p-6 flex items-center justify-between hover:shadow-xl transition duration-300'>
            <div>
              <h4 className='text-gray-500 text-lg font-semibold'>
                {card.title}
              </h4>
              <p className='text-2xl font-bold text-gray-800'>{card.value}</p>
            </div>
            {card.icon}
          </div>
        ))}
      </div>

      <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4 font-lexend'>
          Analytics Overview
        </h3>
        <div className='relative h-64'>
          <Chart type='line' data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* <div className='buttons-container flex justify-around'>
        <CustomToast type='success' message='This is a success message!' />
        <CustomToast type='error' message='This is an error message!' />
        <CustomToast type='info' message='This is an informational message!' />
      </div> */}
    </div>
  )
}

export default Dashboard