import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28FD0", "#FF6384"];

const Analysis = () => {
  const axiosSecure = useAxiosSecure();

  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, appRes, scholarshipRes, reviewRes] = await Promise.all([
          axiosSecure.get("/users"),
          axiosSecure.get("/application-analysis"),
          axiosSecure.get("/scholarship-analysis"),
          axiosSecure.get("/scholarship-reviews"),
        ]);

        setUsers(userRes.data);
        setApplications(appRes.data);
        setScholarships(scholarshipRes.data);
        setReviews(reviewRes.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure]);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  // ---------- Prepare chart data ----------

  // 1. Users by Role
  const rolesData = ["student", "moderator", "admin"].map((role) => ({
    name: role,
    value: users.filter((u) => u.role === role).length,
  }));

  // 2. Applications by Scholarship Category
  const categoryData = ["Full fund", "Partial", "Self-fund"].map((category) => ({
    category,
    count: applications.filter((a) => a.scholarshipCategory === category).length,
  }));

  // 3. Applications vs Payment Status per scholarship
  const scholarshipPaymentData = scholarships.map((s) => {
    const apps = applications.filter((a) => a.scholarshipId === s._id);
    return {
      scholarshipName: s.scholarshipName,
      paid: apps.filter((a) => a.paymentStatus === "paid").length,
      unpaid: apps.filter((a) => a.paymentStatus !== "paid").length,
    };
  });

  // 4. Average Ratings per Scholarship
  const ratingData = scholarships.map((s) => {
    const schReviews = reviews.filter((r) => r.scholarshipId === s._id);
    const avgRating =
      schReviews.reduce((acc, r) => acc + r.rating, 0) /
      (schReviews.length || 1);
    return {
      scholarshipName: s.scholarshipName,
      avgRating: parseFloat(avgRating.toFixed(1)),
    };
  });

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Chart 1: Users by Role */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-center">User Roles</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={rolesData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {rolesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}`, "Users"]} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2: Applications by Scholarship Category */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-center">
          Applications by Category
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
            <Bar dataKey="count" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 3: Applications vs Payment Status */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-center">
          Applications Payment Status
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={scholarshipPaymentData}
            margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="scholarshipName"
              angle={-35}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="paid" stackId="a" fill="#0088FE" />
            <Bar dataKey="unpaid" stackId="a" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 4: Average Ratings per Scholarship */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-center">
          Average Scholarship Ratings
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={ratingData}
            margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="scholarshipName"
              angle={-35}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis domain={[0, 5]} />
            <Tooltip formatter={(value) => [`${value}`, "Rating"]} />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="avgRating"
              stroke="#FFBB28"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analysis;
