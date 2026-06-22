import type { Metadata } from "next";
import { SpeakingRoomView } from "@/features/speaking/views/speaking-room-view";

export const metadata: Metadata = { title: "Speaking Room" };

export default function SpeakingRoomPage() {
  return <SpeakingRoomView />;
}
