import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Kings Barber
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Premium cuts for the modern gentleman. Experience the difference.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Haircut</CardTitle>
            <CardDescription>Precision cut & style</CardDescription>
          </CardHeader>
          <CardContent>
            <p>$40</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Beard Trim</CardTitle>
            <CardDescription>Shape & definition</CardDescription>
          </CardHeader>
          <CardContent>
            <p>$25</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="ghost">
          View Services
        </Button>
      </div>
    </main>
  );
}
