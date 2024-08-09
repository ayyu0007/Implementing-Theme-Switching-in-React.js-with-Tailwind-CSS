import React from 'react';
import DarkLightToggle from '../DarkLight/DarkLightToggle.jsx';
// import { FaCheck } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-background shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <header className="bg-background text-accent flex justify-between items-center p-6 border-b border-accent">
        <div className="text-2xl font-bold">Ayush Street</div>
        <div className="flex space-x-6 text-sm text-muted">
          <span className="bg-background text-accent px-3 py-1 rounded-lg border border-accent">Organization: Ayush Street</span>
          <span className="bg-background text-accent px-3 py-1 rounded-lg border border-accent">Role: INTERNAL</span>
          <span className='text-accent'>Impersonated Session</span>
          <span className='text-accent'>|</span>
          <span className='text-accent'>Proceed with caution</span>
          <span className='text-accent'>|</span>
          <span className='text-accent'>Email: ayush@gmail.com</span>
        </div>
        <div className="w-12 h-12 rounded-full text-accent flex items-center justify-center text-xl font-semibold">
          AS
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="bg-background p-6 lg:w-1/4 border-r border-muted">
          <nav className="space-y-4">
            <a href="#" className="text-accent font-semibold flex items-center hover:bg-accent hover:text-background rounded-lg px-3 py-2 transition">
              <i className="fas fa-th-list mr-2" />
              Overview
            </a>
            <a href="#" className="text-accent font-semibold flex items-center hover:bg-accent hover:text-background rounded-lg px-3 py-2 transition">
              <i className="fas fa-question-circle mr-2" />
              FAQ
            </a>
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8">
          <h2 className="text-3xl text-accent font-bold mb-6">Update Account Profile</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Business Information */}
            <div className="col-span-2  bg-background border-2 border-accent text-accent rounded-lg p-6 shadow-md">
              <h3 className="text-2xl text-accent font-semibold mb-4">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-accent font-medium mb-1">Business Name</label>
                  <input type="text" className="w-full border-2 border-accent rounded-lg px-3 py-2 bg-background" defaultValue="React Training" disabled />
                </div>
                <div>
                  <label className="block text-accent font-medium mb-1">Phone Number</label>
                  <input type="text" className="w-full border-2 border-accent rounded-lg px-3 py-2 bg-background" defaultValue="+1 (904) 717-4242" disabled />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-accent font-medium mb-1">Address</label>
                  <input type="text" className="w-full border-2 border-accent rounded-lg px-3 py-2 bg-background" defaultValue="2151 Consulate Drive, Suite 5, Orlando, FL 23564" disabled />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="col-span-2 bg-background border-2 border-accent rounded-lg p-6 shadow-md mt-6 lg:mt-0">
              <h3 className="text-2xl text-accent font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-accent font-medium mb-1">Email Address (Used to login)</label>
                  <input type="text" className="w-full border-2 text-accent border-accent rounded-lg px-3 py-2 bg-background" defaultValue="ayush@gmail.com" disabled />
                </div>
                <div>
                  <label className="block text-accent font-medium mb-1">Phone Number</label>
                  <input type="text" className="w-full text-accent border-2 border-accent rounded-lg px-3 py-2 bg-background" defaultValue="+1 (904) 717-4242" disabled />
                </div>
                <div>
                  <label className="block text-accent font-medium mb-1">Department</label>
                  <input type="text" className="w-full text-accent border-2 border-accent rounded-lg px-3 py-2 bg-background" defaultValue="Sales" disabled />
                </div>
                <div>
                  <label className="block text-accent font-medium mb-1">Address</label>
                  <input type="text" className="w-full text-accent border-2 border-accent rounded-lg px-3 py-2 bg-background" defaultValue="2151 Consulate Drive, Suite 5, Orlando, FL 23564" disabled />
                </div>
              </div>
            </div>

            {/* DarkLightToggle Component */}
            <div className="col-span-2 mt-6 lg:mt-0">
              <DarkLightToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
