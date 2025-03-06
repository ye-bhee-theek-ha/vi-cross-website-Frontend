"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust import path as needed

export default function CountdownSection() {
  // Set your target date/time here (e.g., Dec 31, 2025 23:59:59)
  const TARGET_DATE = new Date("2025-12-31T23:59:59Z").getTime();

  // Local state for time left
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate the remaining time
  const getTimeLeft = () => {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      // Countdown finished or date is in the past
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    // Update time left every second
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 text-white relative">
      <div className="absolute inset-0 z-10 bg-black/40"></div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-seU6e9HiK388NYUg53JQ3AtkMozPm0.png"
        alt="Virtual Exhibition Space"
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-gray-300 mb-2">UPCOMING EXHIBITIONS</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-8">
          Counting Time &amp; Not Yet Registered?
          <br />
          Hurry Up!
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          <div className="w-24 h-24 bg-black/30 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-xs">Days</span>
          </div>
          <div className="w-24 h-24 bg-black/30 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-xs">Hours</span>
          </div>
          <div className="w-24 h-24 bg-black/30 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-xs">Minutes</span>
          </div>
          <div className="w-24 h-24 bg-black/30 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-xs">Seconds</span>
          </div>
        </div>

        <Button className="bg-white text-indigo-900 hover:bg-gray-100 rounded-full px-6">
          Register Now
        </Button>
      </div>
    </section>
  );
}
