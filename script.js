// Data for the event section
const events = [
    { title: "Google Cloud Study Jam", type: "upcoming", date: "Oct 2026", color: "#4285F4" },
    { title: "Android Dev Workshop", type: "current", date: "Today", color: "#34A853" },
    { title: "Hash Code 2025", type: "past", date: "Feb 2025", color: "#EA4335" },
    { title: "Core Team Sync", type: "upcoming", date: "Nov 2026", color: "#FBBC04" }
];

let isSignup = false;
let currentRole = 'student';

// Function to render events based on filter
function filterEvents(type) {
    const grid = document.getElementById('eventGrid');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button UI
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    grid.innerHTML = '';
    const filtered = type === 'all' ? events : events.filter(e => e.type === type);
    
    filtered.forEach(event => {
        grid.innerHTML += `
            <div class="event-card" style="border-top-color: ${event.color}">
                <h3>${event.title}</h3>
                <p>Status: <span style="color:${event.color}">${event.type.toUpperCase()}</span></p>
                <small>${event.date}</small>
            </div>
        `;
    });
}

// Modal Toggle Logic
function openModal() { document.getElementById('authModal').style.display = 'block'; }
function closeModal() { document.getElementById('authModal').style.display = 'none'; }

function switchTab(role) {
    currentRole = role;
    const title = document.getElementById('formTitle');
    document.getElementById('studentTab').classList.toggle('active', role === 'student');
    document.getElementById('coreTab').classList.toggle('active', role === 'core');
    updateFormText();
}

function toggleSignup() {
    isSignup = !isSignup;
    updateFormText();
}

function updateFormText() {
    const title = document.getElementById('formTitle');
    const submitBtn = document.querySelector('.submit-btn');
    const toggleLink = document.querySelector('.toggle-text');
    
    let roleText = currentRole === 'core' ? "Core Member" : "Student";
    
    if (isSignup) {
        title.innerText = `${roleText} Signup`;
        submitBtn.innerText = "Create Account";
        toggleLink.innerHTML = `Already have an account? <a href="#" onclick="toggleSignup()">Login</a>`;
    } else {
        title.innerText = `${roleText} Login`;
        submitBtn.innerText = "Login";
        toggleLink.innerHTML = `Don't have an account? <a href="#" onclick="toggleSignup()">Sign up</a>`;
    }
}

