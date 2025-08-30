"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Instagram } from "lucide-react";
import ContactPopup from "@/components/ContactPopup";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <ContactPopup open={true} onClose={() => {}} />
    </div>
  );
}

