"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRole } from "@/components/providers/role-provider"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const { role } = useRole()
  const router = useRouter()

  const handleSignOut = () => {
    // Clear any stored data and redirect to login
    localStorage.removeItem("userRole")
    router.push("/login")
  }

  // Role-specific profile data
  const getProfileData = () => {
    switch (role) {
      case "student":
        return {
          name: "Alex Johnson",
          email: "alex.johnson@student.acadion.edu",
          id: "STU-2024-001",
          department: "Computer Science Engineering",
          year: "3rd Year",
          section: "A",
          rollNumber: "CS21B001",
          phone: "+91 98765 43210",
          address: "123 Student Hostel, Block A, Room 204",
          guardian: "Robert Johnson",
          guardianPhone: "+91 98765 43211",
        }
      case "staff":
        return {
          name: "Dr. Sarah Wilson",
          email: "sarah.wilson@acadion.edu",
          id: "STF-001",
          department: "Computer Science Engineering",
          designation: "Associate Professor",
          experience: "8 years",
          qualification: "Ph.D. in Computer Science",
          phone: "+91 98765 43212",
          address: "Faculty Quarters, Block F-12",
          subjects: "Data Structures, Algorithms, Database Systems",
        }
      case "finance":
        return {
          name: "Suresh Patel",
          email: "suresh.patel@acadion.edu",
          id: "FIN-001",
          department: "Finance & Administration",
          designation: "Finance Manager",
          experience: "12 years",
          qualification: "MBA Finance, CA",
          phone: "+91 98765 43213",
          address: "Admin Block, Office 201",
          responsibilities: "Fee Management, Budget Planning, Financial Reports",
        }
      case "warden":
        return {
          name: "Priya Gupta",
          email: "priya.gupta@acadion.edu",
          id: "WRD-001",
          department: "Hostel Administration",
          designation: "Chief Warden",
          experience: "6 years",
          qualification: "M.A. Psychology",
          phone: "+91 98765 43214",
          address: "Warden Quarters, Hostel Block C",
          responsibilities: "Hostel Management, Student Welfare, Discipline",
        }
      default:
        return {
          name: "Dr. Rajesh Kumar",
          email: "rajesh.kumar@acadion.edu",
          id: "ADM-001",
          department: "Administration",
          designation: "System Administrator",
          experience: "15 years",
          qualification: "Ph.D. Computer Science, MBA",
          phone: "+91 98765 43215",
          address: "Admin Block, Office 301",
          responsibilities: "System Management, User Administration, Security",
        }
    }
  }

  const profileData = getProfileData()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">My Profile</h1>
          <p className="text-muted-foreground">Manage your account information and preferences</p>
        </div>
        <Button 
          variant="destructive" 
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700"
        >
          Sign Out
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Picture & Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl font-bold text-white">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">{profileData.name}</h3>
                <p className="text-muted-foreground">{profileData.designation || `${profileData.year} ${profileData.department}`}</p>
                <p className="text-sm text-muted-foreground font-mono">{profileData.id}</p>
              </div>
              <Button variant="outline" className="w-full">
                Change Picture
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={profileData.name} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={profileData.email} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={profileData.phone} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" value={profileData.department} readOnly />
              </div>
              {profileData.rollNumber && (
                <div className="space-y-2">
                  <Label htmlFor="rollNumber">Roll Number</Label>
                  <Input id="rollNumber" value={profileData.rollNumber} readOnly />
                </div>
              )}
              {profileData.qualification && (
                <div className="space-y-2">
                  <Label htmlFor="qualification">Qualification</Label>
                  <Input id="qualification" value={profileData.qualification} readOnly />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" value={profileData.address} />
            </div>

            {profileData.responsibilities && (
              <div className="space-y-2">
                <Label htmlFor="responsibilities">Responsibilities</Label>
                <Input id="responsibilities" value={profileData.responsibilities} readOnly />
              </div>
            )}

            {profileData.subjects && (
              <div className="space-y-2">
                <Label htmlFor="subjects">Subjects Teaching</Label>
                <Input id="subjects" value={profileData.subjects} readOnly />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Information */}
        {role === "student" && (
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Guardian Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="guardian">Guardian Name</Label>
                <Input id="guardian" value={profileData.guardian} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardianPhone">Guardian Phone</Label>
                <Input id="guardianPhone" value={profileData.guardianPhone} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Account Settings */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" placeholder="Enter current password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" placeholder="Enter new password" />
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t">
              <div className="space-y-1">
                <h4 className="font-medium">Account Status</h4>
                <p className="text-sm text-muted-foreground">Your account is active and verified</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-primary text-primary-foreground">Save Changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}