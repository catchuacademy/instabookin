import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export interface LoginFormProps {
  handleLogin: (e: React.FormEvent) => Promise<void>;
  handleVisible: () => void;  
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  className: string;
  loading: boolean;
  visible: boolean;
}

export function LoginForm({ handleLogin, handleVisible, email, setEmail, password, setPassword, loading, visible, className, ...props }: LoginFormProps) {


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-primary text-start mb-2 text-xl">EC Auto Admin</CardTitle>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                <Input 
                id="password" 
                type={ visible ? "text": "password" }
                placeholder="Your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required />
                <div className="absolute right-3 top-2.5 cursor-pointer" onClick={handleVisible}>
                  {visible ? <Eye size={18} /> : <EyeOff size={18} />}
                </div>
              </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </div>
            </div>
            {/* <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div> */}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
