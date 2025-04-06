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
import { Label } from "@/components/ui/label";
import FreightIcon from "@/components/ui/freight-icon";

const DriverDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for the dashboard with Indian locations and names
  const availableLoads = [
    {
      id: 1,
      pickup: "Mumbai, Maharashtra",
      delivery: "Pune, Maharashtra",
      date: "May 12, 2023",
      distance: 150,
      weight: "15,000 kg",
      rate: "₹21,500",
      type: "Container",
      matchScore: 98
    },
    {
      id: 2,
      pickup: "Delhi, NCR",
      delivery: "Jaipur, Rajasthan",
      date: "May 13, 2023",
      distance: 270,
      weight: "19,000 kg",
      rate: "₹32,400",
      type: "Refrigerated",
      matchScore: 94
    },
    {
      id: 3,
      pickup: "Chennai, Tamil Nadu",
      delivery: "Bangalore, Karnataka",
      date: "May 14, 2023",
      distance: 350,
      weight: "12,500 kg",
      rate: "₹18,900",
      type: "Flatbed",
      matchScore: 92
    },
    {
      id: 4,
      pickup: "Kolkata, West Bengal",
      delivery: "Bhubaneswar, Odisha",
      date: "May 15, 2023",
      distance: 450,
      weight: "16,000 kg",
      rate: "₹24,300",
      type: "Open Body",
      matchScore: 89
    }
  ];

  const upcomingDeliveries = [
    {
      id: 101,
      shipper: "Reliance Industries Ltd.",
      pickup: "Ahmedabad, Gujarat",
      delivery: "Surat, Gujarat",
      pickupDate: "May 10, 2023",
      deliveryDate: "May 11, 2023",
      status: "In Transit",
      progress: 60
    },
    {
      id: 102,
      shipper: "Tata Logistics",
      pickup: "Hyderabad, Telangana",
      delivery: "Vijayawada, Andhra Pradesh",
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
      amount: "₹28,450",
      ref: "INV-87652",
      status: "Paid"
    },
    {
      id: 202,
      date: "April 28, 2023",
      amount: "₹22,920",
      ref: "INV-87523",
      status: "Paid"
    },
    {
      id: 203,
      date: "April 22, 2023",
      amount: "₹25,100",
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
            <span className="text-xl font-bold text-primary-800">LoadMate AI</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <button className="relative">
              <FaBell className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh" />
                <AvatarFallback className="bg-primary-100 text-primary-800">RK</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Rajesh Kumar</p>
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
                      ? "bg-primary-100 text-primary-800 font-medium" 
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
                  <Card className="card-hover-effect slide-in-left">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500">Weekly Earnings</CardTitle>
                      <CardDescription className="text-2xl font-bold">₹35,850</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-600 font-medium">
                        ↑ 12% from last week
                      </div>
                    </CardContent>
                  </Card>

                  {/* Kilometers Driven */}
                  <Card className="card-hover-effect fade-in">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500">Kilometers Driven</CardTitle>
                      <CardDescription className="text-2xl font-bold">4,092</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-600 font-medium">
                        ↑ 5% from last week
                      </div>
                    </CardContent>
                  </Card>

                  {/* Load Offers */}
                  <Card className="card-hover-effect slide-in-right">
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
                  <Card className="md:col-span-2 card-hover-effect fade-in">
                    <CardHeader>
                      <CardTitle>Top Match Loads</CardTitle>
                      <CardDescription>
                        AI-curated loads based on your preferences and history
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {availableLoads.slice(0, 2).map((load, index) => (
                          <div key={load.id} className={`border border-slate-200 rounded-lg p-4 card-hover-effect ${index === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                  {load.type}
                                </Badge>
                                <div className="mt-2 font-medium">{load.pickup} → {load.delivery}</div>
                                <div className="text-sm text-slate-500">{load.date} • {load.distance} km • {load.weight}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold">{load.rate}</div>
                                <div className="text-sm text-green-600">₹{(parseInt(load.rate.replace(/\D/g, '')) / load.distance).toFixed(2)}/km</div>
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
                  <Card className="card-hover-effect fade-in">
                    <CardHeader>
                      <CardTitle>Active Deliveries</CardTitle>
                      <CardDescription>
                        Your current and upcoming trips
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingDeliveries.filter(d => d.status === "In Transit").map((delivery) => (
                          <div key={delivery.id} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
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
                            <span className="text-sm font-medium">Kilometers This Month</span>
                            <span className="text-sm font-medium">14,069</span>
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
                                <div>Distance: {load.distance} km</div>
                                <div>Weight: {load.weight}</div>
                                <div>Equipment: {load.type}</div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <div className="text-2xl font-bold text-right mb-4 md:mb-0">{load.rate}</div>
                              <div className="text-sm text-green-600 mb-4 md:mb-0">₹{(parseInt(load.rate.replace(/\D/g, '')) / load.distance).toFixed(2)}/km</div>
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

              {/* Profile tab with detailed driver information */}
              <TabsContent value="profile">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Driver Profile</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Profile Overview Card */}
                    <div className="md:col-span-1">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center">
                            <Avatar className="h-24 w-24 mb-4">
                              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh" alt="Driver Avatar" />
                              <AvatarFallback>RK</AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold">Rajesh Kumar</h3>
                            <p className="text-sm text-slate-500 mb-4">Professional Truck Driver</p>
                            
                            <div className="flex items-center justify-center mb-4">
                              <Badge className="mr-2 bg-green-100 text-green-800 hover:bg-green-200">
                                Verified
                              </Badge>
                              <Badge variant="outline" className="border-amber-300 text-amber-600">
                                4.9 ★ Rating
                              </Badge>
                            </div>
                            
                            <Button variant="outline" className="w-full mb-2">Edit Profile</Button>
                            <Button variant="outline" className="w-full">Change Password</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Driver Details */}
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Personal Information</CardTitle>
                          <CardDescription>
                            Your personal and contact information
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                              <Label className="text-xs text-slate-500">Full Name</Label>
                              <p className="font-medium">Rajesh Kumar</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Phone Number</Label>
                              <p className="font-medium">+91 98765 43210</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Email Address</Label>
                              <p className="font-medium">rajesh.kumar@example.com</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Date of Birth</Label>
                              <p className="font-medium">15 August 1985</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Driver ID</Label>
                              <p className="font-medium">DL-202305-4872</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Address</Label>
                              <p className="font-medium">742, Sector 15, Gurgaon, Haryana</p>
                            </div>
                          </div>
                          
                          <Separator className="my-4" />
                          
                          <CardTitle className="text-lg mb-3">Vehicle Information</CardTitle>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                              <Label className="text-xs text-slate-500">Vehicle Type</Label>
                              <p className="font-medium">Tata Prima LX 4930.S</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Registration Number</Label>
                              <p className="font-medium">HR 26 AD 9876</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Insurance Valid Till</Label>
                              <p className="font-medium">31 December 2023</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Capacity</Label>
                              <p className="font-medium">25 Tonnes</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Vehicle Age</Label>
                              <p className="font-medium">3 Years</p>
                            </div>
                            <div>
                              <Label className="text-xs text-slate-500">Last Maintenance</Label>
                              <p className="font-medium">10 April 2023</p>
                            </div>
                          </div>
                          
                          <Separator className="my-4" />
                          
                          <CardTitle className="text-lg mb-3">Documents</CardTitle>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="border border-slate-200 p-3">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium">Driver's License</p>
                                  <p className="text-xs text-slate-500">Valid till: 21 Jul 2027</p>
                                </div>
                                <Button variant="outline" size="sm">View</Button>
                              </div>
                            </Card>
                            <Card className="border border-slate-200 p-3">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium">Vehicle RC</p>
                                  <p className="text-xs text-slate-500">Valid till: 15 Sep 2026</p>
                                </div>
                                <Button variant="outline" size="sm">View</Button>
                              </div>
                            </Card>
                            <Card className="border border-slate-200 p-3">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium">Insurance Certificate</p>
                                  <p className="text-xs text-slate-500">Valid till: 31 Dec 2023</p>
                                </div>
                                <Button variant="outline" size="sm">View</Button>
                              </div>
                            </Card>
                            <Card className="border border-slate-200 p-3">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium">Pollution Certificate</p>
                                  <p className="text-xs text-slate-500">Valid till: 5 Feb 2024</p>
                                </div>
                                <Button variant="outline" size="sm">View</Button>
                              </div>
                            </Card>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* Route Planning Tab */}
              <TabsContent value="route">
                <div className="bg-white p-6 rounded-lg shadow-sm fade-in">
                  <h2 className="text-2xl font-bold mb-6">Route Planning</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <Card className="card-hover-effect">
                        <CardHeader>
                          <CardTitle>Plan Your Route</CardTitle>
                          <CardDescription>
                            Optimize your journey with AI route planning
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="origin">Origin</Label>
                              <select id="origin" className="w-full p-2 border border-gray-200 rounded-md">
                                <option value="Mumbai">Mumbai, Maharashtra</option>
                                <option value="Delhi">Delhi, NCR</option>
                                <option value="Kolkata">Kolkata, West Bengal</option>
                                <option value="Chennai">Chennai, Tamil Nadu</option>
                                <option value="Bangalore">Bangalore, Karnataka</option>
                              </select>
                            </div>
                            
                            <div>
                              <Label htmlFor="destination">Destination</Label>
                              <select id="destination" className="w-full p-2 border border-gray-200 rounded-md">
                                <option value="Pune">Pune, Maharashtra</option>
                                <option value="Jaipur">Jaipur, Rajasthan</option>
                                <option value="Hyderabad">Hyderabad, Telangana</option>
                                <option value="Ahmedabad">Ahmedabad, Gujarat</option>
                                <option value="Surat">Surat, Gujarat</option>
                              </select>
                            </div>
                            
                            <div>
                              <Label htmlFor="vehicleType">Vehicle Type</Label>
                              <select id="vehicleType" className="w-full p-2 border border-gray-200 rounded-md">
                                <option value="container">Container Truck</option>
                                <option value="refrigerated">Refrigerated Truck</option>
                                <option value="flatbed">Flatbed Truck</option>
                                <option value="openBody">Open Body Truck</option>
                              </select>
                            </div>
                            
                            <div>
                              <Label htmlFor="loadWeight">Load Weight (kg)</Label>
                              <input 
                                type="number" 
                                id="loadWeight" 
                                className="w-full p-2 border border-gray-200 rounded-md"
                                placeholder="15000" 
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="departureDate">Departure Date</Label>
                              <input 
                                type="date" 
                                id="departureDate" 
                                className="w-full p-2 border border-gray-200 rounded-md" 
                              />
                            </div>
                            
                            <Button className="w-full">Calculate Optimal Route</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="mt-6 card-hover-effect">
                        <CardHeader>
                          <CardTitle>Route Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Distance:</span>
                              <span className="text-sm">1,450 km</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Estimated Time:</span>
                              <span className="text-sm">22 hrs 30 mins</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Fuel Estimate:</span>
                              <span className="text-sm">290 liters</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Toll Costs:</span>
                              <span className="text-sm">₹3,450</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Rest Stops:</span>
                              <span className="text-sm">4 recommended</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="md:col-span-2">
                      <Card className="h-full card-hover-effect">
                        <CardHeader>
                          <CardTitle>Map View</CardTitle>
                          <CardDescription>
                            Interactive map with optimized route
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2">
                          <div className="relative w-full h-[500px] bg-slate-100 rounded-md overflow-hidden border-2 border-slate-200">
                            <div className="absolute inset-0 bg-white">
                              {/* India Map SVG with route path animation */}
                              <svg viewBox="0 0 800 800" className="w-full h-full">
                                {/* Simplified India Map Background */}
                                <path d="M200,100 Q300,50 400,100 Q500,150 600,100 Q650,200 700,300 Q650,400 700,500 Q650,600 600,700 Q500,650 400,700 Q300,750 200,700 Q150,600 100,500 Q150,400 100,300 Q150,200 200,100" 
                                  fill="#f0f9ff" stroke="#cbd5e1" strokeWidth="2" />
                                
                                {/* Major Cities as Points */}
                                <circle cx="250" cy="350" r="8" fill="#3b82f6" className="pulse" /> {/* Mumbai */}
                                <text x="265" y="350" fontSize="12" fill="#1e40af">Mumbai</text>
                                
                                <circle cx="320" cy="250" r="6" fill="#64748b" /> {/* Delhi */}
                                <text x="335" y="250" fontSize="12" fill="#334155">Delhi</text>
                                
                                <circle cx="450" cy="400" r="6" fill="#64748b" /> {/* Bangalore */}
                                <text x="465" y="400" fontSize="12" fill="#334155">Bangalore</text>
                                
                                <circle cx="500" cy="330" r="6" fill="#64748b" /> {/* Hyderabad */}
                                <text x="515" y="330" fontSize="12" fill="#334155">Hyderabad</text>
                                
                                <circle cx="450" cy="180" r="6" fill="#64748b" /> {/* Kolkata */}
                                <text x="465" y="180" fontSize="12" fill="#334155">Kolkata</text>
                                
                                <circle cx="350" cy="350" r="8" fill="#ef4444" className="pulse" /> {/* Pune */}
                                <text x="365" y="350" fontSize="12" fill="#b91c1c">Pune</text>
                                
                                {/* Animated Route Path */}
                                <path 
                                  d="M250,350 C270,340 290,330 310,345 C330,360 340,350 350,350" 
                                  fill="none" 
                                  stroke="#3b82f6" 
                                  strokeWidth="4" 
                                  strokeDasharray="200"
                                  strokeDashoffset="200"
                                  style={{
                                    animation: "dash 2s linear forwards"
                                  }}
                                />
                                
                                {/* Path animation */}
                                <style>
                                  {`
                                    @keyframes dash {
                                      to {
                                        stroke-dashoffset: 0;
                                      }
                                    }
                                  `}
                                </style>
                                
                                {/* Alternative Route (Dashed) */}
                                <path 
                                  d="M250,350 Q300,380 350,350" 
                                  fill="none" 
                                  stroke="#94a3b8" 
                                  strokeWidth="3" 
                                  strokeDasharray="5,5" 
                                />
                                
                                {/* Traffic Indicators */}
                                <rect x="280" y="335" width="20" height="10" fill="#22c55e" /> {/* Good traffic */}
                                <rect x="310" y="345" width="20" height="10" fill="#f59e0b" /> {/* Moderate traffic */}
                                
                                {/* Legend */}
                                <rect x="650" y="700" width="20" height="10" fill="#3b82f6" />
                                <text x="675" y="708" fontSize="10" fill="#334155">Optimal Route</text>
                                
                                <rect x="650" y="720" width="20" height="10" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                                <text x="675" y="728" fontSize="10" fill="#334155">Alternative Route</text>
                                
                                <rect x="650" y="740" width="20" height="10" fill="#22c55e" />
                                <text x="675" y="748" fontSize="10" fill="#334155">Good Traffic</text>
                                
                                <rect x="650" y="760" width="20" height="10" fill="#f59e0b" />
                                <text x="675" y="768" fontSize="10" fill="#334155">Moderate Traffic</text>
                              </svg>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="w-full flex justify-between items-center">
                            <div className="text-sm text-slate-500">
                              Powered by LoadMate AI Route Optimization
                            </div>
                            <Button variant="outline" size="sm">
                              Get Turn-by-Turn Directions
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Other tabs would have similar structured content */}
              {["schedule", "history", "settings"].map((tab) => (
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