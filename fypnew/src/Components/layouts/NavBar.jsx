import React from 'react'

function NavBar() {
  return (
    <div>  

<nav className="bg-blue-700 text-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      {/* Left side - Logo and main links */}
      <div className="flex items-center">
        {/* Logo/Brand */}
        <div className="flex-shrink-0 flex items-center">
          <i className="fas fa-graduation-cap text-2xl mr-2" />
          <span className="text-xl font-bold">FYP Supervisor</span>
        </div>
        {/* Desktop Navigation Links */}
        <div className="hidden md:ml-6 md:flex md:space-x-4">
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-blue-800">Dashboard</a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Projects</a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Students</a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Schedule</a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Documents</a>
        </div>
      </div>
      {/* Right side - User profile and notifications */}
      <div className="flex items-center">
        {/* Notifications */}
        <div className="relative mr-4">
          <button className="p-1 rounded-full hover:bg-blue-600 focus:outline-none">
            <i className="fas fa-bell" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          </button>
        </div>
        {/* User profile dropdown */}
        <div className="ml-3 relative">
          <div>
            <button className="flex items-center text-sm rounded-full focus:outline-none" id="user-menu">
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <i className="fas fa-user" />
              </div>
              <span className="ml-2 hidden md:inline">Dr. Supervisor</span>
              <i className="fas fa-chevron-down ml-1 text-xs hidden md:inline" />
            </button>
          </div>
          {/* Dropdown menu (hidden by default) */}
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white text-gray-800 hidden" id="user-dropdown">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign out</a>
          </div>
        </div>
      </div>
      {/* Mobile menu button */}
      <div className="-mr-2 flex items-center md:hidden">
        <button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none" id="mobile-menu">
          <i className="fas fa-bars" />
        </button>
      </div>
    </div>
  </div>
  {/* Mobile menu (hidden by default) */}
  <div className="md:hidden hidden" id="mobile-menu-items">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-800">Dashboard</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Projects</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Students</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Schedule</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Documents</a>
    </div>
    <div className="pt-4 pb-3 border-t border-blue-800">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
            <i className="fas fa-user" />
          </div>
        </div>
        <div className="ml-3">
          <div className="text-base font-medium">Dr. Supervisor</div>
          <div className="text-sm font-medium text-blue-200">supervisor@university.edu</div>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Your Profile</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Settings</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Sign out</a>
      </div>
    </div>
  </div>
</nav>








    </div>
  )
}

export default NavBar