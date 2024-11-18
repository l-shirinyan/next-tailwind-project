import localFont from "next/font/local";
import { Rajdhani } from "next/font/google";

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-rajdhani",
});
export const roboto = localFont({
  src: "./Classic Robot.otf",
  variable: "--font-robot",
});
export const arabic = localFont({
  src: "./Arabic-font-2013.ttf",
  variable: "--font-arabic",
});
