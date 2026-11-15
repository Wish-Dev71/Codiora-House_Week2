
// ======================================
// SKILLHUB - FREELANCER MARKETPLACE
// ======================================


// 1. FREELANCER DATA

const freelancers = [

    {
        id: 1,
        name: "Sarah Ahmed",
        service: "Professional Website Development",
        category: "Web Development",
        price: 5000,
        rating: 4.9,
        reviews: 120,
        avatar: "https://i.pravatar.cc/150?img=47",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
        description: "I create modern, responsive and professional websites using HTML, CSS and JavaScript. I focus on clean design and user-friendly experiences."
    },

    {
        id: 2,
        name: "Ali Hassan",
        service: "Creative Logo & Brand Design",
        category: "Graphic Design",
        price: 2500,
        rating: 4.8,
        reviews: 95,
        avatar: "https://i.pravatar.cc/150?img=12",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700",
        description: "I design creative logos, brand identities and attractive graphics to help businesses build a strong visual identity."
    },

    {
        id: 3,
        name: "Ayesha Khan",
        service: "Social Media Marketing",
        category: "Digital Marketing",
        price: 3500,
        rating: 4.7,
        reviews: 80,
        avatar: "https://i.pravatar.cc/150?img=44",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=700",
        description: "I help businesses grow their online presence through social media strategies, content planning and marketing campaigns."
    },

    {
        id: 4,
        name: "Usman Malik",
        service: "SEO Blog & Article Writing",
        category: "Content Writing",
        price: 2000,
        rating: 4.6,
        reviews: 65,
        avatar: "https://i.pravatar.cc/150?img=13",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700",
        description: "I write engaging, informative and SEO-friendly blog posts and articles for websites and businesses."
    },

    {
        id: 5,
        name: "Fatima Noor",
        service: "Responsive Frontend Development",
        category: "Web Development",
        price: 7000,
        rating: 5.0,
        reviews: 150,
        avatar: "https://i.pravatar.cc/150?img=45",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
        description: "I build responsive frontend websites with modern layouts, attractive interfaces and smooth user interactions."
    },

    {
        id: 6,
        name: "Hamza Ahmed",
        service: "Professional Social Media Graphics",
        category: "Graphic Design",
        price: 3000,
        rating: 4.5,
        reviews: 55,
        avatar: "https://i.pravatar.cc/150?img=14",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=700",
        description: "I create professional social media posts, banners and promotional graphics for brands and businesses."
    }

];


// 2. GET HTML ELEMENTS

const serviceGrid = document.getElementById("serviceGrid");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const sortFilter = document.getElementById("sortFilter");

const noResults = document.getElementById("noResults");

const resultsText = document.getElementById("resultsText");


// 3. DISPLAY FREELANCER CARDS

function displayFreelancers(data) {

    if (!serviceGrid) return;

    serviceGrid.innerHTML = "";

    data.forEach(function(person) {

        const card = document.createElement("div");

        card.className = "service-card";

        card.innerHTML = `

            <img
                src="${person.image}"
                alt="${person.service}"
                class="service-image"
            >

            <div class="card-content">

                <div class="freelancer">

                    <img
                        src="${person.avatar}"
                        alt="${person.name}"
                    >

                    <div>

                        <h3>${person.name}</h3>

                        <small>Freelancer</small>

                    </div>

                </div>

                <h2 class="service-title">
                    ${person.service}
                </h2>

                <span class="category-label">
                    ${person.category}
                </span>

                <div class="rating">

                    <i class="fa-solid fa-star"></i>

                    ${person.rating}

                    <span>
                        (${person.reviews} reviews)
                    </span>

                </div>

                <div class="card-bottom">

                    <div>

                        <small>Starting at</small>

                        <div class="price">
                            Rs. ${person.price.toLocaleString("en-PK")}
                        </div>

                    </div>

                    <a
                        href="details.html?id=${person.id}"
                        class="view-btn"
                    >
                        View Profile
                    </a>

                </div>

            </div>

        `;

        serviceGrid.appendChild(card);

    });


    // SHOW OR HIDE NO RESULTS MESSAGE

    noResults.style.display =
        data.length === 0 ? "block" : "none";


    // UPDATE RESULTS COUNT

    resultsText.textContent =
        `Showing ${data.length} freelancer(s)`;

}


