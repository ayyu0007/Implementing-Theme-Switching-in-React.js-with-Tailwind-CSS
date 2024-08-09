
import React from 'react';
import DarkLightToggle from '../DarkLight/DarkLightToggle.jsx';
// import { FaCheck } from "react-icons/fa6";

const Profile = () => {
  return (
  
      <div className="max-w-screen-2xl bg-background shadow-lg">
        {/* Header Section */}
        <header className="bg-background text-accent flex justify-between items-center p-4 rounded-t-lg">
          <div className="text-xl font-bold">Ayush Street</div>
          <div className="space-x-4">
            <span className="bg-background px-2 py-1 rounded">Organization: Ayush Street</span>
            <span className="bg-background px-2 py-1 rounded">Role: INTERNAL</span>
            <span>Impersonated Session</span>
            <span>|</span>
            <span>Proceed with caution</span>
            <span>|</span>
            <span>Email: ayush@gmail.com</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">AS</div>
        </header>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row bg-background">
          {/* Sidebar */}
          <aside className="bg-background p-4 lg:w-1/4">
            <nav className="space-y-4">
              <a href="#" className=" text-accent font-semibold flex items-center">
                <i className="fas fa-th-list mr-2" />
                Overview
              </a>
              <a href="#" className=" text-accent font-semibold flex items-center">
                <i className="fas fa-question-circle mr-2" />
                FAQ
              </a>
            </nav>
          </aside>
          {/* Content */}
          <div className="flex-1 p-4">
            <h2 className="text-2xl text-accent font-bold mb-4">Update Account Profile</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Profile Card */}
              <div className="bg-background border-2 border-accent rounded-lg p-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-background text-accent rounded-full mx-auto flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold">RT</span>
                  </div>
                  <h3 className="text-xl text-accent font-semibold">React Training</h3>
                  <p className="text-accent">Last Updated: 23NOV2023 8:14:23 PM</p>
                </div>
                <div className="mt-4 p-4 border-2 border-accent text-center">
                  <i className="fas fa-file-upload text-4xl text-accent mb-2" />
                  <p className="text-accent">Drop files here or</p>
                  <button className="bg-accent text-white px-4 py-2 rounded">Choose Files</button>
                </div>
                <button className="mt-4 w-full bg-accent text-white py-2 rounded">Update Profile</button>
              </div>
              {/* Business Information */}
              <div className="col-span-2 bg-background border-2 border-accent text-accent rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-accent">Business Name</label>
                    <input type="text" className="w-full  border-2 border-accent rounded px-2 py-1 bg-background" defaultValue="React Training" disabled />
                  </div>
                  <div>
                    <label className="block text-accent">Phone Number</label>
                    <input type="text" className="w-full  border-2 border-accent rounded px-2 py-1 bg-background" defaultValue="+1 (904) 717-4242" disabled />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-accent">Address</label>
                    <input type="text" className="w-full  border-2 border-accent rounded px-2 py-1 bg-background" defaultValue="2151 Consulate Drive, Suite 5, Orlando, FL 23564" disabled />
                  </div>
                </div>
              </div>
              {/* Personal Information */}
              <div className="col-span-2 bg-background  border-2 border-accent text-accent rounded-lg p-4 mt-4">
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-accent">Email Address (Used to login)</label>
                    <input type="text" className="w-full  border-2 border-accent rounded px-2 py-1 bg-background" defaultValue="React Training" disabled />
                  </div>
                  <div>
                    <label className="block text-accent">Phone Number</label>
                    <input type="text" className="w-full  border-2 border-accent rounded px-2 py-1 bg-background" defaultValue="+1 (904) 717-4242" disabled />
                  </div>
                  <div>
                    <label className="block text-accent">Department</label>
                    <input type="text" className="w-full  border-2 border-accent rounded px-2 py-1 bg-background" defaultValue="Sales" disabled />
                  </div>
                  <div>
                    <label className="block text-accent">Address</label>
                    <input type="text" className="w-full  border-2 border-accent rounded px-2 py-1 bg-background" defaultValue="2151 Consulate Drive, Suite 5, Orlando, FL 23564" disabled />
                  </div>
                </div>
                <button className="mt-4 bg-accent text-white px-4 py-2 rounded">Save</button>
              </div>
              <DarkLightToggle/>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Profile;