// Form Submission (Simulation)
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Welcome, ${currentRole}! You have successfully ${isSignup ? 'signed up' : 'logged in'}.`);
    closeModal();
});

// Initial Load
window.onload = () => filterEvents('all');
const event = [
    { title: "Cloud Study Jam", type: "upcoming", date: "Oct 2026", color: "#4285F4" },
    { title: "Android DevFest", type: "current", date: "Today", color: "#34A853" },
    { title: "Solution Challenge", type: "past", date: "Jan 2025", color: "#EA4335" }
];

function filterEvents(type) {
    const grid = document.getElementById('eventGrid');
    grid.innerHTML = '';
    
    const filtered = type === 'all' ? events : events.filter(e => e.type === type);
    
    filtered.forEach(event => {
        grid.innerHTML += `
            <div class="event-card" style="border-color: ${event.color}">
                <h3>${event.title}</h3>
                <p>Status: <strong>${event.type.toUpperCase()}</strong></p>
                <span>${event.date}</span>
            </div>
        `;
    });
}

// Modal Logic
function openModal() { document.getElementById('authModal').style.display = 'block'; }
function closeModal() { document.getElementById('authModal').style.display = 'none'; }

function switchTab(role) {
    currentRole = role;
    const adminField = document.getElementById('adminKeyField');
    const submitBtn = document.getElementById('mainSubmitBtn');
    const studentTab = document.getElementById('studentTab');
    const coreTab = document.getElementById('coreTab');

    if (role === 'core') {
        studentTab.classList.remove('active');
        coreTab.classList.add('active');
        adminField.style.display = 'block'; // Show Secret Key
        submitBtn.style.backgroundColor = '#EA4335'; // Admin Red
        submitBtn.innerText = 'Verify Admin Access';
    } else {
        coreTab.classList.remove('active');
        studentTab.classList.add('active');
        adminField.style.display = 'none'; // Hide Secret Key
        submitBtn.style.backgroundColor = '#4285F4'; // Student Blue
        submitBtn.innerText = 'Login to Student Portal';
    }
}

// Initialize
filterEvents('all');
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Save info to browser memory (Simulated Login)
    localStorage.setItem('userRole', currentRole);
    localStorage.setItem('userName', currentRole === 'core' ? 'Core Lead' : 'Student Member');

    // Smooth redirect animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 500);
});
// Sample Data for Management
let adminEvents = [
    { id: 1, name: "Cloud Study Jam", date: "Oct 20, 2026", status: "Upcoming" },
    { id: 2, name: "Android Workshop", date: "Feb 23, 2026", status: "Current" }
];

function renderAdminTable() {
    const tbody = document.getElementById('eventTableBody');
    tbody.innerHTML = '';

    adminEvents.forEach(event => {
        tbody.innerHTML += `
            <tr id="row-${event.id}">
                <td style="padding: 12px; border: 1px solid #ddd;">${event.name}</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${event.date}</td>
                <td style="padding: 12px; border: 1px solid #ddd;">
                    <span style="color: ${event.status === 'Upcoming' ? '#4285F4' : '#34A853'}">● ${event.status}</span>
                </td>
                <td style="padding: 12px; border: 1px solid #ddd;">
                    <button onclick="deleteEvent(${event.id})" style="color: #EA4335; border: none; background: none; cursor: pointer; font-weight: bold;">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteEvent(id) {
    if(confirm("Are you sure you want to remove this event?")) {
        adminEvents = adminEvents.filter(e => e.id !== id);
        renderAdminTable();
    }
}

function addEventRow() {
    const newName = prompt("Enter Event Name:");
    if (newName) {
        const newEvent = {
            id: Date.now(),
            name: newName,
            date: "TBD",
            status: "Upcoming"
        };
        adminEvents.push(newEvent);
        renderAdminTable();
    }
}

// Update the existing window.onload to include:
// if (role === 'core') { renderAdminTable(); }
function switchTab(role) {
    currentRole = role;
    const title = document.getElementById('formTitle');
    const subtitle = document.getElementById('formSubtitle');
    const adminField = document.getElementById('adminKeyField');
    const submitBtn = document.getElementById('mainSubmitBtn');

    // Reset Tabs
    document.getElementById('studentTab').classList.remove('active');
    document.getElementById('coreTab').classList.remove('active');

    if (role === 'core') {
        document.getElementById('coreTab').classList.add('active');
        title.innerText = "Core Team Authentication";
        subtitle.innerText = "Authorized GDG CSMU Personnel Only";
        adminField.style.display = "block"; // Show secret key field
        submitBtn.style.background = "#EA4335"; // Change button to Red for Admin
    } else {
        document.getElementById('studentTab').classList.add('active');
        title.innerText = "Student Login";
        subtitle.innerText = "Access your community dashboard";
        adminField.style.display = "none"; // Hide secret key
        submitBtn.style.background = "#4285F4"; // Back to Blue
    }
}
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('userEmail').value;
    const adminKey = document.getElementById('adminKey').value;

    if (currentRole === 'core') {
        // Simple security check for demonstration
        if (adminKey === "GDG2026") { 
            localStorage.setItem('userRole', 'core');
            localStorage.setItem('userName', 'Admin Lead');
            window.location.href = 'dashboard.html';
        } else {
            alert("Invalid Admin Key. Access Denied.");
        }
    } else {
        localStorage.setItem('userRole', 'student');
        localStorage.setItem('userName', email.split('@')[0]);
        window.location.href = 'dashboard.html';
    }
});