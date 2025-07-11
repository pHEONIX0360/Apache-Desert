"use client";
import Navbar from "./Navbar";
import NavProfile from "./NavProfile";
import { useAuth } from "./context/AuthContext";

export default function NavSwitcher() {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return null;
  return isAuthenticated ? <NavProfile /> : <Navbar />;
} 