// Searchable Content Data Structure
const websiteContent = [
  {
    title: "Instructions Guide",
    description: "A step-by-step guide on how to properly use Advance-cheat.",
    category: "Troubleshooting",
    url: "https://r1sque.github.io/Advance-Guide/guides/tutorial/",
  },
  {
    title: "ERROR 1 KML4 Fix",
    description: "A step-by-step guide on how to fix ERROR 1 KML4.",
    category: "Troubleshooting",
    url: "https://r1sque.github.io/Advance-Guide/guides/troubleshooting/ERROR-1-KML4/",
  },
  {
    title: "ERROR 1 KML1 Fix",
    description: "A step-by-step guide on how to fix ERROR 1 KML1.",
    category: "Troubleshooting",
    url: "https://r1sque.github.io/Advance-Guide/guides/troubleshooting/ERROR-1-KML1/",
  },
  {
    title: "Fix Injection Softlock",
    description:
      "A step-by-step guide on how to fix the cheat softlocking during injection.",
    category: "Troubleshooting",
    url: "https://r1sque.github.io/Advance-Guide/guides/troubleshooting/Injection-Softlock/",
  },
  {
    title: "Miscellaneous Fixes",
    description:
      "A step-by-step guide on how to fix various issues you may encounter.",
    category: "Troubleshooting",
    url: "https://r1sque.github.io/Advance-Guide/guides/troubleshooting/Miscellaneous/",
  },
  {
    title: "How to Import & Export Configs",
    description: "A step-by-step guide to managing the cheat configurations.",
    category: "Configuration",
    url: "https://r1sque.github.io/Advance-Guide/guides/troubleshooting/Functionalities/",
  },
  {
    title: "Understanding Binds System",
    description: "Learn how the binds system works and how to set it up.",
    category: "Configuration",
    url: "https://r1sque.github.io/Advance-Guide/guides/troubleshooting/Functionalities/",
  },
  {
    title: "Revo Uninstaller Guide",
    description: "How to use Revo Uninstaller to remove programs completely.",
    category: "Tools",
    url: "https://r1sque.github.io/Advance-Guide/guides/tools/",
  },
  {
    title: "Using Defender Control",
    description: "How to use Defender Control to disable Windows Defender.",
    category: "Tools",
    url: "https://r1sque.github.io/Advance-Guide/guides/tools/",
  },
  {
    title: "Using Windows Update Blocker",
    description: "How to use Windows Update Blocker to stop Windows updates.",
    category: "Tools",
    url: "https://r1sque.github.io/Advance-Guide/guides/tools/",
  },
  {
    title: "Installing DirectX Runtimes",
    description: "How and why install DirectX Runtimes essential libraries.",
    category: "Dependencies Tools",
    url: "https://r1sque.github.io/Advance-Guide/guides/tools/",
  },
  {
    title: "Installing Visual C++ Redistributables",
    description:
      "How and why install Visual C++ Redistributable Runtimes libraries.",
    category: "Dependencies Tools",
    url: "https://r1sque.github.io/Advance-Guide/guides/tools/",
  },
  // Add more content here
];

// Search Functionality
const siteSearch = document.getElementById("siteSearch");
const searchResults = document.getElementById("searchResults");

if (siteSearch && searchResults) {
  siteSearch.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm.length < 2) {
      searchResults.classList.add("hidden");
      return;
    }

    // Filter content
    const filteredContent = websiteContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );

    // Display results
    if (filteredContent.length > 0) {
      searchResults.innerHTML = filteredContent
        .map(
          (item) => `
            <a href="${item.url}" class="block p-3 transition-all duration-300 hover:bg-[#26272e] hover:translate-x-2 rounded space-y-2 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[4px] before:h-full before:bg-[#8ea7d1] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
                <div class="text-sm text-[#8ea7d1] font-semibold">${item.category}</div>
                <h3 class="text-lg font-semibold">${item.title}</h3>
                <p class="text-gray-300">${item.description}</p>
            </a>
        `
        )
        .join("");
      searchResults.classList.remove("hidden");
    } else {
      searchResults.innerHTML = `
        <div class="p-3 text-center text-gray-400 text-sm">
            <p>No guides found matching "${searchTerm}"</p>
        </div>
      `;
      searchResults.classList.remove("hidden");
    }
  });

  // Close results when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      searchResults.classList.add("hidden");
    }
  });

  // Prevent results from closing when clicking inside
  searchResults.addEventListener("click", (e) => e.stopPropagation());
} else {
  console.error("Search input or results container not found.");
}
