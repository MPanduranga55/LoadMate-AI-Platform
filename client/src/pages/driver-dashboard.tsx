import { useState } from "react";
import { Link } from "wouter";
import { FaTruck, FaBoxOpen, FaClipboardList, FaMoneyBillWave, FaUser, FaSignOutAlt, FaBell, FaCog, FaChartLine, FaMapMarkerAlt, FaCalendarAlt, FaHistory } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FreightIcon from "@/components/ui/freight-icon";

const DriverDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for the dashboard
  const availableLoads = [
    {
      id: 1,
      pickup: "Los Angeles, CA",
      delivery: "Phoenix, AZ",
      date: "May 12, 2023",
      distance: 372,
      weight: "34,000 lbs",
      rate: "$2,800",
      type: "Dry Van",
      matchScore: 98
    },
    {
      id: 2,
      pickup: "San Francisco, CA",
      delivery: "Seattle, WA",
      date: "May 13, 2023",
      distance: 808,
      weight: "42,000 lbs",
      rate: "$3,950",
      type: "Refrigerated",
      matchScore: 94
    },
    {
      id: 3,
      pickup: "Portland, OR",
      delivery: "Boise, ID",
      date: "May 14, 2023",
      distance: 430,
      weight: "28,000 lbs",
      rate: "$2,200",
      type: "Flatbed",
      matchScore: 92
    },
    {
      id: 4,
      pickup: "Denver, CO",
      delivery: "Kansas City, MO",
      date: "May 15, 2023",
      distance: 600,
      weight: "36,000 lbs",
      rate: "$2,650",
      type: "Dry Van",
      matchScore: 89
    }
  ];

  const upcomingDeliveries = [
    {
      id: 101,
      shipper: "Global Electronics Inc.",
      pickup: "Sacramento, CA",
      delivery: "Las Vegas, NV",
      pickupDate: "May 10, 2023",
      deliveryDate: "May 11, 2023",
      status: "In Transit",
      progress: 60
    },
    {
      id: 102,
      shipper: "Western Distributors",
      pickup: "Reno, NV",
      delivery: "Salt Lake City, UT",
      pickupDate: "May 16, 2023",
      deliveryDate: "May 17, 2023",
      status: "Scheduled",
      progress: 0
    }
  ];

  const recentPayments = [
    {
      id: 201,
      date: "May 5, 2023",
      amount: "$3,450",
      ref: "INV-87652",
      status: "Paid"
    },
    {
      id: 202,
      date: "April 28, 2023",
      amount: "$2,920",
      ref: "INV-87523",
      status: "Paid"
    },
    {
      id: 203,
      date: "April 22, 2023",
      amount: "$3,100",
      ref: "INV-87312",
      status: "Paid"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FreightIcon className="w-8 h-8 text-primary-800" />
            <span className="text-xl font-bold text-primary-800">FreightMate AI</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <button className="relative">
              <FaBell className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary-100 text-primary-800">JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Driver</p>
                <p className="text-xs text-slate-500">Professional Driver</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
              <nav className="space-y-1">
                <button 
                  onClick={() => setActiveTab("dashboard")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "dashboard" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaChartLine className="w-4 h-4" />
                  <span>Dashboard</span>
                </button>

                <button 
                  onClick={() => setActiveTab("loads")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "loads" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaBoxOpen className="w-4 h-4" />
                  <span>Available Loads</span>
                </button>

                <button 
                  onClick={() => setActiveTab("deliveries")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "deliveries" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaTruck className="w-4 h-4" />
                  <span>My Deliveries</span>
                </button>

                <button 
                  onClick={() => setActiveTab("payments")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "payments" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaMoneyBillWave className="w-4 h-4" />
                  <span>Payments</span>
                </button>

                <button 
                  onClick={() => setActiveTab("route")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "route" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>Route Planning</span>
                </button>

                <button 
                  onClick={() => setActiveTab("schedule")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "schedule" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>Schedule</span>
                </button>

                <button 
                  onClick={() => setActiveTab("history")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "history" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaHistory className="w-4 h-4" />
                  <span>History</span>
                </button>

                <Separator className="my-4" />

                <button 
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "profile" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaUser className="w-4 h-4" />
                  <span>Profile</span>
                </button>

                <button 
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    activeTab === "settings" 
                      ? "bg-primary-100 text-primary-800" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FaCog className="w-4 h-4" />
                  <span>Settings</span>
                </button>

                <Link href="/">
                  <button className="w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm text-slate-600 hover:bg-slate-100">
                    <FaSignOutAlt className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="dashboard" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Weekly Earnings */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500">Weekly Earnings</CardTitle>
                      <CardDescription className="text-2xl font-bold">$4,320</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-600 font-medium">
                        ↑ 12% from last week
                      </div>
                    </CardContent>
                  </Card>

                  {/* Miles Driven */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500">Miles Driven</CardTitle>
                      <CardDescription className="text-2xl font-bold">2,542</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-600 font-medium">
                        ↑ 5% from last week
                      </div>
                    </CardContent>
                  </Card>

                  {/* Load Offers */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500">Load Offers</CardTitle>
                      <CardDescription className="text-2xl font-bold">24</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-blue-600 font-medium">
                        8 new offers today
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Top Match Loads */}
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Top Match Loads</CardTitle>
                      <CardDescription>
                        AI-curated loads based on your preferences and history
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {availableLoads.slice(0, 2).map((load) => (
                          <div key={load.id} className="border border-slate-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">
                                  {load.type}
                                </Badge>
                                <div className="mt-2 font-medium">{load.pickup} → {load.delivery}</div>
                                <div className="text-sm text-slate-500">{load.date} • {load.distance} mi • {load.weight}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold">{load.rate}</div>
                                <div className="text-sm text-green-600">${(parseInt(load.rate.replace(/\D/g, '')) / load.distance).toFixed(2)}/mi</div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">
                                {load.matchScore}% Match
                              </div>
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("loads")}>
                          View All Available Loads
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Upcoming Deliveries */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Deliveries</CardTitle>
                      <CardDescription>
                        Your current and upcoming trips
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingDeliveries.filter(d => d.status === "In Transit").map((delivery) => (
                          <div key={delivery.id} className="border border-slate-200 rounded-lg p-4">
                            <div className="mb-2">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {delivery.status}
                              </Badge>
                            </div>
                            <div className="font-medium">{delivery.pickup} → {delivery.delivery}</div>
                            <div className="text-sm text-slate-500 mb-2">
                              Deliver by: {delivery.deliveryDate}
                            </div>
                            <Progress value={delivery.progress} className="h-2 mb-2" />
                            <div className="text-xs text-right text-slate-500">
                              {delivery.progress}% complete
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("deliveries")}>
                          View All Deliveries
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recent Payments */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Payments</CardTitle>
                      <CardDescription>
                        Your payment history for completed deliveries
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {recentPayments.map((payment) => (
                          <div key={payment.id} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                            <div>
                              <div className="font-medium">{payment.date}</div>
                              <div className="text-sm text-slate-500">Ref: {payment.ref}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">{payment.amount}</div>
                              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                                {payment.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("payments")}>
                          View All Payments
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Performance Metrics */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                      <CardDescription>
                        Your driver performance stats
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">On-Time Delivery</span>
                            <span className="text-sm font-medium">98%</span>
                          </div>
                          <Progress value={98} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Customer Satisfaction</span>
                            <span className="text-sm font-medium">4.9/5</span>
                          </div>
                          <Progress value={98} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Acceptance Rate</span>
                            <span className="text-sm font-medium">92%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Miles This Month</span>
                            <span className="text-sm font-medium">8,742</span>
                          </div>
                          <Progress value={72} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="loads">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h2 className="text-2xl font-bold mb-6">Available Loads</h2>
                  <div className="space-y-6">
                    {availableLoads.map((load) => (
                      <Card key={load.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div className="mb-4 md:mb-0">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className="bg-primary-100 text-primary-800">
                                  {load.type}
                                </Badge>
                                <div className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">
                                  {load.matchScore}% Match
                                </div>
                              </div>
                              <h3 className="text-lg font-bold mb-2">{load.pickup} → {load.delivery}</h3>
                              <div className="text-sm text-slate-600 grid grid-cols-2 gap-x-4 gap-y-1">
                                <div>Date: {load.date}</div>
                                <div>Distance: {load.distance} miles</div>
                                <div>Weight: {load.weight}</div>
                                <div>Equipment: {load.type}</div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <div className="text-2xl font-bold text-right mb-4 md:mb-0">{load.rate}</div>
                              <div className="text-sm text-green-600 mb-4 md:mb-0">${(parseInt(load.rate.replace(/\D/g, '')) / load.distance).toFixed(2)}/mi</div>
                              <div className="flex gap-2">
                                <Button variant="outline">Details</Button>
                                <Button>Book Load</Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="deliveries">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h2 className="text-2xl font-bold mb-6">My Deliveries</h2>
                  
                  <Tabs defaultValue="active">
                    <TabsList className="mb-6">
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="active">
                      <div className="space-y-6">
                        {upcomingDeliveries
                          .filter(delivery => delivery.status === "In Transit")
                          .map((delivery) => (
                            <Card key={delivery.id}>
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <Badge className="bg-blue-100 text-blue-800 mb-2">
                                      {delivery.status}
                                    </Badge>
                                    <h3 className="text-lg font-bold">{delivery.pickup} → {delivery.delivery}</h3>
                                    <p className="text-sm text-slate-600">Shipper: {delivery.shipper}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm">Pickup: {delivery.pickupDate}</p>
                                    <p className="text-sm font-semibold">Delivery: {delivery.deliveryDate}</p>
                                  </div>
                                </div>
                                <Progress value={delivery.progress} className="h-2 mb-2" />
                                <div className="flex justify-between text-xs text-slate-500">
                                  <span>Started</span>
                                  <span>{delivery.progress}% complete</span>
                                  <span>Delivered</span>
                                </div>
                                <div className="mt-4 flex justify-end">
                                  <Button>Update Status</Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="scheduled">
                      <div className="space-y-6">
                        {upcomingDeliveries
                          .filter(delivery => delivery.status === "Scheduled")
                          .map((delivery) => (
                            <Card key={delivery.id}>
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <Badge className="bg-amber-100 text-amber-800 mb-2">
                                      {delivery.status}
                                    </Badge>
                                    <h3 className="text-lg font-bold">{delivery.pickup} → {delivery.delivery}</h3>
                                    <p className="text-sm text-slate-600">Shipper: {delivery.shipper}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm">Pickup: {delivery.pickupDate}</p>
                                    <p className="text-sm font-semibold">Delivery: {delivery.deliveryDate}</p>
                                  </div>
                                </div>
                                <div className="mt-4 flex justify-end space-x-2">
                                  <Button variant="outline">View Details</Button>
                                  <Button>Start Trip</Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="completed">
                      <div className="text-center py-12 text-slate-500">
                        <p>Completed deliveries will appear here</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>

              {/* Placeholder content for other tabs */}
              <TabsContent value="payments">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Payments</h2>
                  <div className="space-y-4">
                    {recentPayments.map((payment) => (
                      <Card key={payment.id}>
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <div className="font-medium">{payment.date}</div>
                            <div className="text-sm text-slate-500">Reference: {payment.ref}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">{payment.amount}</div>
                            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                              {payment.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Other tabs would have similar structured content */}
              {["route", "schedule", "history", "profile", "settings"].map((tab) => (
                <TabsContent key={tab} value={tab}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 capitalize">{tab}</h2>
                    <p className="text-slate-600">This {tab} section is under development and will be available soon.</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;