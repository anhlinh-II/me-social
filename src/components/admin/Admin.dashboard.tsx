import CountUp from 'react-countup';
import { FiUsers } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { MdOutlineGroups2 } from "react-icons/md";
import { PiShootingStarLight } from "react-icons/pi";
import { SlCompass } from "react-icons/sl";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

interface LabelProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
}

const Dashboard = () => {
    const data = [
        { name: '2/2024', totalUsers: 0 },
        { name: '3/2024', totalUsers: 400 },
        { name: '4/2024', totalUsers: 200 },
        { name: '5/2024', totalUsers: 400 },
        { name: '6/2024', totalUsers: 0 },
    ];

    const data01 = [
        {
            "name": "Less than 18 yearsold",
            "value": 208
        },
        {
            "name": "Greater than 35 yearsold",
            "value": 307
        },
        {
            "name": "From 18 to 35 yearsold",
            "value": 953
        }
    ];

    const renderLineChart = (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart width={100} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: LabelProps) => {
        const RADIAN = Math.PI / 180;
        const x = cx + (innerRadius + (outerRadius - innerRadius) / 2) * Math.cos(-midAngle * RADIAN);
        const y = cy + (innerRadius + (outerRadius - innerRadius) / 2) * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"  // You can change the color to contrast with the pie segment
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const renderPieChart = (
        <PieChart width={330} height={250}>
            <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}  // Increase outerRadius for a bigger pie chart
                fill="#8884d8"
                labelLine={false}  // Disable the default label line
                label={renderCustomizedLabel}  // Use custom label
            >
                {/* Map over the data and assign a color to each segment */}
                {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
    return (
        <div className="bg-gray-200 h-fit -mb-8 flex flex-col justify-start items-center p-6">
            <div className="flex justify-center gap-4 bg-gray-200 w-full">
                <div className="bg-white flex items-center justify-around rounded-lg h-[120px] w-full">
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">Total Users</span>
                        <span className="text-2xl">+<CountUp start={0} end={1000} duration={2.5} delay={0.3} /></span>
                    </div>
                    <span className="text-2xl"><FiUsers /></span>
                </div>
                <div className="bg-white flex items-center justify-around rounded-lg h-[120px] w-full">
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">Total Posts</span>
                        <span className="text-2xl">+<CountUp start={0} end={1000} duration={2.5} delay={0.3} /></span>
                    </div>
                    <span className="text-2xl"><HiOutlineNewspaper /></span>
                </div>
                <div className="bg-white flex items-center justify-around rounded-lg h-[120px] w-full">
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">Total Likes</span>
                        <span className="text-2xl">+<CountUp start={0} end={1000} duration={2.5} delay={0.3} /></span>
                    </div>
                    <span className="text-2xl"><PiShootingStarLight /></span>
                </div>
                <div className="bg-white flex items-center justify-around rounded-lg h-[120px] w-full">
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">Total Groups</span>
                        <span className="text-2xl">+<CountUp start={0} end={1000} duration={2.5} delay={0.3} /></span>
                    </div>
                    <span className="text-2xl"><MdOutlineGroups2 /></span>
                </div>
                <div className="bg-white flex items-center justify-around rounded-lg h-[120px] w-full">
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">Total Reels</span>
                        <span className="text-2xl">+<CountUp start={0} end={1000} duration={2.5} delay={0.3} /></span>
                    </div>
                    <span className="text-2xl"><SlCompass /></span>
                </div>
            </div>
            {/* charts */}
            <div className='mt-8 flex gap-8 w-full'>
                <div className='bg-white p-4 rounded-lg shadow-md w-2/3 flex flex-col gap-4 items-center'>
                    <span className='font-semibold text-base text-sky-700'>Total <strong>Users</strong> through months</span>
                    {renderLineChart}
                </div>
                <div className='bg-white p-4 rounded-lg shadow-md w-1/3 flex flex-col items-center'>
                    <span className='font-semibold text-base text-sky-700'>Percentage of <strong>Users</strong> according to users's age</span>
                    {renderPieChart}
                </div>
            </div>
            <div className='mt-8 flex gap-8 w-full'>
                <div className='bg-white p-4 rounded-lg shadow-md w-1/3 flex flex-col items-center'>
                    <span className='font-semibold text-base text-sky-700'>Percentage of <strong>Posts</strong> according to users's age</span>
                    {renderPieChart}
                </div>
                <div className=' bg-white p-4 rounded-lg shadow-md w-2/3 flex flex-col gap-4 items-center'>
                    <span className='font-semibold text-base text-sky-700'>Total <strong>Posts</strong> through months</span>
                    {renderLineChart}
                </div>
            </div>
            <div className='mt-8 flex gap-8 w-full'>
                <div className=' bg-white p-4 rounded-lg shadow-md w-2/3 flex flex-col gap-4 items-center'>
                    <span className='font-semibold text-base text-sky-700'>Total <strong>Likes</strong> through months</span>
                    {renderLineChart}
                </div>
                <div className='bg-white p-4 rounded-lg shadow-md w-1/3 flex flex-col items-center'>
                    <span className='font-semibold text-base text-sky-700'>Percentage of <strong>Likes</strong> according to users's age</span>
                    {renderPieChart}
                </div>
            </div>
            <div className='mt-8 flex gap-8 w-full'>
                <div className='bg-white p-4 rounded-lg shadow-md w-1/3 flex flex-col items-center'>
                    <span className='font-semibold text-base text-sky-700'>Percentage of <strong>Stories</strong> according to users's age</span>
                    {renderPieChart}
                </div>
                <div className=' bg-white p-4 rounded-lg shadow-md w-2/3 flex flex-col gap-4 items-center'>
                    <span className='font-semibold text-base text-sky-700'>Total <strong>Posts</strong> through months</span>
                    {renderLineChart}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