// 4. SEARCH AND FILTER FUNCTION

function filterFreelancers() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const categoryValue =
        categoryFilter.value;

    const sortValue =
        sortFilter.value;


    // FILTER FREELANCERS

    let filtered = freelancers.filter(function(person) {

        const matchesSearch =

            person.name.toLowerCase().includes(searchValue) ||

            person.service.toLowerCase().includes(searchValue) ||

            person.category.toLowerCase().includes(searchValue);


        const matchesCategory =

            categoryValue === "All" ||

            person.category === categoryValue;


        return matchesSearch && matchesCategory;

    });


    // 5. SORTING OPTIONS

    if (sortValue === "low") {

        filtered.sort(function(a, b) {

            return a.price - b.price;

        });

    }

    else if (sortValue === "high") {

        filtered.sort(function(a, b) {

            return b.price - a.price;

        });

    }

    else if (sortValue === "rating") {

        filtered.sort(function(a, b) {

            return b.rating - a.rating;

        });

    }


    // DISPLAY FILTERED RESULTS

    displayFreelancers(filtered);

}


// 6. SEARCH EVENT

if (searchInput) {

    searchInput.addEventListener("input", function() {

        filterFreelancers();

    });

}


// 7. CATEGORY FILTER EVENT

if (categoryFilter) {

    categoryFilter.addEventListener("change", function() {

        filterFreelancers();

    });

}


// 8. SORTING EVENT

if (sortFilter) {

    sortFilter.addEventListener("change", function() {

        filterFreelancers();

    });

}


// 9. CATEGORY BUTTONS

document.querySelectorAll(".category-card").forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

        if (categoryFilter) {

            categoryFilter.value = selectedCategory;

            filterFreelancers();

        }

        document.getElementById("services").scrollIntoView({

            behavior: "smooth"

        });

    });

});


// 10. MOBILE NAVIGATION MENU

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {

        navLinks.classList.toggle("show");

    });

}


// 11. FREELANCER DETAILS PAGE

const detailsContainer =
    document.getElementById("serviceDetails");


if (detailsContainer) {

    const params =
        new URLSearchParams(window.location.search);

    const freelancerId =
        Number(params.get("id"));


    const person = freelancers.find(function(item) {

        return item.id === freelancerId;

    });


    if (person) {

        detailsContainer.innerHTML = `

            <div class="details-card">

                <div>

                    <img
                        src="${person.image}"
                        class="details-image"
                        alt="${person.service}"
                    >

                </div>

                <div class="details-info">

                    <span class="category-label">
                        ${person.category}
                    </span>

                    <h1>${person.service}</h1>

                    <div class="freelancer">

                        <img
                            src="${person.avatar}"
                            alt="${person.name}"
                        >

                        <div>

                            <h3>${person.name}</h3>

                            <small>Professional Freelancer</small>

                        </div>

                    </div>

                    <div class="rating">

                        <i class="fa-solid fa-star"></i>

                        ${person.rating}

                        <span>
                            (${person.reviews} reviews)
                        </span>

                    </div>

                    <p>
                        ${person.description}
                    </p>

                    <h2 class="price">
                        Starting at Rs.
                        ${person.price.toLocaleString("en-PK")}
                    </h2>

                    <a
                        href="index.html#services"
                        class="primary-btn"
                    >
                        Back to Services
                    </a>

                </div>

            </div>

        `;

    }

    else {

        detailsContainer.innerHTML = `

            <h2>Freelancer Not Found!</h2>

            <a href="index.html">
                Go Back Home
            </a>

        `;

    }

}


// 12. INITIAL DISPLAY

displayFreelancers(freelancers);
