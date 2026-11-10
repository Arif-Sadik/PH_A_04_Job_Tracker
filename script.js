const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "Not Applied"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "Not Applied"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "Not Applied"
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "Not Applied"
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "Not Applied"
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "Not Applied"
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "Not Applied"
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "Not Applied"
  }
];

let activeTab = "All";

function displayJobs() {
  const jobsContainer = document.getElementById("jobs-container");
  jobsContainer.innerHTML = "";
  let filteredJobs = jobs;

  if (activeTab === "Interview") {
    filteredJobs = jobs.filter((job) => job.status === "Interview");
  } else if (activeTab === "Rejected") {
    filteredJobs = jobs.filter((job) => job.status === "Rejected");
  }

  if (filteredJobs.length === 0) {
    jobsContainer.innerHTML = `
      <div class="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center">
        <p class="text-lg font-semibold text-slate-700">No jobs available</p>
        <p class="mt-2 text-sm text-slate-500">Check back soon for new job opportunities</p>
      </div>
    `;
    updateJobsCount(0);
    return;
  }

  filteredJobs.forEach((job) => {
    const statusClasses = job.status === "Interview"
      ? "bg-emerald-100 text-emerald-700"
      : job.status === "Rejected"
        ? "bg-red-100 text-red-700"
        : "bg-slate-100 text-slate-600";
    const interviewButtonClasses = job.status === "Interview"
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "border border-emerald-200 text-emerald-700 hover:bg-emerald-50";
    const rejectedButtonClasses = job.status === "Rejected"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "border border-red-200 text-red-600 hover:bg-red-50";
    const jobCard = document.createElement("article");
    jobCard.className = "relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6";
    jobCard.dataset.jobId = job.id;
    jobCard.innerHTML = `
      <div class="flex flex-col">
        <div class="pr-12">
          <p class="text-sm font-semibold uppercase tracking-wide text-slate-500">${job.companyName}</p>
          <h3 class="mt-1 text-xl font-bold text-slate-800 sm:text-2xl">${job.position}</h3>
        </div>
        <div class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
          <span>${job.location}</span>
          <span aria-hidden="true" class="text-slate-300">•</span>
          <span>${job.type}</span>
          <span aria-hidden="true" class="text-slate-300">•</span>
          <span>${job.salary}</span>
        </div>
        <p class="mt-4 text-sm leading-6 text-slate-600">${job.description}</p>
        <div class="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span data-status="${job.status}" class="w-fit rounded-full px-3 py-1 text-xs font-semibold ${statusClasses}">${job.status}</span>
          <div class="flex flex-wrap gap-2">
            <button type="button" data-action="Interview" class="min-w-24 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${interviewButtonClasses}">Interview</button>
            <button type="button" data-action="Rejected" class="min-w-24 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${rejectedButtonClasses}">Rejected</button>
          </div>
        </div>
        <button type="button" aria-label="Delete job" class="absolute right-5 top-5 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 sm:right-6 sm:top-6">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 7h12m-9 0V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7m-7 0 .75 12.25A1.5 1.5 0 0 0 10.25 20h3.5a1.5 1.5 0 0 0 1.5-.75L16 7M10 10.5v5m4-5v5" />
          </svg>
        </button>
      </div>
    `;
    jobsContainer.appendChild(jobCard);
  });
  updateJobsCount(filteredJobs.length);
}

function updateJobStatus(jobId, newStatus) {
  if (newStatus !== "Interview" && newStatus !== "Rejected") {
    return;
  }

  const job = jobs.find((item) => item.id === jobId);

  if (!job) {
    return;
  }

  job.status = newStatus;
  displayJobs();
  updateDashboard();
}

function updateJobsCount(count) {
  const jobsCount = document.getElementById("jobs-count");
  jobsCount.textContent = count === 1 ? "1 job" : `${count} jobs`;
}

function updateTabStyles() {
  const activeClasses = "rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700";
  const inactiveClasses = "rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600";
  const allTab = document.getElementById("all-tab");
  const interviewTab = document.getElementById("interview-tab");
  const rejectedTab = document.getElementById("rejected-tab");

  allTab.className = activeTab === "All" ? activeClasses : inactiveClasses;
  interviewTab.className = activeTab === "Interview" ? activeClasses : inactiveClasses;
  rejectedTab.className = activeTab === "Rejected" ? activeClasses : inactiveClasses;
}

function updateDashboard() {
  const totalCount = document.getElementById("total-count");
  const interviewCount = document.getElementById("interview-count");
  const rejectedCount = document.getElementById("rejected-count");

  totalCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter((job) => job.status === "Interview").length;
  rejectedCount.textContent = jobs.filter((job) => job.status === "Rejected").length;
}

const jobsContainer = document.getElementById("jobs-container");

jobsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");

  if (!button) {
    return;
  }

  const jobCard = button.closest("[data-job-id]");
  const jobId = Number(jobCard.dataset.jobId);

  updateJobStatus(jobId, button.dataset.action);
});

document.getElementById("all-tab").addEventListener("click", () => {
  activeTab = "All";
  displayJobs();
  updateTabStyles();
});

document.getElementById("interview-tab").addEventListener("click", () => {
  activeTab = "Interview";
  displayJobs();
  updateTabStyles();
});

document.getElementById("rejected-tab").addEventListener("click", () => {
  activeTab = "Rejected";
  displayJobs();
  updateTabStyles();
});

displayJobs();
updateDashboard();
updateTabStyles();
