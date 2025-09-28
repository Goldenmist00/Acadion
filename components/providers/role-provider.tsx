"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Role = "admin" | "student" | "finance" | "warden" | "staff"

interface RoleContextType {
  role: Role
  setRole: (role: Role) => void
  isLoaded: boolean
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("admin")
  const [isLoaded, setIsLoaded] = useState(false)

  // Get role from URL path or localStorage
  useEffect(() => {
    const path = window.location.pathname
    let detectedRole: Role = "admin"
    
    if (path.includes("/admin")) detectedRole = "admin"
    else if (path.includes("/student")) detectedRole = "student"
    else if (path.includes("/finance")) detectedRole = "finance"
    else if (path.includes("/warden")) detectedRole = "warden"
    else if (path.includes("/staff")) detectedRole = "staff"
    
    // Check localStorage for persistence, but prioritize URL
    const savedRole = localStorage.getItem("userRole") as Role
    if (savedRole && !path.includes("/admin") && !path.includes("/student") && !path.includes("/finance") && !path.includes("/warden") && !path.includes("/staff")) {
      detectedRole = savedRole
    }
    
    setRole(detectedRole)
    setIsLoaded(true)
  }, [])

  // Save role to localStorage when it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("userRole", role)
    }
  }, [role, isLoaded])

  return (
    <RoleContext.Provider value={{ role, setRole, isLoaded }}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider")
  }
  return context
}