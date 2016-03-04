'use strict';

var sansCriticalControlsBarChartLabelsArray = ['CSC-1','CSC-2','CSC-3','CSC-4','CSC-5','CSC-6','CSC-7','CSC-8','CSC-9','CSC-10','CSC-11','CSC-12','CSC-13','CSC-14','CSC-15','CSC-16','CSC-17','CSC-18','CSC-19','CSC-20'];

var recomendationsHeaderArray = ['Control', 'Description'];

var recomendationsArray = [
  ['CSC-1-1','Deploy an automated asset inventory discovery tool and use it to build a preliminary asset inventory of systems connected to an organizationís public and private network(s). Both active tools that scan through network address ranges and passive tools that identify hosts based on analyzing their traffic should be employed.'],
  ['CSC-1-2','Ensure that all equipment acquisitions automatically update the inventory system as new, approved devices are connected'],
  ['CSC-2-1','Deploy application whitelisting technology that allows systems to run software only if it is included on the whitelist and prevents execution of all other software on the system.'],
  ['CSC-2-2','Devise a list of authorized software and version that is required in the enterprise for each type of system, including servers, workstations, and laptops of various kinds and uses.'],
  ['CSC-3-1','Establish and ensure the use of standard secure configurations of your operating systems.'],
  ['CSC-3-2','Implement automated patching tools and processes for both applications and for operating system software.'],
  ['CSC-3-3','Limit administrative privileges to very few users who have both the knowledge necessary to administer the operating system and a business need to modify the configuration of the underlying operating system.'],
  ['CSC-4-1','Run automated vulnerability scanning tools against all  systems on the network on a weekly or more frequent basis and deliver prioritized lists of the most critical vulnerabilities to each responsible system administrator along with risk scores that compare the effectiveness of system administrators and departments in reducing risk.'],
  ['CSC-4-2','Correlate event logs with information from vulnerability scans to fulfill two goals.'],
  ['CSC-5-1','Employ automated tools to continuously monitor workstations, servers, and mobile devices with antivirus, antispyware, personal firewalls, and hostbased IPS functionality.'],
  ['CSC-5-2','Employ antimalware software that offers a remote, cloudbased centralized infrastructure that compiles information on file reputations or have administrators manually push updates to all machines.'],
  ['CSC-6-1','For all acquired application software, check that the version you are using is still supported by the vendor. If not, update to the most current version and install all relevant patches and vendor security recommendations.'],
  ['CSC-6-3','For inhouse developed software, ensure that explicit error checking is performed and documented for all input, including for size, data type, and acceptable ranges or formats.'],
  ['CSC-7-1','Ensure that each wireless device connected to the network matches an authorized configuration and security profile, with a documented owner of the connection and a defined business need.'],
  ['CSC-7-3','Use wireless intrusion detection systems (WIDS) to identify rogue wireless devices and detect attack attempts and successful compromises.'],
  ['CSC-8-1','Ensure that each system is automatically backed up on at least a weekly basis, and more often for systems storing sensitive information.'],
  ['CSC-8-2','Test data on backup media on a regular basis by performing a data restoration process to ensure that the backup is properly working'],
  ['CSC-9-1','Perform gap analysis to see which skills employees need and which behaviors employees are not adhering to, using this information to build a baseline training and awareness roadmap for all employees.'],
  ['CSC-9-2','Deliver training to fill the skills gap. If possible, use more senior staff to deliver the training.'],
  ['CSC-10-1','Compare firewall, router, and switch configuration against standard secure configurations defined for each type of network device in use in the organization. The security configuration of such devices should be documented, reviewed, and approved by an organization change control board.'],
  ['CSC-10-2','All new configuration rules beyond a baselinehardened configuration that allow traffic to flow through network security devices, such as firewalls and networkbased IPS, should be documented and recorded in a configuration management system, with a specific business reason for each change, a specific individuals name responsible for that business need, and an expected duration of the need.']
];
