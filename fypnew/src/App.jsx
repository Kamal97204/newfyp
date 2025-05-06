import { useState } from 'react';
import ProjectStatusCard from './Components/views/home/ProjectStatusCard'
import StudentListComponent from './Components/views/home/StudentListComponent'
import UpcomingMeetingsComponent from './Components/views/home/UpcomingMeetingsComponent'
import DocumentSubmissionAlert from './Components/views/home/DocumentSubmissionAlert'
import ProjectTimelineComponent from './Components/views/home/ProjectTimelineComponent'
import SupervisorCard from './components/views/home/SupervisorCard'
import ProjectInfoBox from './Components/views/home/ProjectInfoBox'
import CardLayout from './Components/layouts/CardLayout'
import SectionContainer from './Components/layouts/SectionContainer'

function App() {
  const supervisors = [
    {
      name: "Dr. Sarah Johnson",
      department: "Computer Science",
      expertise: ["AI", "Machine Learning", "NLP"],
      availability: "Available",
      rating: "4.8",
      imageUrl: ""
    },
    {
      name: "Prof. Michael Chen",
      department: "Data Science",
      expertise: ["Big Data", "Data Mining", "Cloud Computing"],
      availability: "Limited",
      rating: "4.5",
      imageUrl: ""
    }
  ];

  const projects = [
    {
      title: "AI Chatbot for Education",
      description: "Developing an AI-powered chatbot to assist students with academic queries.",
      status: "In Progress",
      deadline: "May 15, 2024",
      students: "3"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Supervisor Dashboard" subtitle="Manage your FYP supervision activities">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectStatusCard />
          <UpcomingMeetingsComponent />
          <DocumentSubmissionAlert />
        </div>
      </SectionContainer>

      <SectionContainer title="Available Supervisors">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supervisors.map((supervisor, index) => (
            <SupervisorCard key={index} {...supervisor} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Project Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectInfoBox key={index} {...project} />
          ))}
          <CardLayout title="Quick Actions">
            <div className="space-y-3">
              <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Schedule Meeting
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                View All Students
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Document Templates
              </button>
            </div>
          </CardLayout>
        </div>
      </SectionContainer>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StudentListComponent />
        <ProjectTimelineComponent/>
      </div>
    </div>
  );
}

export default App;