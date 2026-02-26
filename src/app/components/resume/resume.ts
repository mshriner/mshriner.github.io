import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

interface ExperienceItem {
  title: string;
  period: string;
  hoursPerWeek: string;
  team: string;
  achievements: string[];
}

interface EmployerGroup {
  company: string;
  positions: ExperienceItem[];
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details?: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatChipsModule, MatExpansionModule],
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
})
export class ResumeComponent {
  employerGroups: EmployerGroup[] = [
    {
      company: 'Union Pacific Railroad',
      positions: [
        {
          title: 'Associate Systems Engineer',
          period: 'October 2025 - Present',
          hoursPerWeek: '40-50',
          team: 'Terminal Inventory Management Team',
          achievements: [
            'Overhauled and rolled out "Bowl Planner" function to three locations for optimizing limited capacity in classification yards, allowing greater flexibility in traffic patterns for network planning',
            'Utilized Snowflake, Teradata, and Excel to visualize core operating metrics alongside planning tool rollout',
            'Provided overnight real-time support for software cutover of subsidiary railroad to UP systems',
            'Mentored junior developers in front-end and back-end development principles and practices',
          ],
        },
        {
          title: 'Senior Project Engineer',
          period: 'May 2024 - October 2025',
          hoursPerWeek: '40-50',
          team: 'Terminal Inventory Management Team',
          achievements: [
            'Exercise an agile weekly code release schedule for high priority software development',
            'Evolve core legacy webpage for verifying planned train consist using Angular 17',
            'Optimize webpage performance using techniques such as advanced virtual scrolling',
            'Redesigned essential web interface tool for assembling and arranging outbound train consist',
            'Leveraged APIs to automate "work list" creation based on planning algorithm for car classification',
          ],
        },
        {
          title: 'Project Engineer',
          period: 'October 2022 - May 2024',
          hoursPerWeek: '40-50',
          team: 'Terminal Inventory Management Team',
          achievements: [
            'Diagnose, debug, and resolve issues with remote-control track-switching software at 8 railyards, utilizing SOTI MobiControl and Quantum Metric software for device management and troubleshooting',
            'Travel on-site during technology deployments to guide and instruct field transportation employees',
            'Worked on the NetControl system cutover in January 2024, which transitioned core software infrastructure from mainframe to a distributed microservice architecture. Triaged, investigated, and implemented solutions for reported issues in an overnight support role',
            'Serving as volunteer instructor teaching Apache Maven software to newly hired developers since January 2023, in full-day course with presentation material and lab exercises',
          ],
        },
        {
          title: 'Associate Senior App Developer',
          period: 'October 2021 - October 2022',
          hoursPerWeek: '40-45',
          team: 'Terminal Inventory Management Team',
          achievements: [
            'Provide on-call support for Android inventory tracking applications used at over 65 locations',
            "Designed framework enforcing employees's migration from desktop programs to mobile reporting",
            'Developed the Terminal Command Center and Planners project since July 2022, creating an application for operations managers to efficiently evaluate the fluidity of a rail terminal, and piloted a multitasking interface with interactive map, 4 data dashboards, railcar process planning tools, and configurable alerts',
          ],
        },
        {
          title: 'Junior App Developer',
          period: 'September 2020 - October 2021',
          hoursPerWeek: '40',
          team: 'Terminal Inventory Management Team',
          achievements: [
            'Maintain over 30 Angular web pages and 300 data service APIs critical to train yard operations',
            'Developed and update an enterprise-standard solution for load-testing data services using Gatling',
            'Collaborate with a team of 10-20 programmers using Agile software development',
          ],
        },
        {
          title: 'Technology Intern',
          period: 'May 2019 - September 2020',
          hoursPerWeek: '10-40',
          team: 'Work Order and Terminal Inventory Management Teams',
          achievements: [
            'Completed 14 tech debt and support tasks to address Java security vulnerabilities',
            'Delivered a function toggling system in 4 weeks to enable a targeted pilot of new software features',
            'Prototyped an analysis tool for local service train work events, viewable on a timeline or heat map',
          ],
        },
      ],
    },
    {
      company: 'University of Illinois',
      positions: [
        {
          title: 'Machine Learning Intern',
          period: 'May 2018 - May 2019',
          hoursPerWeek: '40 summer, 5-10 semester',
          team: 'Computer Engineering Research Fellowship',
          achievements: [
            'Developed a reinforcement learning data structure to evaluate effectiveness of website tutoring',
            'Applied models to sampled student data to glean insights on question qualities',
            'Produced an exam score prediction algorithm to aid student studying for Probability with Engineering Applications Course (ECE 313)',
          ],
        },
        {
          title: 'Network Engineering Assistant',
          period: 'October 2017 - May 2018',
          hoursPerWeek: '10-15',
          team: 'National Center for Supercomputing Applications',
          achievements: [
            'Assisted network engineers with server maintenance',
            'Inventoried network engineering equipment',
          ],
        },
      ],
    },
  ];

  education: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'University of Illinois Urbana-Champaign',
      period: 'September 2016 - May 2020',
      details: 'Overall GPA: 3.94 | Minor in German',
    },
    {
      degree: 'Study Abroad Experience',
      school: 'Vienna University of Technology, Vienna, Austria',
      period: 'September 2019 - January 2020',
      details: 'Also studied at Vienna University of Economics and Business',
    },
  ];

  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'Android',
    'HTML',
    'CSS',
    'SCSS',
    'Google Material Design',
    'Java',
    'Spring Boot',
    'Golang',
    'C++',
    'Scala',
    'Apache Maven',
    'Gatling',
    'Load Testing',
    'Code Reviews',
    'Open API Specification (OAS)',
    'Oracle SQL',
    'PL/SQL',
    'Snowflake',
    'Teradata',
    'Machine Learning',
    'Reinforcement Learning',
    'Agile Software Development',
  ];
}
