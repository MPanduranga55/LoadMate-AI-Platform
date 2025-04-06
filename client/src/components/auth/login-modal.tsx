import { useState } from "react";
import { useLocation } from "wouter";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaTruck, FaUser } from "react-icons/fa";

// Form validation schemas
const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional()
});

const driverLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional()
});

type UserLoginValues = z.infer<typeof userLoginSchema>;
type DriverLoginValues = z.infer<typeof driverLoginSchema>;

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [activeTab, setActiveTab] = useState<string>("shipper");
  const [_, navigate] = useLocation();

  // User login form
  const userForm = useForm<UserLoginValues>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    }
  });

  // Driver login form
  const driverForm = useForm<DriverLoginValues>({
    resolver: zodResolver(driverLoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    }
  });

  const onUserSubmit = (data: UserLoginValues) => {
    console.log("User login data:", data);
    // For demonstration, we'll just close the modal
    onClose();
  };

  const onDriverSubmit = (data: DriverLoginValues) => {
    console.log("Driver login data:", data);
    // For demonstration, just close the modal
    onClose();
  };

  const handleDriverGetStarted = () => {
    onClose();
    navigate("/driver");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Sign In</DialogTitle>
          <DialogDescription className="text-center">
            Access your account to manage shipments and find the perfect freight match
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="shipper" className="w-full mt-4" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="shipper" className="flex items-center gap-2">
              <FaUser className="h-4 w-4" />
              <span>Shipper Login</span>
            </TabsTrigger>
            <TabsTrigger value="driver" className="flex items-center gap-2">
              <FaTruck className="h-4 w-4" />
              <span>Driver Login</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="shipper" className="py-4">
            <form onSubmit={userForm.handleSubmit(onUserSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="shipper-email">Email</Label>
                <Input 
                  id="shipper-email" 
                  type="email" 
                  placeholder="your@email.com" 
                  {...userForm.register("email")} 
                />
                {userForm.formState.errors.email && (
                  <p className="text-sm text-red-500">{userForm.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="shipper-password">Password</Label>
                <Input 
                  id="shipper-password" 
                  type="password" 
                  placeholder="********" 
                  {...userForm.register("password")} 
                />
                {userForm.formState.errors.password && (
                  <p className="text-sm text-red-500">{userForm.formState.errors.password.message}</p>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="shipper-remember" 
                    {...userForm.register("rememberMe")} 
                  />
                  <Label htmlFor="shipper-remember" className="text-sm">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>

              <Button type="submit" className="w-full">Sign In</Button>
              
              <div className="text-center text-sm">
                <span>Don't have an account? </span>
                <a href="#" className="text-blue-600 hover:underline">Sign up</a>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="driver" className="py-4">
            <form onSubmit={driverForm.handleSubmit(onDriverSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="driver-email">Email</Label>
                <Input 
                  id="driver-email" 
                  type="email" 
                  placeholder="your@email.com" 
                  {...driverForm.register("email")} 
                />
                {driverForm.formState.errors.email && (
                  <p className="text-sm text-red-500">{driverForm.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="driver-password">Password</Label>
                <Input 
                  id="driver-password" 
                  type="password" 
                  placeholder="********" 
                  {...driverForm.register("password")} 
                />
                {driverForm.formState.errors.password && (
                  <p className="text-sm text-red-500">{driverForm.formState.errors.password.message}</p>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="driver-remember" 
                    {...driverForm.register("rememberMe")} 
                  />
                  <Label htmlFor="driver-remember" className="text-sm">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>

              <Button type="submit" className="w-full">Sign In</Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-slate-600 mb-2">New to FreightMate AI? Join our driver network</p>
                <Button 
                  onClick={handleDriverGetStarted} 
                  type="button" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                >
                  Get Started
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex flex-col">
          <div className="text-xs text-center text-slate-500 mt-4">
            By signing in, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;