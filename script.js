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

function displayJobs() {
  const jobsContainer = document.getElementById("jobs-container");
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
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
          <span data-status="${job.status}" class="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">${job.status}</span>
          <div class="flex flex-wrap gap-2">
            <button type="button" class="min-w-24 rounded-lg border border-emerald-200 px-3 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-50">Interview</button>
            <button type="button" class="min-w-24 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">Rejected</button>
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
}

displayJobs();
